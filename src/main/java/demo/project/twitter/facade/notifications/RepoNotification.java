package demo.project.twitter.facade.notifications;

import demo.project.twitter.model.Notification;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepoNotification extends CrudRepository<Notification, Long> { }
