package demo.project.twitter.facade.chats;

import demo.project.twitter.facade.masseges.DtoMessage;
import demo.project.twitter.facade.tweets.DtoTweet;
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
