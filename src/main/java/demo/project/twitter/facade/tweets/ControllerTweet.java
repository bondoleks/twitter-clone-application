package demo.project.twitter.facade.tweets;


import demo.project.twitter.model.enums.TweetType;
import lombok.RequiredArgsConstructor;
import org.springframework.data.web.JsonPath;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

@RequiredArgsConstructor
@RestController

@RequestMapping("tweets")
public class ControllerTweet {
    private final FacadeTweet facade;




    @GetMapping("get/{id}")
    public ResponseEntity<?> getEntity(@PathVariable("id") Long id) {
        return facade.getEntity(id);
    }
    @GetMapping("all")
    public DtoTweetPage getAllTweetById(@RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        return facade.getAllTweetById(0L, sizePage,numberPage);
    }

    @GetMapping("{id}")
    public DtoTweetPage getAllTweetById(@PathVariable("id") Long id, @RequestParam("sizePage") Integer sizePage, @RequestParam("numberPage") Integer numberPage){
        return facade.getAllTweetById(id, sizePage,numberPage);
    }


    @PostMapping("save")
    public void saveTweet(@RequestBody DtoTweet dto) {
        dto.setTweetType(TweetType.TWEET);
        facade.saveEntity(dto);
    }

    @PostMapping("quote")
    public void saveTweetQuote(@RequestBody DtoTweet dto) {
        dto.setTweetType(TweetType.QUOTE_TWEET);
        facade.saveEntity(dto);
    }

    @PostMapping("reply")
    public void saveTweetReplay(@RequestBody DtoTweet dto) {
        dto.setTweetType(TweetType.REPLY);
        facade.saveEntity(dto);
    }


}
