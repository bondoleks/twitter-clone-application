package demo.project.twitter.config;

import demo.project.twitter.security.jwt.JwtConfigurer;
import demo.project.twitter.security.jwt.JwtTokenProvider;
import demo.project.twitter.security.oauth2.CustomOAuth2UserService;
import demo.project.twitter.security.oauth2.OAuth2LoginSuccessHandler;
import demo.project.twitter.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    private CustomOAuth2UserService oauthUserService;

    private final UserServiceImpl userService;

    private static final String ADMIN_ENDPOINT = "/api/v1/admin/**";
    private static final String LOGIN_ENDPOINT = "/api/v1/auth/login";

    @Autowired
    public SecurityConfig(JwtTokenProvider jwtTokenProvider, UserServiceImpl userService) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers(LOGIN_ENDPOINT).permitAll()
                .antMatchers(ADMIN_ENDPOINT).hasRole("ADMIN")
                .antMatchers("/", "/api/v1/auth/registration", "/api/v1/auth/activate/*", "/login", "/registration").permitAll()
                .anyRequest().authenticated()
                .and()
                .apply(new JwtConfigurer(jwtTokenProvider))
                .and()
                .oauth2Login()
                // temporary hardcoded redirect url (we must change redirect url to "/" before deploy)
                .loginPage("http://localhost:8080/")
                .userInfoEndpoint().userService(oauthUserService)
                .and()
                .successHandler((httpServletRequest, httpServletResponse, authentication) -> {
                    new OAuth2LoginSuccessHandler(userService).onAuthenticationSuccess(httpServletRequest,
                            httpServletResponse,
                            authentication);
                })
                .and()
                .logout().permitAll()
                .deleteCookies("JSESSIONID")
                .invalidateHttpSession(true)
                .clearAuthentication(true)
                .addLogoutHandler(new SecurityContextLogoutHandler())
                // temporary hardcoded redirect url (we must change redirect url to "/" before deploy)
                .logoutSuccessUrl("/");


        http.cors().configurationSource(rq -> new CorsConfiguration().applyPermitDefaultValues());
    }
}
