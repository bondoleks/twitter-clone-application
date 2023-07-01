package demo.project.twitter.config;

import demo.project.twitter.security.jwt.JwtConfigurer;
import demo.project.twitter.security.jwt.JwtTokenProvider;
import demo.project.twitter.security.oauth.CustomOAuth2UserService;
import demo.project.twitter.security.oauth.OAuth2LoginSuccessHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    private CustomOAuth2UserService oauthUserService;

    @Autowired
    private OAuth2LoginSuccessHandler oAuth2LoginSuccessHandler;

    @Autowired
    public SecurityConfig(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    private static final String ADMIN_ENDPOINT = "/api/v1/admin/**";
    private static final String LOGIN_ENDPOINT = "/api/v1/auth/login";
    private static final String REGISTRATION_ENDPOINT = "/api/v1/auth/registration";
    private static final String ACTIVATE_ENDPOINT = "/api/v1/auth/activate/*";
    private static final String FORGOT_PASSWORD = "/api/v1/auth/forgotPassword/sendCode";
    private static final String ACTIVATE_ENDPOINT_FORGOT_PASSWORD = "/api/v1/auth/forgotPassword/activate/*";

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
                .cors()
                .and()
                .authorizeRequests()
                .antMatchers("/", "/api/v1/tweets/tweet/all/notauth", "/ws-message/**", "logout", "login", "/oauth/**").permitAll()
                    .antMatchers(LOGIN_ENDPOINT).permitAll()
                    .antMatchers(REGISTRATION_ENDPOINT).permitAll()
                    .antMatchers(ACTIVATE_ENDPOINT).permitAll()
                    .antMatchers(FORGOT_PASSWORD).permitAll()
                    .antMatchers(ACTIVATE_ENDPOINT_FORGOT_PASSWORD).permitAll()
                    .antMatchers(ADMIN_ENDPOINT).hasRole("ADMIN")
                .anyRequest().authenticated()
                .and()
                    .apply(new JwtConfigurer(jwtTokenProvider))
//                .and()
//                    .formLogin().permitAll()
//                    .loginPage("/login")
//                    .usernameParameter("email")
//                    .passwordParameter("pass")
//                    .defaultSuccessUrl("/list")
                .and()
                .oauth2Login()
                    .loginPage("/login")
                    .userInfoEndpoint()
                    .userService(oauthUserService)
                    .and()
                    .successHandler(oAuth2LoginSuccessHandler)
                .and()
                    .logout().permitAll()
                    .deleteCookies("JSESSIONID")
                    .invalidateHttpSession(true)
                    .clearAuthentication(true)
                    .addLogoutHandler(new SecurityContextLogoutHandler())
                    .logoutSuccessUrl("/api/v1/auth/login");
    }
}
