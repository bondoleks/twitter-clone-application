package demo.project.twitter.facade.tweets;


import demo.project.twitter.model.enums.ActionType;
import demo.project.twitter.model.enums.TweetType;
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
@RequestMapping("tweets")
public class ControllerTweet {
    private final FacadeTweet facade;
    private final int ALL_TWEET_USERID = 0;
    private final int ALL_REPLY_TWEETID = 1;
    private final int ALL_TWEET = 2;
    private final int ALL_BOOKMARK = 3;
    private final PhotoService photo;


    @GetMapping("bookmark")
    public DtoTweetPage getAllBookmark(@RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        Long profileId = 15L;
        return facade.getAllTweetById(0L, sizePage,numberPage, ALL_BOOKMARK, profileId);
    }

    @PostMapping("like/{tweet_id}")
    public DtoTweet like(@PathVariable("tweet_id") Long id) {
        Long profileId = 15L;
        facade.markerLikeBookmark(id,profileId, ActionType.LIKE);
        return facade.transListTweetInDto(facade.getSingleTweetById(id), profileId);
    }


    @PostMapping("bookmark/{tweet_id}")
    public DtoTweet bookmark(@PathVariable("tweet_id") Long id) {
        Long profileId = 15L;
        facade.markerLikeBookmark(id,profileId, ActionType.BOOKMARK);
        return facade.transListTweetInDto(facade.getSingleTweetById(id), profileId);
    }

    @GetMapping("tweet/{tweet_id}")
    public DtoTweet getTweetById(@PathVariable("tweet_id") Long id) {
        Long profileId = 15L;
        return facade.transListTweetInDto(facade.getSingleTweetById(id), profileId);
    }

    @GetMapping("tweet/all")
    public DtoTweetPage getAllTweetById(@RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        Long profileId = 15L;
        return facade.getAllTweetById(0L, sizePage,numberPage, ALL_TWEET, profileId);
    }

    @GetMapping("tweet/all/{user_id}")
    public DtoTweetPage getAllReplyById(@PathVariable("user_id") Long id, @RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        Long profileId = 15L;
        return facade.getAllTweetById(id, sizePage,numberPage, ALL_TWEET_USERID, profileId);
    }

    @GetMapping("reply/all/{tweet_id}")
    public DtoTweetPage getAllTweetById(@PathVariable("tweet_id") Long id, @RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        Long profileId = 15L;
        return facade.getAllTweetById(id, sizePage,numberPage, ALL_REPLY_TWEETID, profileId);
    }


    @PostMapping("tweet/save")
    public void saveTweet(@RequestParam("tweetBody") String tweetBody,
                          @RequestParam("user_id") String userId,
                          @RequestParam("parentTweetId") String parentTweetId,
                          @RequestParam("file") MultipartFile file) throws Exception {

            facade.saveTweetNew(tweetBody, TweetType.TWEET, parseLong(parentTweetId), parseLong(userId), photo.getPhotoUrl(file));
    }


    @PostMapping("quote/save")
    public void saveQuote(@RequestParam("tweetBody") String tweetBody,
                          @RequestParam("user_id") String userId,
                          @RequestParam("parentTweetId") String parentTweetId,
                          @RequestParam("file") MultipartFile file) throws Exception{

            facade.saveTweetNew(tweetBody, TweetType.QUOTE_TWEET, parseLong(parentTweetId), parseLong(userId), photo.getPhotoUrl(file));
        }

    @PostMapping("reply/save")
    public void saveReply(@RequestParam("tweetBody") String tweetBody,
                          @RequestParam("user_id") String userId,
                          @RequestParam("parentTweetId") String parentTweetId,
                          @RequestParam("file") MultipartFile file) throws Exception{

            facade.saveTweetNew(tweetBody, TweetType.REPLY, parseLong(parentTweetId), parseLong(userId), photo.getPhotoUrl(file));
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
    public String handlerExeption(Exception e){
        return e.getMessage();

    }
}
