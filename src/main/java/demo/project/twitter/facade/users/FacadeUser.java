package demo.project.twitter.facade.users;

import demo.project.twitter.dto.UserDto;
import demo.project.twitter.model.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Set;


@RequiredArgsConstructor
@Service
@Log4j2
public  class FacadeUser {

    private final ServiceUser service;
    private User entity = new User();
    private UserDto dto = new UserDto();


    private ModelMapper mapper() {
        ModelMapper mm = new ModelMapper();
        mm.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STRICT)
                .setFieldMatchingEnabled(true)
                .setSkipNullEnabled(true)
                .setFieldAccessLevel(Configuration.AccessLevel.PRIVATE);
        return mm;
    }

    public ResponseEntity<?> getEntity (Long id){

        if (service.user_exists(service.findById(id))) {
            entity = service.findById(id);
            dto = mapper().map(entity,dto.getClass());
            return ResponseEntity.accepted().body(dto);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body("Object with code " + id + " not found");
        }
    }

    public ResponseEntity<?> saveEntity (Long id, UserDto data){

        if (service.user_exists(service.findById(id))) {
            entity = service.updateUser(service.findById(id), data);
            dto = mapper().map(entity,dto.getClass());
            return ResponseEntity.accepted().body(dto);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body("Object with code " + id + " not found");
        }
    }

    public UserDto saveEntity (UserDto requestBody){
        entity = mapper().map(requestBody, entity.getClass());
        User entity2 = service.saveUser(entity);
        dto = mapper().map(entity2, dto.getClass());
        return dto;
    }

    public UserDto updateEntity (UserDto requestBody){
        entity = mapper().map(requestBody, entity.getClass());
        User entity2 = service.updateUser(entity, requestBody);
        dto = mapper().map(entity2, dto.getClass());
        return dto;
    }

    public ResponseEntity<?> getFollowers (Long id){

        if (service.user_exists(service.findById(id))) {
            Set <User> followers = service.getFollowers(service.findById(id));
            dto = mapper().map(followers,dto.getClass());
            return ResponseEntity.accepted().body(dto);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body("followers of " + id + " not found");
        }
    }

    public ResponseEntity<?> getFollowing (Long id){

        if (service.user_exists(service.findById(id))) {
            Set <User> followers = service.getFollowing(service.findById(id));
            dto = mapper().map(followers,dto.getClass());
            return ResponseEntity.accepted().body(dto);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body("followings of " + id + " not found");
        }
    }

}






