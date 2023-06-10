package demo.project.twitter.facade.notifications;

import demo.project.twitter.model.Notification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface FunctionNotification {

    List<DtoNotification> findAllNotificationByRecieverUsername(String username);

}
