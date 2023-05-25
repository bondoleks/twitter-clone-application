package demo.project.twitter.facade.users;

import demo.project.twitter.model.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface FunctionUser {

/* Дальнейший код приведен для примера.
        В данном интерфейсе декларируются методы для их реализации в Service.
        Их количество, семантика и логическая нагрузка определяется индивидуально для каждой entity из списка models
        */

    // ************************************** EXAMPLE START **************************************
    User saveOne(User user);
    Optional<User> getById(Long id);
    boolean existsById(Long id);

//    ************************************** EXAMPLE END **************************************
}
