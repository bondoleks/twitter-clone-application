package demo.project.twitter.controllers;

import demo.project.twitter.models.TweetAction;
import demo.project.twitter.models.enums.ActionType;
import demo.project.twitter.repository.TweetActionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@AllArgsConstructor
public class TestController {

    private final TweetActionRepository tweetActionRepository;
    @GetMapping("/test")
    public String home(Model model) {
        tweetActionRepository.save(new TweetAction());
        tweetActionRepository.save(new TweetAction(1l, 2l, ActionType.LIKE, 1l));
        return "test";
    }
}