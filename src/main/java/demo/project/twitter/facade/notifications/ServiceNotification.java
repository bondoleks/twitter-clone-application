package demo.project.twitter.facade.notifications;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
public class ServiceNotification implements FunctionNotification {

    private final FacadeNotification facadeNotification;
    private final RepoNotification repoNotification;

    @Override
    public List<DtoNotification> findAllNotificationByRecieverUsername(String username){
        log.info("findAllNotificationByRecieverUsername " + username);
        return repoNotification.getAllNotificationByRecieverUsername(username).stream()
                .map(facadeNotification::mapToProductDto)
                .collect(Collectors.toList());
    }

    public void deleteNotification(Long id){
        if(!repoNotification.existsById(id)){
            id = 0L;
        }
        repoNotification.deleteById(id);
    }


}
