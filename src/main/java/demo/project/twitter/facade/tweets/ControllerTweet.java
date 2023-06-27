package demo.project.twitter.facade.tweets;


import demo.project.twitter.dto.UserDto;
import demo.project.twitter.dto.UserSearchDto;
import demo.project.twitter.facade.UserFacade;
import demo.project.twitter.model.User;
import demo.project.twitter.model.enums.ActionType;
import demo.project.twitter.model.enums.TweetType;
import demo.project.twitter.model.tweet.Tweet;
import demo.project.twitter.repository.UserRepository;
import demo.project.twitter.service.PhotoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.List;

import static java.lang.Long.parseLong;

@RequiredArgsConstructor
@RestController
@Log4j2
@RequestMapping("api/v1/tweets")
//@CrossOrigin("https://twitter-clone-application.vercel.app")
@CrossOrigin(origins = {"https://twitter-clone-application.vercel.app", "http://localhost:5173"})
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

    @GetMapping("alluser")
    public List<User> allUser() {
        return ur.findAll();
    }

    @GetMapping("tweetsearch")
    public List<DtoTweet> tweetSearch(@RequestParam("search_requеst") String searchRequest) {

        Long profileId = 10L;
        return facade.tweetSearch(searchRequest, profileId);

    }

    @GetMapping("bookmark")
    public DtoTweetPage getAllBookmark(@RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage) {
        Long profileId = 10L;
        return facade.getAllTweetById(0L, sizePage, numberPage, ALL_BOOKMARK, profileId);
    }

    @PostMapping("like/{tweet_id}")
    public DtoTweet like(@PathVariable("tweet_id") Long id) {
        Long profileId = 10L;
        Long tweet_id = facade.determParentTweetId(id);
        facade.markerLikeBookmarkRetweet(tweet_id, profileId, ActionType.LIKE);
        return facade.transListTweetInDto(facade.getSingleTweetById(id), profileId);
    }

    @PostMapping("bookmark/{tweet_id}")
    public void bookmark(@PathVariable("tweet_id") Long id) {
        Long profileId = 10L;
        Long tweetid = facade.determParentTweetId(id);
        facade.markerLikeBookmarkRetweet(tweetid, profileId, ActionType.BOOKMARK);
    }

    @PostMapping("retweet/{tweet_id}")
    public DtoTweet retwit(@PathVariable("tweet_id") Long id) {
        Long profileId = 10L;
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
    public DtoTweet getBranch(@PathVariable("tweet_id") Long id) {
        Long profileId = 10L;
        facade.getHeadBranch(id);
        return facade.transListTweetInDto(facade.getSingleTweetById(facade.getHeadBranch(id)), profileId);

    }

    @GetMapping("tweet/{tweet_id}")
    public DtoTweet getTweetById(@PathVariable("tweet_id") Long id) {
        Long profileId = 10L;
        return facade.transListTweetInDto(facade.getSingleTweetById(id), profileId);
    }

    @GetMapping("tweet/all")
    public DtoTweetPage getAllTweetById(@RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage) {
        Long profileId = 10L;
        return facade.getAllTweetById(0L, sizePage, numberPage, ALL_TWEET, profileId);
    }

    @GetMapping("tweet/all/notauth")
    public DtoTweetPage getAllTweetNotauthorization() {

        return facade.getAllTweetById(0L, 10, 0, ALL_TWEET, 0L);
    }

    @GetMapping("tweet/all/{user_id}")
    public DtoTweetPage getAllTweetById(@PathVariable("user_id") Long id, @RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage) {
        Long profileId = 10L;
        return facade.getAllTweetById(id, sizePage, numberPage, ALL_TWEET_USERID, profileId);
    }

    @GetMapping("tweet/all/profile")
    public DtoTweetPage getAllTweetByProfile(@RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage) {
        Long profileId = 10L;
        return facade.getAllTweetById(profileId, sizePage, numberPage, ALL_TWEET_USERID, profileId);
    }


    @GetMapping("reply/all/{tweet_id}")
    public DtoTweetPage getAllReplyById(@PathVariable("tweet_id") Long id, @RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage) {
        Long profileId = 10L;
        Long tweetid = facade.determParentTweetId(id);
        return facade.getAllTweetById(tweetid, sizePage, numberPage, ALL_REPLY_TWEETID, profileId);
    }

    @PostMapping("tweet/save")
    public void saveTweet(@RequestParam("tweetBody") String tweetBody,
                          @RequestParam("user_id") String userId,
                          @RequestParam("parentTweetId") String parentTweetId,
                          @RequestParam("file") List<MultipartFile> listPhoto, Principal principal) {
//        String userName = principal.getName();
        String userName = "ssa333";
        User user = facadeUser.getUserByName1(userName);
        Long userIdNew = user.getId();



       /* List<String> listUrl = facade.transListPhotoToListUrl(listPhoto);*/
        /*facade.saveTweetNew(tweetBody, TweetType.TWEET, parseLong(parentTweetId), userIdNew, listUrl);*/
        facade.saveTweetNew(tweetBody, TweetType.TWEET, parseLong(parentTweetId), parseLong(userId), listPhoto);
    }

    @PostMapping("quote/save")
    public void saveQuote(@RequestParam("tweetBody") String tweetBody,
                          @RequestParam("user_id") String userId,
                          @RequestParam("parentTweetId") String parentTweetId,
                          @RequestParam("file") List<MultipartFile> listPhoto) {
        /*List<String> listUrl = facade.transListPhotoToListUrl(listPhoto);*/
        Long tweetid = facade.determParentTweetId(parseLong(parentTweetId));
        facade.saveTweetNew(tweetBody, TweetType.QUOTE_TWEET, tweetid, parseLong(userId), listPhoto);
    }

    @PostMapping("reply/save")
    public void saveReply(@RequestParam("tweetBody") String tweetBody,
                          @RequestParam("user_id") String userId,
                          @RequestParam("parentTweetId") String parentTweetId,
                          @RequestParam("file") List<MultipartFile> listPhoto) {
        /*List<String> listUrl = facade.transListPhotoToListUrl(listPhoto);*/
        Long parentTweet_id = facade.determParentTweetId(parseLong(parentTweetId));
        facade.saveTweetNew(tweetBody, TweetType.REPLY, parentTweet_id, parseLong(userId), listPhoto);
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
