package demo.project.twitter.facade.chats;

import demo.project.twitter.model.chat.GeneralChat;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface FunctionListChat {

    GeneralChat saveOne(GeneralChat listchat);

    Optional<GeneralChat> getById(Long id);

    boolean existsById(Long id);


}
