package demo.project.twitter.controller;

import demo.project.twitter.dto.NotificationDto;
import demo.project.twitter.service.NotificationService;
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
@CrossOrigin(origins = {"https://twitter-clone-application.vercel.app",
        "http://localhost:5173",
        "https://twitter-clone-application-e8cz8renm-bondoleks.vercel.app"})
public class NotificationController {

    private final NotificationService notificationService;

    @GetMapping("read")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<NotificationDto>> readNotificationsByUsernameFromToken(Principal principal) {
        log.info("Get all notifications from: " + principal.getName());
        return ResponseEntity.ok(notificationService.findAllNotificationByRecieverUsername(principal.getName()));
    }

    @PostMapping("{id}/delete")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<NotificationDto>> deleteNotification(@PathVariable(value = "id") Long id, Principal principal){
        notificationService.deleteNotification(id);
        log.info("Notification id: " + id + " deleted");
        return ResponseEntity.ok(notificationService.findAllNotificationByRecieverUsername(principal.getName()));
    }

    @Autowired
    SimpMessagingTemplate template;

    @PostMapping("/send")
    public ResponseEntity<Void> sendMessage(@RequestBody NotificationDto notificationDto, Principal principal) {
        template.convertAndSendToUser(principal.getName(), "/notifications", notificationDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @SendTo("/notifications")
    public NotificationDto broadcastMessage(@Payload NotificationDto notificationDto) {
        return notificationDto;
    }
}
