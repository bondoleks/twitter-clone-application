package demo.project.twitter.facade.masseges;

import demo.project.twitter.model.User;
import demo.project.twitter.model.chat.Chat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Service
@Data
public class DtoMessage {
    private Long user_from;//?
    private Long user_to;//?
    private Long chat_id;//?
    private String textMessage;

}
