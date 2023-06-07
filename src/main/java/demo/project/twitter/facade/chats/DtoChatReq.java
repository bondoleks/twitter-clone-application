package demo.project.twitter.facade.chats;

import demo.project.twitter.facade.masseges.DtoMessage;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
public class DtoChatReq {

    private Long initiator_id;
    private Long userToId;

}
