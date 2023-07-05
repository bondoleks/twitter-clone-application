package demo.project.twitter.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.chat.ChatNew;
import demo.project.twitter.model.tweet.Tweet;
import lombok.*;
import javax.validation.constraints.Email;
import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "users",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })
@Data
@NoArgsConstructor
public class User extends BaseEntity {


    @NotNull
    @Column(name = "username")
    private String username;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;


    @Email(message = "Email is not valid", regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$")
    @NotNull
    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "activation_code")
    private String activationCode;

    @Column(name = "activation_code_forgot_password")
    private String activationCodeForgotPassword;

    @Column(name = "bDate")
    private Date birthDate;

    @Column(name = "bio")
    private String bio;

    @Column(name = "location")
    private String location;

    @Column(name = "auth_provider")
    private String provider;

    @Column(name = "avatar_image_url")
    private String av_imagerUrl;

    @Column(name = "header_image_url")
    private String head_imagerUrl;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_roles",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id", referencedColumnName = "id")})
    private List<Role> roles;

    @ManyToMany
    @JoinTable(name = "followers", joinColumns = @JoinColumn(name = "followed_id"),
            inverseJoinColumns = @JoinColumn(name = "follower_id"))
    private List<User> followers = new ArrayList<>();

    @ManyToMany
    @JoinTable(name = "followers", joinColumns = @JoinColumn(name = "follower_id"),
            inverseJoinColumns = @JoinColumn(name = "followed_id"))
    private List<User> followings = new ArrayList<>();

    @ManyToMany()
    @JoinTable(name = "chats_to_users", joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "chat_id"))

    private Set<Chat> userChats = new HashSet<>();

    @ManyToMany()
    @JoinTable(name = "chatsnew_to_users", joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "chat_id"))

    private List<ChatNew> userChatsNew = new ArrayList<>();

    public User(String username, String email, String password, String location, Date birthDate, String bio) {

        this.username = username;
        this.email = email;
        this.password = password;
        this.location = location;
        this.birthDate = birthDate;
        this.bio = bio;
    }

    public User(String firstName, String location, Date birthDate, String bio, Optional<String> avUrl, Optional<String> headUrl) {
        this.firstName = firstName;
        this.location = location;
        this.birthDate = birthDate;
        this.bio = bio;
        this.av_imagerUrl = String.valueOf(avUrl);
        this.head_imagerUrl = String.valueOf(headUrl);
    }

    public User(String username, String email) {
        this.username = username;
        this.email = email;

    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User(String username, String firstName, String lastName, String location, Date birthDate, String bio, Optional<String> avUrl, Optional<String> headUrl) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
        this.birthDate = birthDate;
        this.bio = bio;
        this.av_imagerUrl = String.valueOf(avUrl);
        this.head_imagerUrl = String.valueOf(headUrl);
    }
}


