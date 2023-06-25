package demo.project.twitter.service;

import demo.project.twitter.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserServiceImplInterface {

    ResponseEntity register(User user);

    List<User> getAll();

    User findByUsername(String username);

    User findByEmail(String email);

    User findById(Long id);

    void delete(Long id);
}
