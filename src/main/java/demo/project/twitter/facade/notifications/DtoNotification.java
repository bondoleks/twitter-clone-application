package demo.project.twitter.facade.notifications;

import demo.project.twitter.model.User;
import demo.project.twitter.model.enums.NotificationType;
import demo.project.twitter.model.tweet.Tweet;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.*;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class DtoNotification {

    private NotificationType notificationType;
    private User reciever;
    private User invitator;
    private Tweet tweet;
    private boolean isRead;

}
