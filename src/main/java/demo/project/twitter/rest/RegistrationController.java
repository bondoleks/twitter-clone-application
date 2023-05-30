package demo.project.twitter.rest;

import demo.project.twitter.model.User;
import demo.project.twitter.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequiredArgsConstructor
@RestController
@RequestMapping("registration")
public class RegistrationController {

    private final UserServiceImpl userService;
    @PostMapping()
    public User saveUser(@RequestParam String username, @RequestParam String email, @RequestParam String password) {
        User newUser = new User(username, email, password);
        return userService.register(newUser);
    }

}
