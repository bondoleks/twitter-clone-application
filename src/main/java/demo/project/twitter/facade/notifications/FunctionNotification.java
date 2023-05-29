package demo.project.twitter.facade.notifications;

import demo.project.twitter.model.Notification;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface FunctionNotification {

/* Дальнейший код приведен для примера.
        В данном интерфейсе декларируются методы для их реализации в Service.
        Их количество, семантика и логическая нагрузка определяется индивидуально для каждой entity из списка models
        */

    // ************************************** EXAMPLE START **************************************
    Notification saveOne(Notification not);
    Optional<Notification> getById(Long id);
    boolean existsById(Long id);

//    ************************************** EXAMPLE END **************************************
}
