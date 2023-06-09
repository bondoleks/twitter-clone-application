package demo.project.twitter.facade.users;

import demo.project.twitter.config.Mapper;
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

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
@Log4j2
public  class FacadeUser {

    private final ServiceUser service;
    private User entity = new User();
    private UserDto dto = new UserDto();
    private final Mapper mapper;


    private UserDto makeDto (User entity) {

        dto = mapper.map().map(entity, dto.getClass());
        return dto;
    }

    public ResponseEntity<UserDto> getEntity (Long id){

            entity = service.findById(id);
            dto = makeDto(entity);
            return ResponseEntity.accepted().body(dto);

    }

    public ResponseEntity<UserDto> getProfile (String email){

            entity = service.findByEmail(email);
            dto = makeDto(entity);
            return ResponseEntity.accepted().body(dto);
    }



    public ResponseEntity<List<UserDto>> findAllUsers() {
        List<User> allusers = service.findAllUsers();
        List<UserDto> allUsrDto= allusers.stream()
                .map(this::makeDto).collect(Collectors.toList());
         return ResponseEntity.accepted().body(allUsrDto);

    }

    public ResponseEntity<UserDto> saveEntity (Long id, UserDto data){

            entity = service.updateUser(service.findById(id), data);
            dto = makeDto(entity);
            return ResponseEntity.accepted().body(dto);

    }

//    public UserDto saveEntity (UserDto requestBody){
//
//        entity = mapper.map().map(requestBody, entity.getClass());
//        User entity2 = service.saveUser(entity);
//        dto = makeDto(entity2);
//        return dto;
//
//    }

    public UserDto updateEntity (UserDto requestBody){
        entity = mapper.map().map(requestBody, entity.getClass());
        User entity2 = service.updateUser(entity, requestBody);
        dto = mapper.map().map(entity2, dto.getClass());
        return dto;
    }


    public ResponseEntity<List<UserDto>> getFollowers (Long id){

            List <User> followers = service.getFollowers(service.findById(id));

            List<UserDto> followersDto = followers.stream().
                    map(this::makeDto).collect(Collectors.toList());
            return ResponseEntity.accepted().body(followersDto);

    }

    public ResponseEntity<List<UserDto>> getFollowing (Long id){

        List <User> followings = service.getFollowing(service.findById(id));
        List<UserDto> followingsDto = followings.stream().
                map(this::makeDto).collect(Collectors.toList());
        return ResponseEntity.accepted().body(followingsDto);

    }

    public ResponseEntity<?> whoToFollow (String email) {

        List<User> whoToFollow = service.whoToFollow(email);

        List<UserDto> whoToFollowDto = whoToFollow.stream().
                map(this::makeDto).collect(Collectors.toList());
        return ResponseEntity.accepted().body(whoToFollowDto);

    }

    public void follow(User follower, User following) {
        service.follow(follower, following);
    }

    public void unFollow(User follower, User following) {
        service.unFollow(follower, following);
    }

}






