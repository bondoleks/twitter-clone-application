package demo.project.twitter.facade.notifications;


import com.fasterxml.jackson.annotation.JsonCreator;
import demo.project.twitter.model.Notification;
import demo.project.twitter.model.enums.NotificationType;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RequiredArgsConstructor
@RestController
@Log4j2
@RequestMapping("/api/v1/notifications")
public class ControllerNotification {

    private final ServiceNotification serviceNotification;

    @GetMapping("read")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<DtoNotification>> readNotificationsByUsernameFromToken(Principal principal) {
        log.info("Get all notifications from: " + principal.getName());
        return ResponseEntity.ok(serviceNotification.findAllNotificationByRecieverUsername(principal.getName()));
    }

    @PostMapping("{id}/delete")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<DtoNotification>> deleteNotification(@PathVariable(value = "id") Long id, Principal principal){
        serviceNotification.deleteNotification(id);
        log.info("Notification id: " + id + " deleted");
        return ResponseEntity.ok(serviceNotification.findAllNotificationByRecieverUsername(principal.getName()));
    }

}
