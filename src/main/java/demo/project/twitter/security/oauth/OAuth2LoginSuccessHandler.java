package demo.project.twitter.security.oauth;

import demo.project.twitter.model.User;
import demo.project.twitter.service.impl.UserServiceImpl;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Log4j2
public class OAuth2LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private UserServiceImpl userService;

    public OAuth2LoginSuccessHandler(UserServiceImpl userService) {
        this.userService = userService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException{
        CustomOAuth2User oAuth2User = (CustomOAuth2User) authentication.getPrincipal();
        String email = oAuth2User.getEmail();
        String username = email.substring(0,email.lastIndexOf("@"));;
        String name = oAuth2User.getName();
        User userFromGoogle = userService.findByEmail(email);

        if(userFromGoogle == null){
            User newUserFromGoogle = new User(username, email);
            userService.registerFromGoogle(newUserFromGoogle, name);
        }else {
            userService.updateUserAfterGoogleLogin(userFromGoogle, email);
        }

        super.onAuthenticationSuccess(request, response, authentication);
    }
}
