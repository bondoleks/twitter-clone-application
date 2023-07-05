package demo.project.twitter.dto;

import demo.project.twitter.model.enums.ActionType;
import demo.project.twitter.model.tweet.Tweet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@NoArgsConstructor
@Data
public class NotificationDto {

    private Long id;
    private ActionType notificationType;
    private String reciever;
    private String invitator;
    private Long invitatorId;
    private String invitatorAvImagerUrl;
    private Long tweetId;
}
