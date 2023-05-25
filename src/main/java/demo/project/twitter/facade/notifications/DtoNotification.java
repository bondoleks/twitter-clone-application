package demo.project.twitter.facade.notifications;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class DtoNotification {

    private Long idFrom;
    private String toUsername;
}
