package demo.project.twitter.facade.users;

import demo.project.twitter.dto.UserDto;
import demo.project.twitter.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface FunctionUser {

    List<User> findAllUsers();
    List<User> whoToFollow(String email);
    User saveUser(User user);
   User updateUser (User usr, UserDto data);
    User findById (Long id);
    Set<User> getFollowers (User user);
    Set<User> getFollowing (User user);
    void follow (User follower, User following);
    void unFollow (User follower, User following);







}
