package demo.project.twitter.facade.tweets;


import demo.project.twitter.dto.UserSearchDto;
import demo.project.twitter.facade.UserFacade;
import demo.project.twitter.model.User;
import demo.project.twitter.model.enums.ActionType;
import demo.project.twitter.model.enums.TweetType;
import demo.project.twitter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.Arrays;
import java.util.List;

import static java.lang.Long.parseLong;

@RequiredArgsConstructor
@RestController
@Log4j2
@RequestMapping("api/v1/tweets")
@CrossOrigin(origins = {"https://twitter-clone-application.vercel.app",
        "http://localhost:5173",
        "https://twitter-clone-application-e8cz8renm-bondoleks.vercel.app"})
public class ControllerTweet {
    private final FacadeTweet facade;
    private final UserFacade facadeUser;
    private final int ALL_TWEET_USERID = 0;
    private final int ALL_REPLY_TWEETID = 1;
    private final int ALL_TWEET = 2;
    private final int ALL_BOOKMARK = 3;

    private final UserRepository ur;


    @GetMapping("usersearch")
    public List<UserSearchDto> userSearch(@RequestParam("search_requеst") String searchRequest) {
        return facadeUser.userSearch(searchRequest);
    }

    @PostMapping("tweet/view")
    public String countViewTweet(@RequestBody DtoArrayTweet dto ,
//                               @RequestParam("profileId") Long userId,
                                 Principal principal) {


//        Long profileId = userId;
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
//        facade.saveViewTweet(profileId, dto.getArrTweetId());
return dto.getArrTweetId().length + " " + profileId;

    }


   /* @GetMapping("alluser")
    public List<User> allUser() {
        return ur.findAll();
    }*/

    @GetMapping("tweetsearch")
    public List<DtoTweet> tweetSearch(@RequestParam("search_requеst") String searchRequest, Principal principal) {

        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        return facade.tweetSearch(searchRequest, profileId);

    }

    @GetMapping("bookmark")
    public DtoTweetPage getAllBookmark(@RequestParam("sizePage") Integer sizePage,
                                       @RequestParam("numberPage") Integer numberPage,
                                       Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        return facade.getAllTweetById(0L, sizePage, numberPage, ALL_BOOKMARK, profileId);
    }

    @PostMapping("like/{tweet_id}")
    public DtoTweet like(@PathVariable("tweet_id") Long id, Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        Long tweet_id = facade.determParentTweetId(id);
        facade.markerLikeBookmarkRetweet(tweet_id, profileId, ActionType.LIKE);
        return facade.transListTweetInDto(facade.getSingleTweetById(id), profileId);
    }

    @PostMapping("bookmark/{tweet_id}")
    public void bookmark(@PathVariable("tweet_id") Long id, Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        Long tweetid = facade.determParentTweetId(id);
        facade.markerLikeBookmarkRetweet(tweetid, profileId, ActionType.BOOKMARK);
    }

    @PostMapping("retweet/{tweet_id}")
    public DtoTweet retwit(@PathVariable("tweet_id") Long id, Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        Long tweetid = facade.determParentTweetId(id);

        int marker = facade.markerLikeBookmarkRetweet(tweetid, profileId, ActionType.RETWEET);
        DtoTweet dtoTweet = facade.transListTweetInDto(facade.getSingleTweetById(id), profileId);
        if (marker == 1) {
            facade.createRetweet(tweetid, profileId);
            dtoTweet.setCountRetweet(dtoTweet.getCountRetweet() + 1);
        } else {
            facade.deleteRetweet(tweetid, profileId);
            dtoTweet.setCountRetweet(dtoTweet.getCountRetweet() - 1);
        }
        return dtoTweet;
    }

    @GetMapping("tweet/branch/{tweet_id}")
    public DtoTweet getBranch(@PathVariable("tweet_id") Long id, Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        facade.getHeadBranch(id);
        return facade.transListTweetInDto(facade.getSingleTweetById(facade.getHeadBranch(id)), profileId);

    }

    @GetMapping("tweet/{tweet_id}")
    public DtoTweet getTweetById(@PathVariable("tweet_id") Long id, Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
//        Long profileId = 12L;
        return facade.transListTweetInDto(facade.getSingleTweetById(id), profileId);
    }

    @GetMapping("tweet/all")
    public DtoTweetPage getAllTweetById(@RequestParam("sizePage") Integer sizePage,
                                        @RequestParam("numberPage") Integer numberPage,
                                        Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        return facade.getAllTweetById(0L, sizePage, numberPage, ALL_TWEET, profileId);
    }

    @GetMapping("tweet/all/notauth")
    public DtoTweetPage getAllTweetNotauthorization() {

        return facade.getAllTweetById(0L, 10, 0, ALL_TWEET, 0L);
    }

    @GetMapping("tweet/all/{user_id}")
    public DtoTweetPage getAllTweetById(@PathVariable("user_id") Long id,
                                        @RequestParam("sizePage") Integer sizePage,
                                        @RequestParam("numberPage") Integer numberPage,
                                        Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        return facade.getAllTweetById(id, sizePage, numberPage, ALL_TWEET_USERID, profileId);
    }

    @GetMapping("tweet/all/profile")
    public DtoTweetPage getAllTweetByProfile(@RequestParam("sizePage") Integer sizePage,
                                             @RequestParam("numberPage") Integer numberPage,
                                             Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        return facade.getAllTweetById(profileId, sizePage, numberPage, ALL_TWEET_USERID, profileId);
    }


    @GetMapping("reply/all/{tweet_id}")
    public DtoTweetPage getAllReplyById(@PathVariable("tweet_id") Long id,
                                        @RequestParam("sizePage") Integer sizePage,
                                        @RequestParam("numberPage") Integer numberPage,
                                        Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        Long tweetid = facade.determParentTweetId(id);
        return facade.getAllTweetById(tweetid, sizePage, numberPage, ALL_REPLY_TWEETID, profileId);
    }

    @PostMapping("tweet/save")
    public DtoTweet saveTweet(@RequestParam("tweetBody") String tweetBody,
                              @RequestParam("parentTweetId") String parentTweetId,
                              @RequestParam(value = "file", required = false) List<MultipartFile> listPhoto,
                              Principal principal) {

        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        Long tweetId = facade.saveTweetNew(tweetBody, TweetType.TWEET, parseLong(parentTweetId), profileId, listPhoto);

        return facade.transListTweetInDto(facade.getSingleTweetById(tweetId), profileId);
    }

    /*@PostMapping("tweet/save")
    public DtoTweet saveTweet(@RequestParam("tweetBody") String tweetBody,
                          @RequestParam("parentTweetId") String parentTweetId,
                          @RequestParam(value = "file", required = false) List<MultipartFile> listPhoto,
                          Principal principal) {

        if (listPhoto == null) log.info(":::::::::: null!!!!");
        else log.info(":::::::::: not null");

//        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        Long profileId = 10L;
        Long tweetId = facade.saveTweetNew(tweetBody, TweetType.TWEET, parseLong(parentTweetId), profileId, listPhoto);

        return facade.transListTweetInDto(facade.getSingleTweetById(tweetId), profileId);


    }*/

    /*@PostMapping("quote/save")
    public void saveQuote(@RequestParam("tweetBody") String tweetBody,
                          @RequestParam("parentTweetId") String parentTweetId,
                          @RequestParam("file") List<MultipartFile> listPhoto,
                          Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        *//*List<String> listUrl = facade.transListPhotoToListUrl(listPhoto);*//*
        Long tweetid = facade.determParentTweetId(parseLong(parentTweetId));
        facade.saveTweetNew(tweetBody, TweetType.QUOTE_TWEET, tweetid, profileId, listPhoto);
    }*/

    @PostMapping("quote/save")
    public DtoTweet saveQuote(@RequestParam("tweetBody") String tweetBody,
                              @RequestParam("parentTweetId") String parentTweetId,
                              @RequestParam(value = "file", required = false) List<MultipartFile> listPhoto,
                              Principal principal) {

        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        /*List<String> listUrl = facade.transListPhotoToListUrl(listPhoto);*/
        Long tweetId = facade.determParentTweetId(parseLong(parentTweetId));
        tweetId = facade.saveTweetNew(tweetBody, TweetType.QUOTE_TWEET, tweetId, profileId, listPhoto);
        return facade.transListTweetInDto(facade.getSingleTweetById(tweetId), profileId);
    }

   /* @PostMapping("reply/save")
    public void saveReply(@RequestParam("tweetBody") String tweetBody,
                          @RequestParam("parentTweetId") String parentTweetId,
                          @RequestParam("file") List<MultipartFile> listPhoto,
                          Principal principal) {
        *//*List<String> listUrl = facade.transListPhotoToListUrl(listPhoto);*//*
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        Long parentTweet_id = facade.determParentTweetId(parseLong(parentTweetId));
        facade.saveTweetNew(tweetBody, TweetType.REPLY, parentTweet_id, profileId, listPhoto);
    }*/

    @PostMapping("reply/save")
    public DtoTweet saveReply(@RequestParam("tweetBody") String tweetBody,
                              @RequestParam("parentTweetId") String parentTweetId,
                              @RequestParam(value = "file", required = false) List<MultipartFile> listPhoto,
                              Principal principal) {
        /*List<String> listUrl = facade.transListPhotoToListUrl(listPhoto);*/
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();

        Long parentTweet_id = facade.determParentTweetId(parseLong(parentTweetId));
        Long tweetId = facade.saveTweetNew(tweetBody, TweetType.REPLY, parentTweet_id, profileId, listPhoto);
        return facade.transListTweetInDto(facade.getSingleTweetById(tweetId), profileId);
    }


   /* @PostMapping("tweet/save")
    public void saveTweet(@RequestBody DtoTweet Dto) {
        facade.save(Dto, TweetType.TWEET, 0L);
    }*/

    /*@PostMapping("quote/save")
    public void saveQuote(@RequestBody DtoTweet Dto) {
        facade.save(Dto, TweetType.QUOTE_TWEET, Dto.getParent_Tweet());
    }*/

    /*@PostMapping("reply/save")
    public void saveReplay(@RequestBody DtoTweet Dto) {
        facade.save(Dto, TweetType.REPLY, Dto.getParent_Tweet());
    }*/

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.NOT_IMPLEMENTED)
    public String handlerExeption(Exception e) {
        return e.getMessage();

    }
}
