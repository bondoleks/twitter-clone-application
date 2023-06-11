package demo.project.twitter.facade.chats;

import lombok.Data;
import org.springframework.stereotype.Service;

@Service
@Data
public class DtoChatReq {

    private Long user_initiatorId;

}
