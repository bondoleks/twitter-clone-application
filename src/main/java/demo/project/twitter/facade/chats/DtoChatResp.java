package demo.project.twitter.facade.chats;

import demo.project.twitter.facade.messages.DtoMessage;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@Data

public class DtoChatResp {
    private Long chatId;
    private List<DtoMessage> messages;
}
