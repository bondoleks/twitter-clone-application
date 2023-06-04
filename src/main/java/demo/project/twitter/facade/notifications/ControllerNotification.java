package demo.project.twitter.facade.notifications;


import demo.project.twitter.model.Notification;
import demo.project.twitter.model.enums.NotificationType;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController

@RequestMapping("notifications")
public class ControllerNotification {

    private final ServiceNotification serviceNotification;

    @PostMapping("read")
    public List<Notification> readNotificationsByUsername() {
        return serviceNotification.findAllNotificationByRecieverUsername(getCurrentUsername());
    }

    @PostMapping("{id}/delete")
    public List<Notification> deleteNotification(@PathVariable(value = "id") Long id, Model model){
        serviceNotification.deleteNotification(id);
        return serviceNotification.findAllNotificationByRecieverId(id);
    }
    public String getCurrentUsername() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName();
    }

}
