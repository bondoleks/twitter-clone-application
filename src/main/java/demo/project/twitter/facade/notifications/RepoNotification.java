package demo.project.twitter.facade.notifications;

import demo.project.twitter.model.User;
import demo.project.twitter.models.Notification;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepoNotification extends CrudRepository<Notification, Long> { }
