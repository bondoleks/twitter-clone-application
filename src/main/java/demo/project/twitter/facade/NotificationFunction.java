package demo.project.twitter.facade;

import demo.project.twitter.dto.DtoNotification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface NotificationFunction {

    List<DtoNotification> findAllNotificationByRecieverUsername(String username);

}
