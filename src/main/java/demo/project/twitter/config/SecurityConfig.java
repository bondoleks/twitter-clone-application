package demo.project.twitter.config;

import demo.project.twitter.model.User;
import demo.project.twitter.repository.UserRepository;

import demo.project.twitter.security.jwt.JwtConfigurer;
import demo.project.twitter.security.jwt.JwtTokenProvider;
import demo.project.twitter.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;



@Configuration
//@EnableWebSecurity
//@EnableOAuth2Sso
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;
    private final UserServiceImpl userService;

    private static final String ADMIN_ENDPOINT = "/api/v1/admin/**";
    private static final String LOGIN_ENDPOINT = "/api/v1/auth/login";
    private static final String REGISTRATION_ENDPOINT = "/api/v1/auth/registration";
    private static final String ACTIVATE_ENDPOINT = "/api/v1/auth/activate/*";

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
                .antMatchers("/", "/login", "/registration").permitAll()
                .antMatchers(LOGIN_ENDPOINT).permitAll()
                .antMatchers(REGISTRATION_ENDPOINT).permitAll()
                .antMatchers(ACTIVATE_ENDPOINT).permitAll()
                .antMatchers(ADMIN_ENDPOINT).hasRole("ADMIN")
                .anyRequest().authenticated().and()
                .apply(new JwtConfigurer(jwtTokenProvider));
        http.cors().configurationSource(rq -> new CorsConfiguration().applyPermitDefaultValues());
    }

//    @Bean
//    public PrincipalExtractor principalExtractor(UserRepository userRepository) {
//        return map -> {
//            String email = (String) map.get("email");
//
//            User user = userRepository.findById(userRepository.findByEmail(email).getId()).orElseGet(() -> {
//
//                User newUser = new User((String) map.get("name"), (String) map.get("email"));
//                return newUser;
//
//            });
//
//            return userService.register(user);
//        };
//    }
}
