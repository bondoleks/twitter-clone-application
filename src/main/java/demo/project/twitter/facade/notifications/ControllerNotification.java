package demo.project.twitter.facade.notifications;


import demo.project.twitter.model.Notification;
import demo.project.twitter.model.enums.NotificationType;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController

@RequestMapping("notifications")
public class ControllerNotification {

    private final ServiceNotification serviceNotification;


//    @PostMapping("create/{fromUserId}/{tweetId}")
//    String createNotification(@PathVariable("fromUserId") Long fromUserId, @PathVariable("tweetId") Long tweetId,
//                          @RequestParam NotificationType notificationType, @RequestParam String toUsername, Model model){
//        serviceNotification.createNotification(notificationType, toUsername, fromUserId, tweetId);
//        return "Created";
////        return "redirect:/ name attribute in front";
//    }

    @PostMapping("read/{id}")
    public List<Notification> readNotificationsByUserId(@PathVariable("id") Long id) {
        return serviceNotification.findAllNotificationByRecieverId(id);
    }

    @PostMapping("{id}/delete")
    public List<Notification> deleteNotification(@PathVariable(value = "id") Long id, Model model){
        serviceNotification.deleteNotification(id);
        return serviceNotification.findAllNotificationByRecieverId(id);
    }

}
