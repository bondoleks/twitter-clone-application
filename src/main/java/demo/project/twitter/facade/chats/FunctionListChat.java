package demo.project.twitter.facade.chats;

import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.chat.ListChat;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface FunctionListChat {

    ListChat saveOne(ListChat listchat);

    Optional<ListChat> getById(Long id);

    boolean existsById(Long id);


}
