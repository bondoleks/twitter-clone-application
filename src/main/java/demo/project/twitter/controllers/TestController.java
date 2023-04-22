package demo.project.twitter.controllers;

import demo.project.twitter.models.TestDb;
import demo.project.twitter.repositiry.TestRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@AllArgsConstructor
public class TestController {

    private final TestRepository testRepository;
    @GetMapping("/test")
    public String home(Model model) {
        testRepository.save(new TestDb("Tommy"));
        return "test";
    }
}