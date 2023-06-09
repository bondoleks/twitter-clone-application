package demo.project.twitter.facade.tweets;


import demo.project.twitter.model.enums.TweetType;
import demo.project.twitter.service.PhotoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    private final PhotoService photo;









    @GetMapping("tweet/{tweet_id}")
    public DtoTweet getTweetById(@PathVariable("tweet_id") Long id) {
        return facade.transListTweetInDto(facade.getSingleTweetById(id));
    }

    @GetMapping("tweet/all")
    public DtoTweetPage getAllTweetById(@RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        return facade.getAllTweetById(0L, sizePage,numberPage, ALL_TWEET);
    }

    @GetMapping("tweet/all/{user_id}")
    public DtoTweetPage getAllReplyById(@PathVariable("user_id") Long id, @RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        return facade.getAllTweetById(id, sizePage,numberPage, ALL_TWEET_USERID);
    }

    @GetMapping("reply/all/{tweet_id}")
    public DtoTweetPage getAllTweetById(@PathVariable("tweet_id") Long id, @RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        return facade.getAllTweetById(id, sizePage,numberPage, ALL_REPLY_TWEETID);
    }


    @PostMapping("tweet/save")
    public void saveTweet(@RequestParam("tweetBody") String tweetBody,
                          @RequestParam("user_id") String userId,
                          @RequestParam("parentTweetId") String parentTweetId,
                          @RequestParam("file") MultipartFile file) {
        try {
            facade.saveTweetNew(tweetBody, TweetType.TWEET, parseLong(parentTweetId), parseLong(userId), photo.getPhotoUrl(file));
        } catch (Exception e){}
    }

    @PostMapping("quote/save")
    public void saveQuote(@RequestParam("tweetBody") String tweetBody,
                          @RequestParam("user_id") String userId,
                          @RequestParam("parentTweetId") String parentTweetId,
                          @RequestParam("file") MultipartFile file) {
        try {
            facade.saveTweetNew(tweetBody, TweetType.QUOTE_TWEET, parseLong(parentTweetId), parseLong(userId), photo.getPhotoUrl(file));
        } catch (Exception e){}
    }

    @PostMapping("reply/save")
    public void saveReply(@RequestParam("tweetBody") String tweetBody,
                          @RequestParam("user_id") String userId,
                          @RequestParam("parentTweetId") String parentTweetId,
                          @RequestParam("file") MultipartFile file) {
        try {
            facade.saveTweetNew(tweetBody, TweetType.REPLY, parseLong(parentTweetId), parseLong(userId), photo.getPhotoUrl(file));
        } catch (Exception e){}
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
}
