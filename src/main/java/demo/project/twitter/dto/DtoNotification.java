package demo.project.twitter.dto;

import demo.project.twitter.model.enums.NotificationType;
import demo.project.twitter.model.tweet.Tweet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@NoArgsConstructor
@Data
public class DtoNotification {

    private Long id;
    private NotificationType notificationType;
    private String reciever;
    private String invitator;
    private Tweet tweet;

}
