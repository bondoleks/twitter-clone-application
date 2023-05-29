package demo.project.twitter.facade.users;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import demo.project.twitter.model.User;
import lombok.Data;
import lombok.Getter;

import java.util.Date;

@Data
@Getter
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDto {
    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String location;
    private Date birthdate;
    private String bio;
    private String av_imagerUrl;
    private String head_imagerUrl;

    public User toUser(){
        User user = new User();
        user.setId(id);
        user.setUsername(username);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setLocation(location);
        user.setBirthDate(birthdate);
        user.setBio(bio);
        user.setAv_imagerUrl(av_imagerUrl);
        user.setHead_imagerUrl(head_imagerUrl);


        return user;
    }

    public static UserDto fromUser(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setUsername(user.getUsername());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setEmail(user.getEmail());
        userDto.setLocation(user.getLocation());
        userDto.setBirthdate(user.getBirthDate());
        userDto.setBio(user.getBio());
        userDto.setAv_imagerUrl(user.getAv_imagerUrl());
        userDto.setHead_imagerUrl(user.getHead_imagerUrl());


        return userDto;
    }
}
