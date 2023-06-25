package demo.project.twitter.service;


import demo.project.twitter.dto.UserDto;
import demo.project.twitter.facade.images.ServicAttachmentImage;
import demo.project.twitter.model.User;

import demo.project.twitter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService implements FunctionUser {
    private final UserRepository repo;


    public Boolean user_exists(User usr) {
        if (repo.findByUsername(usr.getUsername()) != null) return true;
        else return false;
    }

    @Override
    public List<User> findAllUsers() {
        return repo.findAll();
    }


    public User findByUserName (String username){
        return repo.findByUsername(username);
    }

    public User findByEmail (String email){
        return repo.findByEmail(email);
    }

    @Override
    public List<User> whoToFollow(String username) {
        User user = repo.findByUsername(username);
        return repo.whoToFollow(user.getId());
    }

    @Override
    public User saveUser(User user) {
        repo.save(user);
        return user;
    }

    @Override
    public User updateUser(User usr, UserDto data) {

        if (user_exists(usr)) {

            usr.setUsername(Optional.ofNullable(data.getUsername()).orElse(usr.getUsername()));
            usr.setFirstName(Optional.ofNullable(data.getFirstName()).orElse(usr.getFirstName()));
            usr.setLastName(Optional.ofNullable(data.getLastName()).orElse(usr.getLastName()));
            usr.setLocation(Optional.ofNullable(data.getLocation()).orElse(usr.getLocation()));
            usr.setBirthDate(Optional.ofNullable(data.getBirthdate()).orElse(usr.getBirthDate()));
            usr.setBio(Optional.ofNullable(data.getBio()).orElse(usr.getBio()));
            usr.setEmail(Optional.ofNullable(data.getEmail()).orElse(usr.getEmail()));
            usr.setAv_imagerUrl(Optional.ofNullable(data.getAv_imagerUrl()).orElse(usr.getAv_imagerUrl()));
            usr.setHead_imagerUrl(Optional.ofNullable(data.getHead_imagerUrl()).orElse(usr.getHead_imagerUrl()));

            return usr;
        } else return null;
    }


    @Override
    public User findById(Long id) {
        User usr = repo.findById(id).orElse(null);

        if (usr == null) {
            log.warn("IN findById - no user found by id: {}", id);
            return null;
        }

        return usr;
    }


    @Override
    public List<User> getFollowers(User user) {

        Optional<User> usr = repo.findById(user.getId());
        if (usr.isEmpty()) {
            return null;
        } else
            return usr.get().getFollowers();
    }





    @Override
    public List<User> getFollowing(User user) {
        Optional<User> usr = repo.findById(user.getId());
        if (usr.isEmpty()){
            return null;
        }
        else
            return usr.get().getFollowings();
    }

    @Override
    public void follow(User follower, User following) {
                  List <User> followings = follower.getFollowings();
          followings.add(following);
            repo.save(follower);
        }


    @Override
    public void unFollow(User follower, User following) {
        List <User> followings = follower.getFollowings();
        followings.remove(following);
        repo.save(follower);

    }

    public List<User> searchByUser(String searchRequest) {
        return repo.searchByName(searchRequest.toLowerCase() + "%", "%" + searchRequest + "%");
    }

    public User saveUser1(User userRe) {
        return repo.save(userRe);
    }
}


