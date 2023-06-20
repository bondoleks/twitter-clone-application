package demo.project.twitter.facade;

import demo.project.twitter.dto.NotificationDto;
import demo.project.twitter.model.Notification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface NotificationFunction {

    List<NotificationDto> findAllNotificationByRecieverUsername(String username);

    void createNotification(Notification notification);

    void deleteNotification(Long id);
}
