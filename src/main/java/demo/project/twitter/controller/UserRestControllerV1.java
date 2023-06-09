package demo.project.twitter.controller;

import demo.project.twitter.dto.UserDto;
import demo.project.twitter.model.User;
import demo.project.twitter.service.UserServiceImplInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"https://twitter-clone-application.vercel.app",
        "http://localhost:5173",
        "https://twitter-clone-application-e8cz8renm-bondoleks.vercel.app"})
@RequestMapping(value = "/api/v1/users/")
public class UserRestControllerV1 {
    private final UserServiceImplInterface userService;

    @Autowired
    public UserRestControllerV1(UserServiceImplInterface userService) {
        this.userService = userService;
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable(name = "id") Long id){
        User user = userService.findById(id);

        if(user == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        UserDto result = UserDto.fromUser(user);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
