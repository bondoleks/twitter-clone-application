package demo.project.twitter.service;

import demo.project.twitter.dto.DtoNotification;
import demo.project.twitter.facade.NotificationFacade;
import demo.project.twitter.facade.NotificationFunction;
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
public class NotificationServiceFunction implements NotificationFunction {

    private final NotificationFacade notificationFacade;
    private final NotificationRepository notificationRepository;
    private final UserRepository userRepository;

    @Override
    public List<DtoNotification> findAllNotificationByRecieverUsername(String username){
        if(userRepository.findByUsername(username) == null){
            log.info("findAllNotificationByRecieverUsername not found " + username);
            List<DtoNotification> notFound = null;
            return null;
        }
        log.info("findAllNotificationByRecieverUsername " + username);
        return notificationRepository.getAllNotificationByRecieverUsername(username).stream()
                .map(notificationFacade::mapToProductDto)
                .collect(Collectors.toList());
    }

    public void deleteNotification(Long id){
        if(!notificationRepository.existsById(id)){
            log.info("Notification with id " + id + " not found");
            return;
        }
        log.info("Notification with id " + id + " deleted");
        notificationRepository.deleteById(id);
    }
}
