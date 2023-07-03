package demo.project.twitter.controller;

import demo.project.twitter.dto.AuthenticationRequestDto;
import demo.project.twitter.model.User;
import demo.project.twitter.security.jwt.JwtTokenProvider;
import demo.project.twitter.service.UserService;
import demo.project.twitter.service.impl.UserServiceImpl;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1/auth/")
@Log4j2
@CrossOrigin(origins = {"https://twitter-clone-application.vercel.app",
        "http://localhost:5173",
        "https://twitter-clone-application-e8cz8renm-bondoleks.vercel.app"})
public class AuthenticationRestControllerV1 {

    private final AuthenticationManager authenticationManager;

    private final JwtTokenProvider jwtTokenProvider;

    private final UserService userService;

    private final UserServiceImpl userServiceImpl;

    @Autowired
    public AuthenticationRestControllerV1(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserService userService, UserServiceImpl userServiceImpl) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
        this.userServiceImpl = userServiceImpl;
    }

    @PostMapping("login")
    public ResponseEntity login(@RequestBody AuthenticationRequestDto requestDto) {
        try {
            String email = requestDto.getEmail();
            String username = userService.findByEmail(email).getUsername();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, requestDto.getPassword()));
            User user = userService.findByEmail(email);

            if (user == null) {
                throw new UsernameNotFoundException("User with username: " + username + " not found");
            }

            if (user.getActivationCode() != null) {
                log.info("User " + username + " not ACTIVATE");
                throw new BadCredentialsException("User " + username + " not ACTIVATE");
            }

            String token = jwtTokenProvider.createToken(username, user.getRoles());

            Map<Object, Object> response = new HashMap<>();
            response.put("username", username);
            response.put("token", token);

            return ResponseEntity.ok(response);
        } catch (AuthenticationException | NullPointerException e) {
            throw new BadCredentialsException("Invalid email or password");
        }
    }

    @PostMapping("forgotPassword/sendCode")
    public ResponseEntity forgotPassword(@RequestParam String email){
        return userServiceImpl.forgotPasswordSendEmail(email);
    }

    @PostMapping("forgotPassword/activate/{code}")
    public ResponseEntity activate(@PathVariable String code, @RequestParam String newPassword, @RequestParam String repeatedNewPassword) {
        try {
            User user = userServiceImpl.findByForgotPasswordCode(code);
            userServiceImpl.activateForgotPassword(code);
            if (repeatedNewPassword.equals(newPassword)) {
                return userServiceImpl.ifForgotChangePassword(user, newPassword);
            }
            return ResponseEntity.status(400).body("Wrong repeated password");
        } catch (NullPointerException e) {
            throw new BadCredentialsException("Invalid link");
        }
    }
}
