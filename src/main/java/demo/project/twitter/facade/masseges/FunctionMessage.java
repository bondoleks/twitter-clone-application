package demo.project.twitter.facade.masseges;

import demo.project.twitter.model.chat.Message;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface FunctionMessage {

/* Дальнейший код приведен для примера.
        В данном интерфейсе декларируются методы для их реализации в Service.
        Их количество, семантика и логическая нагрузка определяется индивидуально для каждой entity из списка models
        */

    // ************************************** EXAMPLE START **************************************
    Message saveOne(Message message);
    Optional<Message> getById(Long id);
    boolean existsById(Long id);

//    ************************************** EXAMPLE END **************************************
}
