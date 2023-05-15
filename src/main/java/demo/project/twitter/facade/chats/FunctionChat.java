package demo.project.twitter.facade.chats;

import demo.project.twitter.model.chat.Chat;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface FunctionChat {

/* Дальнейший код приведен для примера.
        В данном интерфейсе декларируются методы для их реализации в Service.
        Их количество, семантика и логическая нагрузка определяется индивидуально для каждой entity из списка models
        */

    // ************************************** EXAMPLE START **************************************
    Chat saveOne(Chat chat);
    Optional<Chat> getById(Long id);
    boolean existsById(Long id);

//    ************************************** EXAMPLE END **************************************
}
