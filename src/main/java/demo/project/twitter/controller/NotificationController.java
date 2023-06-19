package demo.project.twitter.controller;

import demo.project.twitter.dto.DtoNotification;
import demo.project.twitter.service.NotificationServiceFunction;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RequiredArgsConstructor
@RestController
@Log4j2
@RequestMapping("/api/v1/notifications")
@CrossOrigin(origins = "*")
public class NotificationController {

    private final NotificationServiceFunction notificationService;

    @GetMapping("read")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<DtoNotification>> readNotificationsByUsernameFromToken(Principal principal) {
        log.info("Get all notifications from: " + principal.getName());
        return ResponseEntity.ok(notificationService.findAllNotificationByRecieverUsername(principal.getName()));
    }

    @PostMapping("{id}/delete")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<DtoNotification>> deleteNotification(@PathVariable(value = "id") Long id, Principal principal){
        notificationService.deleteNotification(id);
        log.info("Notification id: " + id + " deleted");
        return ResponseEntity.ok(notificationService.findAllNotificationByRecieverUsername(principal.getName()));
    }

    @Autowired
    SimpMessagingTemplate template;

    @PostMapping("/send")
    public ResponseEntity<Void> sendMessage(@RequestBody DtoNotification dtoNotification, Principal principal) {
        template.convertAndSendToUser(principal.getName(), "/notifications", dtoNotification);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @SendTo("/notifications")
    public DtoNotification broadcastMessage(@Payload DtoNotification dtoNotification) {
        return dtoNotification;
    }
}
