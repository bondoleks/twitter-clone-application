package demo.project.twitter.facade.chats;

import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@Data
public class DtoChat {

    private Long chatId;
    private Long initiatorId;
    private String lastMessage;

    private Long userResivId;
    private String username;
    private String firstName;
    private String lastName;
   /* private String email;
    private String location;
    private Date birthdate;
    private String bio;*/
    private String av_imagerUrl;
//    private String head_imagerUrl;

}
