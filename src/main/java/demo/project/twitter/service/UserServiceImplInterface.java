package demo.project.twitter.service;

import demo.project.twitter.model.User;

import java.util.List;

public interface UserServiceImplInterface {

    User register(User user);

    List<User> getAll();

    User findByUsername(String username);

    User findByEmail(String email);

    User findById(Long id);

    void delete(Long id);
}
