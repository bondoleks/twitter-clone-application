package demo.project.twitter.facade.users;


import demo.project.twitter.dto.UserDto;
import demo.project.twitter.model.User;

import demo.project.twitter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


import java.util.Optional;
import java.util.Set;

@Service
@Slf4j
@RequiredArgsConstructor
public class ServiceUser implements FunctionUser {
    private final UserRepository repo;

    public Boolean user_exists(User usr) {
        if (repo.getUserIdByUsername(usr.getUsername()) != null) return true;
        else return false;
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
    public Set<User> getFollowers(User user) {

        Optional<User> usr = repo.findById(user.getId());
        if (usr.isEmpty()) {
            return null;
        } else
            return usr.get().getFollowers();
    }





    @Override
    public Set<User> getFollowing(User user) {
        Optional<User> usr = repo.findById(user.getId());
        if (usr.isEmpty()){
            return null;
        }
        else
            return usr.get().getFollowings();
    }
}


