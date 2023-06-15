package demo.project.twitter.security.oauth2;

import demo.project.twitter.model.User;
import demo.project.twitter.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class OAuth2LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final UserServiceImpl userService;

    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        CustomOAuth2User oauth2User = (CustomOAuth2User) authentication.getPrincipal();

        User userFromGoogle = new User(oauth2User.getAttribute("username"), oauth2User.getEmail());
//        userService.processOAuthPostLogin(oauth2User.getEmail(),
//                oauth2User.getAttribute("picture"),
//                oauth2User.getAttribute("given_name"),
//                oauth2User.getAttribute("family_name"));
        userService.registerFromGoogle(userFromGoogle);

        response.sendRedirect("/signup_g");
        super.onAuthenticationSuccess(request, response, authentication);
    }
}
