package demo.project.twitter.facade.roles;

import demo.project.twitter.model.Role;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface FunctionRole {

/* Дальнейший код приведен для примера.
        В данном интерфейсе декларируются методы для их реализации в Service.
        Их количество, семантика и логическая нагрузка определяется индивидуально для каждой entity из списка models
        */

    // ************************************** EXAMPLE START **************************************
    Role saveOne(Role role);
    Optional<Role> getById(Long id);
    boolean existsById(Long id);

//    ************************************** EXAMPLE END **************************************
}
