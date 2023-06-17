package demo.project.twitter.facade.notifications;


import com.fasterxml.jackson.annotation.JsonCreator;
import demo.project.twitter.dto.TextMessageDTO;
import demo.project.twitter.model.Notification;
import demo.project.twitter.model.enums.NotificationType;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
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
@CrossOrigin(origins = "*")
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

    @Autowired
    SimpMessagingTemplate template;

    @PostMapping("/send")
    public ResponseEntity<Void> sendMessage(@RequestBody DtoNotification dtoNotification, Principal principal) {
        template.convertAndSendToUser(principal.getName(), "/notifications", dtoNotification);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @SendTo("/notifications")
    public TextMessageDTO broadcastMessage(@Payload TextMessageDTO textMessageDTO) {
        return textMessageDTO;
    }

}
