package demo.project.twitter.facade.notifications;


import demo.project.twitter.model.Notification;
import demo.project.twitter.model.enums.NotificationType;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController

@RequestMapping("notifications")
public class ControllerNotification {

    private final ServiceNotification serviceNotification;
    private final


    @PostMapping("create/{fromUserId}/{tweetId}")
    String createNotification(@PathVariable("fromUserId") Long fromUserId, @PathVariable("tweetId") Long tweetId,
                          @RequestParam NotificationType notificationType, @RequestParam String toUsername, Model model){
        serviceNotification.createNotification(notificationType, toUsername, fromUserId, tweetId);
        return "Created";
//        return "redirect:/ name attribute in front";
    }

    @GetMapping("read/{id}")
    public String readNotificationsByUserId(@PathVariable("id") Long id, Model model) {
        Iterable<Notification> posts = serviceNotification.findAllNotificationByRecieverId(id);
        model.addAttribute("name attribute in front", posts);
        return posts.toString();
//        return "name attribute in front";
    }

    @PostMapping("{id}/delete")
    public String deleteNotification(@PathVariable(value = "id") Long id, Model model){
        serviceNotification.deleteNotification(id);
        return "Deleted";
//        return "redirect:/ name attribute in front";

    }

}
