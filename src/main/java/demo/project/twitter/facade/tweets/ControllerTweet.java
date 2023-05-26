package demo.project.twitter.facade.tweets;



import demo.project.twitter.model.enums.TweetType;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import org.springframework.web.bind.annotation.*;

import org.springframework.web.servlet.view.RedirectView;



@RequiredArgsConstructor
@RestController
@Log4j2
@RequestMapping("tweets")
public class ControllerTweet {
    private final FacadeTweet facade;






    @GetMapping("tweet/{id}")
    public DtoTweet getTweetById(@PathVariable("id") Long id) {
        return facade.getTweetById(id);
    }
    @GetMapping("all")
    public DtoTweetPage getAllTweetById(@RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        return facade.getAllTweetById(0L, sizePage,numberPage);
    }
    @GetMapping("all")
    public DtoTweetPage getAllTweetById(@RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        return facade.getAllTweetById(0L, sizePage,numberPage);
    }

    @GetMapping("{id}")
    public DtoTweetPage getAllTweetById(@PathVariable("id") Long id, @RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        return facade.getAllTweetById(id, sizePage,numberPage);
    }




    @GetMapping("{id}")
    public DtoTweetPage getAllTweetById(@PathVariable("id") Long id, @RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        return facade.getAllTweetById(id, sizePage,numberPage);
    }


    @PostMapping("tweet/save")
    public void saveTweet(@RequestBody List<DtoTweet> listDto) {
        facade.save(listDto, TweetType.TWEET, 0L);
    }

    @PostMapping("quote/save")
    public void saveQuote(@RequestBody List<DtoTweet> listDto) {
        facade.save(listDto, TweetType.QUOTE_TWEET, listDto.get(0).getParentTweet());
    }

    @PostMapping("reply/save")
    public void saveReplay(@RequestBody List<DtoTweet> listDto) {
        facade.save(listDto, TweetType.REPLY, listDto.get(0).getParentTweet());
    }



}
