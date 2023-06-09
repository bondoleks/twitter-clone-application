package demo.project.twitter.facade.tweets;

import demo.project.twitter.config.Mapper;
import demo.project.twitter.facade.images.ServicAttachmentImage;
import demo.project.twitter.facade.users.ServiceUser;
import demo.project.twitter.model.User;

import demo.project.twitter.model.enums.TweetType;
import demo.project.twitter.model.tweet.AttachmentImage;
import demo.project.twitter.model.tweet.Tweet;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
@Log4j2
public class FacadeTweet {

    private final ServiceTweet service;
    private final ServiceUser serviceUser;
    private final ServicAttachmentImage servicAttachmentImage;
    private final Mapper mapper;




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
//        entity.setCreatedDate(new Date());

        return entity;
    }


    private DtoTweet transEntityToDto(Tweet entity) {
        DtoTweet dto = new DtoTweet();
        mapper.map().map(entity.getUser(), dto);
        mapper.map().map(entity, dto);

        dto.setUser_id(entity.getUser().getId());

       /* if (entity.getTweetType().getType() != 0)
            dto.setParent_Tweet(entity.getParentTweet().getId());
        else dto.setParent_Tweet(0L);*/

        dto.setCountReply(service.countTweets(entity.getId(), "REPLY"));
        dto.setCountRetweet(service.countTweets(entity.getId(), "QUOTE_TWEET"));

        dto.setTweet_imageUrl(getImageTweet(entity.getId()));



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

    public void save(DtoTweet Dto, TweetType tt, Long parentTweet){
        Dto.setParent_Tweet(parentTweet);
        service.saveOne(transDtoToEntity(Dto, tt));
    }

    public void saveTweetNew(String tweetBody, TweetType tt, Long parentTweetId, Long userId, Optional<String> photoUrl){
        User user = serviceUser.findById(userId);
        Tweet entity = new Tweet(tt, tweetBody, user);

        if (parentTweetId != 0) {
            Tweet parentTweet = service.getTweetById(parentTweetId);
            entity.setParentTweet(parentTweet);
        }
        entity.setUser(user);
        entity.setCreatedDate(new Date());
        Tweet newTweet = service.saveOne(entity);

        if (photoUrl.isPresent()) {
            servicAttachmentImage.saveOne(new AttachmentImage(photoUrl.get(), newTweet));
        }
    }

    public Page<Tweet> getAll(Integer sizePage, Integer numberPage) {
        return service.findAll(sizePage, numberPage);
    }


    public DtoTweetPage getAllTweetById(Long id, Integer sizePage, Integer numberPage, int key) {

        Page<Tweet> pTweet = service.getAllTweetById(id, sizePage, numberPage, key);

        List<DtoTweet> list = pTweet.
                stream().
                map(x -> getSingleTweetById(x.getId())).
                map(y-> transListTweetInDto(y)).
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
        if (listTweet.size() == 0);
        else {
            list.add(listTweet.get(0));
            id = listTweet.get(0).getId();
            getSingleTweetById1(list, id);
        }
        return list;
    }
    public List<Tweet> getSingleTweetById(Long id) {
        List<Tweet> list = new ArrayList<>();
        Tweet t = service.getTweetById(id);
        list.add(t);
        return getSingleTweetById1(list, id);
    }

    private DtoTweet transListTweetInDto1(List<Tweet> list, DtoTweet dto, int size) {


        if (size == 0);
        else {
            DtoTweet dtoNew = transEntityToDto(list.get(--size));
            dtoNew.setParentDto(dto);
            dto = transListTweetInDto1(list, dtoNew, size);
        }
        return dto;
    }

    public DtoTweet transListTweetInDto(List<Tweet> list) {
        int sizelist = list.size();
        DtoTweet dto;
        dto = transEntityToDto(list.get(--sizelist));
        dto = transListTweetInDto1(list, dto, sizelist);

        if (sizelist == 0) dto.setHeadBranchId(null);
        else dto.setHeadBranchId(list.get(0).getId());



        return dto;
    }


    public String getImageTweet(Long tweetId){
        String s;
        List<AttachmentImage> listIm = servicAttachmentImage.getAttachmentImageByTweetId(tweetId);
        s = (listIm.size() == 0) ? null :
                listIm.get(0).getImagerUrl();
        return s;
    }




     /*   List<Tweet> tweet = service.getSingleBranch(id);
        log.info(":::::::: tweet" + tweet.toString());
        return list;
    }*/
}






