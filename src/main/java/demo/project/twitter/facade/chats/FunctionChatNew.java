package demo.project.twitter.facade.chats;

import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.chat.ChatNew;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface FunctionChatNew {

    ChatNew saveOne(ChatNew chat);

    Optional<ChatNew> getById(Long id);

    boolean existsById(Long id);

}
