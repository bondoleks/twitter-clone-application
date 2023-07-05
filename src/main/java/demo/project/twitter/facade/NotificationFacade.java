package demo.project.twitter.facade;

import demo.project.twitter.dto.NotificationDto;
import demo.project.twitter.model.Notification;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
@Log4j2
public  class NotificationFacade {

    public NotificationDto mapToProductDto(Notification notification){
        NotificationDto dto = new NotificationDto();
        dto.setId(notification.getId());
        dto.setNotificationType(notification.getNotificationType());
        dto.setReciever(notification.getReciever().getUsername());
        dto.setInvitator(notification.getInvitator().getUsername());
        dto.setInvitatorId(notification.getInvitator().getId());
        dto.setInvitatorAvImagerUrl(notification.getInvitator().getAv_imagerUrl());
        dto.setTweetId(notification.getTweet().getId());
        return dto;
    }
}






