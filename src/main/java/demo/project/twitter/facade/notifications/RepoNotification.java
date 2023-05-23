package demo.project.twitter.facade.notifications;

import demo.project.twitter.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepoNotification extends JpaRepository<Notification, Long> {
    Iterable<Notification> getAllNotificationByRecieverId(Long userId);

}
