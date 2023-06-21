package demo.project.twitter.repository;

import demo.project.twitter.model.Notification;
import demo.project.twitter.model.enums.ActionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

    List<Notification> getAllNotificationByRecieverUsername(String username);

    Notification getNotificationByTweetIdAndInvitatorIdAndNotificationType(Long tweetId, Long invitatorId, ActionType actionType);

}
