package demo.project.twitter.facade.users;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController

@RequestMapping("user")
public class ControllerUser {
    private final FacadeUser facade;



    @GetMapping("get/{id}")
    public ResponseEntity<?> getEntity(@PathVariable("id") Long id) {
        return facade.getEntity(id);
    }

    @PostMapping("update")
    public UserDto updateEntity(@RequestBody UserDto dto) {
        return facade.updateEntity(dto);
    }

    @PostMapping("save")
    public UserDto saveEntity(@RequestBody UserDto dto) {
        return facade.saveEntity(dto);
    }

    @GetMapping("followers/{id}")
    public ResponseEntity<?> getFollowers(@PathVariable("id") Long id) {
        return facade.getFollowers(id);
    }

    @GetMapping("following/{id}")
    public ResponseEntity<?> getFollowing(@PathVariable("id") Long id) {
        return facade.getFollowing(id);
    }

}
