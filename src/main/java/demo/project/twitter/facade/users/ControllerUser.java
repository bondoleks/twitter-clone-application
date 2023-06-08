package demo.project.twitter.facade.users;


import demo.project.twitter.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;


@RequiredArgsConstructor
@RestController

@RequestMapping("user")
public class ControllerUser {
    private final FacadeUser facade;



   @GetMapping("suggestions")
   public ResponseEntity<?> getSuggestions(Principal principal){
       return facade.whoToFollow(principal.getName());
   }

   @GetMapping("profile")
   @PreAuthorize("hasRole('ROLE_USER')")
   public ResponseEntity getProfile (Principal principal){
       return facade.getEntity(principal.getName());
   }


    @GetMapping("getuser/{id}")
    public ResponseEntity<?> getEntity(@PathVariable("id") Long id) {
        return facade.getEntity(id);
    }

    @PostMapping("update")
    public UserDto updateEntity(@RequestBody UserDto dto) {
        return facade.updateEntity(dto);
    }


    @PostMapping("follow/user/{id}")
    public void follow (@RequestBody UserDto dto, @PathVariable("id") Long id) {
       facade.follow(dto.toUser(), facade.getEntity(id).getBody().toUser());
    }

    @PostMapping("unfollow/user/{id}")
    public void unFollow (@RequestBody UserDto dto, @PathVariable("id") Long id) {
        facade.unFollow(dto.toUser(), facade.getEntity(id).getBody().toUser());
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
