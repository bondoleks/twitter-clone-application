package demo.project.twitter.service.impl;

import demo.project.twitter.model.Role;
import demo.project.twitter.model.Status;
import demo.project.twitter.model.User;
import demo.project.twitter.repository.RoleRepository;
import demo.project.twitter.repository.UserRepository;
import demo.project.twitter.service.MailSender;
import demo.project.twitter.service.UserServiceImplInterface;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@Log4j2
public class UserServiceImpl implements UserServiceImplInterface {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private MailSender mailSender;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository,
                           BCryptPasswordEncoder passwordEncoder, MailSender mailSender) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.mailSender = mailSender;
    }

    @Override
    public ResponseEntity register(User user) {
        User userFromDbUsername = userRepository.findByUsername(user.getUsername());
        User userFromDbEmail = userRepository.findByEmail(user.getEmail());
        if (userFromDbUsername != null) {
            log.info(userFromDbUsername.getUsername() + " already register with this username");
            return ResponseEntity.ok(userFromDbUsername.getUsername() + " already register with this username");
        }
        if (userFromDbEmail != null) {
            log.info(userFromDbEmail.getEmail() + " already register with this email");
            return ResponseEntity.ok(userFromDbEmail.getEmail() + " already register with this email");
        }

        Role roleUser = roleRepository.findByName("ROLE_USER");
        List<Role> userRoles = new ArrayList<>();
        userRoles.add(roleUser);

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(userRoles);
        user.setStatus(Status.ACTIVE);
        user.setActivationCode(UUID.randomUUID().toString());

        User registeredUser = userRepository.save(user);

        if (!StringUtils.isEmpty(user.getEmail())) {
            String message = String.format(
                    "Hello, %s! \n" +
                            "Welcome to Twitter. Please, visit next link: https://twitter-clone-application.vercel.app/activate/%s",
                    user.getUsername(),
                    user.getActivationCode()
            );

            mailSender.send(user.getEmail(), "Activation code", message);
        }

        log.info("IN register - user: {} successfully registered", registeredUser);

        return ResponseEntity.ok(user.getUsername() + " created");
    }

    public boolean activateUser(String code) {
        User user = userRepository.findByActivationCode(code);
        if (user == null) {
            log.info("User = null");
            return false;
        }
        user.setActivationCode(null);
        userRepository.save(user);
        log.info("Activated user " + user.getUsername());
        return true;
    }

    public ResponseEntity registerFromGoogle(User user) {
        User userFromDbUsername = userRepository.findByUsername(user.getUsername());
        User userFromDbEmail = userRepository.findByEmail(user.getEmail());
        if (userFromDbUsername != null) {
            log.info(user + "username");
            return ResponseEntity.ok("username");
        }
        if (userFromDbEmail != null) {
            log.info(user + "email");
            return ResponseEntity.ok("email");
        }

        Role roleUser = roleRepository.findByName("ROLE_USER");
        List<Role> userRoles = new ArrayList<>();
        userRoles.add(roleUser);

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(userRoles);
        user.setStatus(Status.ACTIVE);
        user.setActivationCode(UUID.randomUUID().toString());

        User registeredUser = userRepository.save(user);

        log.info("IN register - user: {} successfully registered", registeredUser);

        return ResponseEntity.ok(user.getUsername() + " created");
    }

    @Override
    public List<User> getAll() {
        List<User> result = userRepository.findAll();
        log.info("IN getAll - {} users found", result.size());
        return result;
    }

    @Override
    public User findByUsername(String username) {
        User result = userRepository.findByUsername(username);
        log.info("IN findByUsername - user: {} found by username: {}", result.getEmail(), username);
        return result;
    }

    @Override
    public User findByEmail(String email) {
        User result = userRepository.findByEmail(email);
        log.info("IN findByEmail - user: {} found by email: {}", result.getEmail(), email);
        return result;
    }

    @Override
    public User findById(Long id) {
        User result = userRepository.findById(id).orElse(null);

        if (result == null) {
            log.warn("IN findById - no user found by id: {}", id);
            return null;
        }

        log.info("IN findById - user: {} found by id: {}", result);
        return result;
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
        log.info("IN delete - user with id: {} successfully deleted");
    }


}
