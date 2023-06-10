package demo.project.twitter.facade.notifications;

import demo.project.twitter.model.Notification;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
@Log4j2
public  class FacadeNotification {

    public DtoNotification mapToProductDto(Notification notification){
        DtoNotification dto = new DtoNotification();
        dto.setId(notification.getId());
        dto.setNotificationType(notification.getNotificationType());
        dto.setReciever(notification.getReciever().getUsername());
        dto.setInvitator(notification.getInvitator().getUsername());
        dto.setTweet(notification.getTweet());
        return dto;
    }
}






