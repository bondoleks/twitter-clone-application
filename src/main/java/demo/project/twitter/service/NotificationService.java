package demo.project.twitter.service;

import demo.project.twitter.dto.NotificationDto;
import demo.project.twitter.facade.NotificationFacade;
import demo.project.twitter.facade.NotificationFunction;
import demo.project.twitter.model.Notification;
import demo.project.twitter.model.enums.ActionType;
import demo.project.twitter.repository.NotificationRepository;
import demo.project.twitter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
public class NotificationService implements NotificationFunction {

    private final NotificationFacade notificationFacade;
    private final NotificationRepository notificationRepository;
    private final UserRepository userRepository;

    @Override
    public List<NotificationDto> findAllNotificationByRecieverUsername(String username){
        if(userRepository.findByUsername(username) == null){
            log.info("findAllNotificationByRecieverUsername not found " + username);
            return null;
        }
        log.info("findAllNotificationByRecieverUsername " + username);
        return notificationRepository.getAllNotificationByRecieverUsername(username).stream()
                .map(notificationFacade::mapToProductDto)
                .collect(Collectors.toList());
    }

    @Override
    public void createNotification(Notification notification) {
        notificationRepository.save(notification);
    }

    @Override
    public void deleteNotification(Long id){
        if(!notificationRepository.existsById(id)){
            log.info("Notification with id " + id + " not found");
            return;
        }
        log.info("Notification with id " + id + " deleted");
        notificationRepository.deleteById(id);
    }

    public void deleteNotificationFromTweetId(Long tweetId, Long invitatorId, ActionType actionType){
        deleteNotification(notificationRepository
                .getNotificationByTweetIdAndInvitatorIdAndNotificationType(tweetId, invitatorId, actionType)
                .getId());
    }
}
