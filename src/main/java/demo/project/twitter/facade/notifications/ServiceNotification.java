package demo.project.twitter.facade.notifications;


import demo.project.twitter.facade.tweets.RepoTweet;
import demo.project.twitter.repository.UserRepository;
import demo.project.twitter.model.Notification;
import demo.project.twitter.model.enums.NotificationType;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceNotification implements FunctionNotification {

    private final RepoNotification repoNotification;
    private final UserRepository repoUser;
    private final RepoTweet repoTweet;

    @Override
    public Notification saveOne(Notification not) {
        return repoNotification.save(not);
    }

    @Override
    public Optional<Notification> getById(Long id) {
        return repoNotification.findById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return repoNotification.existsById(id);
    }

    public List<Notification> findAllNotificationByRecieverId(Long userId){
        if(!repoUser.existsById(userId)){
            userId = 0L;
        }
        return repoNotification.getAllNotificationByRecieverId(userId);
    }

    public void createNotification(NotificationType notificationType, String toUsername, Long fromUserId, Long tweetId){
        if(!repoUser.existsById(repoUser.getUserIdByUsername(toUsername)) || repoUser.existsById(fromUserId)
        || repoTweet.existsById(tweetId)){
//            error
        }
        Notification notification = new Notification(notificationType,
                repoUser.getById(repoUser.getUserIdByUsername(toUsername)), repoUser.getById(fromUserId),
                repoTweet.getById(tweetId), false);
        repoNotification.save(notification);
    }

    public void deleteNotification(Long id){
        if(!repoNotification.existsById(id)){
            id = 0L;
        }
        repoNotification.deleteById(id);
    }


}
