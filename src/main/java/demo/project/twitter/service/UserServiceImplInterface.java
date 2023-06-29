package demo.project.twitter.service;

import demo.project.twitter.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserServiceImplInterface {

    ResponseEntity register(User user);

    ResponseEntity changePassword(User user, String oldPassword, String newPassword);

    boolean activateUser(String code);

    ResponseEntity forgotPasswordSendEmail(String email);

    boolean activateForgotPassword(String code);

    ResponseEntity ifForgotChangePassword(User user, String newPassword);

    User findByForgotPasswordCode(String code);

    List<User> getAll();

    User findByUsername(String username);

    User findByEmail(String email);

    User findById(Long id);

    void delete(Long id);
}
