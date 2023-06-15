package demo.project.twitter.service;

import demo.project.twitter.dto.UserDto;
import demo.project.twitter.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FunctionUser {

    List<User> findAllUsers();
    List<User> whoToFollow(String email);
    User saveUser(User user);

    User updateUser(User usr, UserDto data);

    //   User updateUser (User usr, UserDto data);
    User findById (Long id);
    List<User> getFollowers (User user);
    List<User> getFollowing (User user);
    void follow (User follower, User following);
    void unFollow (User follower, User following);







}
