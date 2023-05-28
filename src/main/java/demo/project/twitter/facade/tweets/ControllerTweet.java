package demo.project.twitter.facade.tweets;


import demo.project.twitter.model.enums.TweetType;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@Log4j2
@RequestMapping("tweets")
public class ControllerTweet {
    private final FacadeTweet facade;






    /*@GetMapping("tweet/{id}")
    public List<List<Dt>> getTweetById(@PathVariable("id") Long id) {
        return facade.getTweetByIdAndReply(id);
    }*/
    @GetMapping("all")
    public DtoTweetPage getAllTweetById(@RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        return facade.getAllTweetById(0L, sizePage,numberPage);
    }

    @GetMapping("{id}")
    public DtoTweetPage getAllTweetById(@PathVariable("id") Long id, @RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        return facade.getAllTweetById(id, sizePage,numberPage);
    }


    @PostMapping("tweet/save")
    public void saveTweet(@RequestBody DtoTweet Dto) {
        facade.save(Dto, TweetType.TWEET, 0L);
    }

    @PostMapping("quote/save")
    public void saveQuote(@RequestBody DtoTweet Dto) {
        facade.save(Dto, TweetType.QUOTE_TWEET, Dto.getParent_Tweet());
    }

    @PostMapping("reply/save")
    public void saveReplay(@RequestBody DtoTweet Dto) {
        facade.save(Dto, TweetType.REPLY, Dto.getParent_Tweet());
    }


}
