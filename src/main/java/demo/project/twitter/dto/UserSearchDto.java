package demo.project.twitter.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import demo.project.twitter.model.User;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Data
@Service
@NoArgsConstructor
public class UserSearchDto {

    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private String av_imagerUrl;
}
