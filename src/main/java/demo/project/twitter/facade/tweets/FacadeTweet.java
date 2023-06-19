package demo.project.twitter.facade.tweets;

import demo.project.twitter.config.Mapper;
import demo.project.twitter.dto.UserDto;
import demo.project.twitter.dto.UserSearchDto;
import demo.project.twitter.facade.images.ServicAttachmentImage;
import demo.project.twitter.model.Notification;
import demo.project.twitter.model.TweetAction;
import demo.project.twitter.model.User;

import demo.project.twitter.model.enums.ActionType;
import demo.project.twitter.model.enums.BranchType;
import demo.project.twitter.model.enums.TweetType;
import demo.project.twitter.model.tweet.AttachmentImage;
import demo.project.twitter.model.tweet.Tweet;
import demo.project.twitter.service.NotificationService;
import demo.project.twitter.service.PhotoService;
import demo.project.twitter.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
@Log4j2
public class FacadeTweet {

    private final ServiceTweet service;
    private final UserService serviceUser;
    private final ServicAttachmentImage serviceImage;
    private final ServiceTweetAction serviceAction;
    private final Mapper mapper;
    private final PhotoService photo;
    private final NotificationService notificationService;


    public List<String> transListPhotoToListUrl(List<MultipartFile> listPhoto) {
        List<String> listString = new ArrayList<>();
        if (listPhoto.get(0).getContentType() != null) {
            listString = listPhoto.stream().map(f -> {
                try {
                    return photo.getPhotoUrl(f).get();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }).collect(Collectors.toList());
        }
        return listString;
    }

    public int markerLikeBookmarkRetweet(Long tweetId, Long profileId, ActionType actionType) {
        Optional<TweetAction> marker = serviceAction.getTweetAction(tweetId, profileId, actionType.getType());
        if (marker.isEmpty()) {
            serviceAction.saveTweetAction(new TweetAction(actionType, serviceUser.findById(profileId), service.getTweetById(tweetId)));
            notificationService.createNotification(new Notification(actionType, serviceUser.findById(profileId),// від кого
                                                                                serviceUser.findById(profileId),// кому
                                                    service.getTweetById(tweetId), false));
            return 1;
        } else {
            serviceAction.delTweetAction(marker.get());
            return 0;
        }
    }

    private Tweet transDtoToEntity(DtoTweet dto, TweetType tt) {

        Tweet entity = new Tweet();

        mapper.map().map(dto, entity);
        entity.setTweetType(tt);
        User user = serviceUser.findById(dto.getUser_id());
        Long tweetId = dto.getParent_Tweet();
        if (tweetId != 0) {
            Tweet parentTweet = service.getTweetById(tweetId);
            entity.setParentTweet(parentTweet);
        }
        entity.setUser(user);
        entity.setCreatedDate(new Date());

        return entity;
    }

    public BranchType getBranchType(Tweet tweet) {
        BranchType bt = BranchType.NOTBRANCH;
        int HEAD = 0;
        int BODY = 0;
        Long tweetId = tweet.getId();
        Long userId = tweet.getUser().getId();

        if (service.getSingleBranch(tweetId).size() > 0) BODY = 1;
        if ((tweet.getParentTweet() != null) && (tweet.getParentTweet().getUser().getId() == userId)) HEAD = 1;

        if ((BODY == 1) && (HEAD == 0)) bt = BranchType.HEADBRANCH;
        if ((HEAD == 1)) bt = BranchType.BODYBRANCH;

        return bt;
    }

    public DtoTweet transEntityToDto(Tweet entity, Long profileId) {
        return transEntityToDto(entity, profileId, 0);
    }

    private DtoTweet transEntityToDto(Tweet entity, Long profileId, int count) {

      /*  if ((entity.getTweetType() == TweetType.QUOTE_TWEET) &&
                (entity.getTweetBody() == null)) entity = entity.getParentTweet();*/

        DtoTweet dto = new DtoTweet();
        mapper.map().map(entity.getUser(), dto);
        mapper.map().map(entity, dto);

        dto.setBranch(getBranchType(entity));
        dto.setUser_id(entity.getUser().getId());
        dto.setMarkerRetweet(serviceAction.marker(entity.getId(), profileId, "RETWEET"));
        dto.setMarkerLike(serviceAction.marker(entity.getId(), profileId, "LIKE"));
        dto.setMarkerBookmark(serviceAction.marker(entity.getId(), profileId, "BOOKMARK"));
        dto.setCountReply(service.countTweets(entity.getId(), "REPLY"));
        dto.setCountRetweet(service.countTweets(entity.getId(), "QUOTE_TWEET"));
        dto.setCountLike(serviceAction.countLike(entity.getId(), "LIKE"));
        dto.setTweet_imageUrl(getImageTweet(entity.getId()));

        if ((entity.getTweetType() == TweetType.QUOTE_TWEET) &&
                (entity.getTweetBody() != null) && (count == 0))
            dto.setParentDto(transEntityToDto(entity.getParentTweet(), profileId, count + 1));


        return dto;
    }

    public ResponseEntity<?> getEntity(Long id) {
        DtoTweet dto = new DtoTweet();
        if (service.existsById(id)) {
            Tweet entity = service.getById(id).get();
            dto = mapper.map().map(entity, dto.getClass());
            return ResponseEntity.accepted().body(dto);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body("Object with cod " + id + " not found");
        }
    }

    public void save(DtoTweet Dto, TweetType tt, Long parentTweet) {
        Dto.setParent_Tweet(parentTweet);
        service.saveOne(transDtoToEntity(Dto, tt));
    }

    public void saveTweetNew(String tweetBody, TweetType tt, Long parentTweetId, Long userId, List<String> listUrl) {
        User user = serviceUser.findById(userId);
        Tweet entity = new Tweet(tt, tweetBody, user);

        if (parentTweetId != 0) {
            Tweet parentTweet = service.getTweetById(parentTweetId);
            entity.setParentTweet(parentTweet);
        }
        entity.setUser(user);
        entity.setCreatedDate(new Date());
        Tweet newTweet = service.saveOne(entity);

        if (listUrl.size() > 0) {
            listUrl.stream().forEach(s -> serviceImage.saveOne(new AttachmentImage(s, newTweet)));
        }
    }

    public Page<Tweet> getAll(Integer sizePage, Integer numberPage) {
        return service.findAll(sizePage, numberPage);
    }


    public DtoTweetPage getAllTweetById(Long id, Integer sizePage, Integer numberPage, int key, Long profileId) {
        Page<Tweet> pTweet = service.getAllTweetById(id, sizePage, numberPage, key, profileId);


        List<DtoTweet> list = pTweet.
                stream().
                map(x -> getSingleTweetById(x.getId())).
                map(y -> transListTweetInDto(y, profileId)).
                collect(Collectors.toList());

        DtoTweetPage dtp = new DtoTweetPage();
        dtp.setListDto(list);
        dtp.setTotalElements(pTweet.getTotalElements());
        dtp.setTotalPage(pTweet.getTotalPages());
        return dtp;
    }


    /*public DtoTweet getTweetById(Long id) {
        Tweet entity = service.getById(id).get();
        DtoTweet dto = transEntityToDto(entity);
        Integer countReplay = service.countTweets(entity.getId(), "REPLY");
        Integer countRetweet = service.countTweets(entity.getId(), "QUOTE_TWEET");
        log.info(":::::::::end");
        log.info(countRetweet);
        log.info(countReplay);
        dto.setCountReplay(countReplay);
        dto.setCountRetweet(countRetweet);
        dto.setType(entity.getTweetType().getType());


        return dto;

    }*/
    /*public List<List<DtoTweet>> getTweetByIdAndReply(Long id){
        List<List<DtoTweet>> list = new ArrayList<>();
        list.add(getSingleTweetById(id));
        return list;
    }*/
    /*private List<DtoTweet> getSingleTweetById(List<DtoTweet> list, Long id) {
        List<Tweet> listTweet = service.getSingleBranch(id);
        if (listTweet.size() == 0);
        else {
            list.add(transEntityToDto(listTweet.get(0)));
            id = listTweet.get(0).getId();
            getSingleTweetById(list, id);
        }
        return list;
    }
    public List<DtoTweet> getSingleTweetById(Long id) {
        List<DtoTweet> list = new ArrayList<>();
        list.add(transEntityToDto(service.getTweetById(id)));
        return getSingleTweetById(list, id);
    }*/


    private List<Tweet> getSingleTweetById1(List<Tweet> list, Long id) {
        List<Tweet> listTweet = service.getSingleBranch(id);
        if (listTweet.size() == 0) ;
        else {
            list.add(listTweet.get(0));
            id = listTweet.get(0).getId();
            getSingleTweetById1(list, id);
        }
        return list;
    }

    public List<Tweet> getSingleTweetById(Long id) {
        List<Tweet> list = new ArrayList<>();
        Tweet newTweet = service.getTweetById(id);
        Long newId = id;
        if ((newTweet.getTweetType() == TweetType.QUOTE_TWEET) &&
                (newTweet.getTweetBody() == null)) {
            newTweet = newTweet.getParentTweet();
            newId = newTweet.getId();
        }
        /*Tweet t = service.getTweetById(id);*/

        list.add(newTweet);
        return getSingleTweetById1(list, newId);
    }

    public Long getHeadBranch(Long tweetId) {
        Tweet tweet = service.getTweetById(tweetId);
        Long userId = tweet.getUser().getId();
        if ((tweet.getParentTweet() != null) && (tweet.getParentTweet().getUser().getId() == userId)) {
            tweetId = getHeadBranch(tweet.getParentTweet().getId());
        }

        return tweetId;
    }

    private DtoTweet transListTweetInDto1(List<Tweet> list, DtoTweet dto, int size, Long profileId) {
        if (size == 0) ;
        else {
            /*dto.setBranch(BranchType.BODYBRANCH);*/
            DtoTweet dtoNew = transEntityToDto(list.get(--size), profileId);
            dtoNew.setBranchDto(dto);
            dto = transListTweetInDto1(list, dtoNew, size, profileId);
        }
        return dto;
    }

    public DtoTweet transListTweetInDto(List<Tweet> list, Long profileId) {

        int sizelist = list.size();

        DtoTweet dto = transEntityToDto(list.get(--sizelist), profileId);
        dto = transListTweetInDto1(list, dto, sizelist, profileId);

       /* if (sizelist == 0) dto.setBranch(BranchType.NOTBRANCH);
        else dto.setBranch(BranchType.HEADBRANCH);*/

       /* Long userid = list.get(0).getUser().getId();
        if ((list.get(0).getParentTweet() != null) &&
                (list.get(0).getParentTweet().getUser().getId() == userid))
            dto.setBranch(BranchType.BODYBRANCH);*/

        return dto;
    }


    public List<String> getImageTweet(Long tweetId) {
        return serviceImage.getAttachmentImageUrlByTweetId(tweetId);
    }

    public void createRetweet(Long id, Long profileId) {
        service.createRetweet(id, serviceUser.findById(profileId));
    }

    public void deleteRetweet(Long id, Long profileId) {
        service.deleteRetweet(id, profileId);
    }

    public Long determParentTweetId(Long parentTweetId) {
        Tweet tweet = service.getTweetById(parentTweetId);
        if ((tweet.getTweetType() == TweetType.QUOTE_TWEET) &&
                (tweet.getTweetBody() == null)) parentTweetId = tweet.getParentTweet().getId();
        return parentTweetId;
    }

    /*public List<UserDto> searchByUser(String searchRequest) {
        String[] listS = searchRequest.split(" ");
        Arrays.stream(listS).forEach(s -> log.info(":::::s=" + s + "!"));
        int i = searchRequest.indexOf(" ");
        String startWord = searchRequest.substring(0, i);
        log.info("::::::::: startWord = " + startWord);
        List<User> listUser = serviceUser.searchByUser(searchRequest);


        return null;
    }*/

    public List<UserSearchDto> tweetSearch(String searchRequest) {
        Arrays.stream(searchRequest.split(" ")).
                filter(x -> !x.equals("")).
                forEach(x -> log.info("::::::::: x = " + x));



        return null;
    }




     /*   List<Tweet> tweet = service.getSingleBranch(id);
        log.info(":::::::: tweet" + tweet.toString());
        return list;
    }*/
}






