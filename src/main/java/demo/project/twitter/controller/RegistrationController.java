package demo.project.twitter.controller;

import demo.project.twitter.facade.notifications.DtoNotification;
import demo.project.twitter.model.User;
import demo.project.twitter.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@Log4j2
@RestController
public class RegistrationController {

    private final UserServiceImpl userService;
    @PostMapping("/registration")
    public ResponseEntity saveUser(@RequestParam String username, @RequestParam String email,
                                   @RequestParam String password, @RequestParam String repeatedPassword) {
        if(repeatedPassword.equals(password)) {
            User newUser = new User(username, email, password);
            userService.register(newUser);
            return ResponseEntity.ok(username + " created");
        }
        return ResponseEntity.ok("Wrong password");
    }

    @GetMapping("/activate/{code}")
    public ResponseEntity activate(@PathVariable String code) {
        boolean isActivated = userService.activateUser(code);
        if (isActivated) {
            log.info("User successfully activated");
        } else {
            log.info("Activation code is not found!");
        }
        return ResponseEntity.ok("User successfully activated");
    }

}
