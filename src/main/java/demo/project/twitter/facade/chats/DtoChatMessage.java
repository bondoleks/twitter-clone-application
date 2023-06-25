package demo.project.twitter.facade.chats;

import demo.project.twitter.facade.messages.DtoMessage;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
public class DtoChatMessage {

    private Long totalElements;
    private Integer totalPage;
    private List<DtoMessage> listDto;
}
