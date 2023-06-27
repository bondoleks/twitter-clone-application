package demo.project.twitter.controller;

import demo.project.twitter.model.User;
import demo.project.twitter.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Log4j2
@RestController
//@CrossOrigin(origins = "https://twitter-clone-application.vercel.app")
@CrossOrigin(origins = {"https://twitter-clone-application.vercel.app", "http://localhost:5173"})
@RequestMapping(value = "/api/v1/auth/")
public class RegistrationController {

    private final UserServiceImpl userService;
    @PostMapping("registration")
    public ResponseEntity saveUser(@RequestParam String username, @RequestParam String email,
                                   @RequestParam String password, @RequestParam String repeatedPassword) {
        if(repeatedPassword.equals(password)) {
            User newUser = new User(username, email, password);
            return userService.register(newUser);
        }
        return ResponseEntity.ok("Wrong password");
    }

    @PostMapping("activate/{code}")
    public boolean activate(@PathVariable String code) {
        boolean isActivated = userService.activateUser(code);
        if (isActivated) {
            return true;
        }
        return false;

    }

}
