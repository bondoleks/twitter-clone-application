package demo.project.twitter.facade.tweets;


import demo.project.twitter.models.tweet.Tweet;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public DtoTweet saveEntity(@RequestBody DtoTweet dto) {
        return facade.saveEntity(dto);
    }




}
