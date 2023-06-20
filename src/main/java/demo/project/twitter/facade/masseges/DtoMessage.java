package demo.project.twitter.facade.masseges;

import lombok.Data;
import org.springframework.stereotype.Service;


@Service
@Data
public class DtoMessage {
    private Long user_from;
    private Long chat_id;
    private String textMessage;

}
