package demo.project.twitter.facade.chats;

import demo.project.twitter.facade.masseges.DtoMessage;
import demo.project.twitter.model.chat.Message;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@Data

public class DtoChatResp {
    private Long chatId;
    private List<Message> messages;
}
