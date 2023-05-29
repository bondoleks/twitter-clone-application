package demo.project.twitter.facade.masseges;

import demo.project.twitter.model.chat.Message;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface FunctionMessage {

    Message saveOne(Message message);
    Optional<Message> getById(Long id);
    boolean existsById(Long id);

}
