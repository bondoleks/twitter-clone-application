package demo.project.twitter.facade.notifications;


import demo.project.twitter.model.User;
import demo.project.twitter.models.Notification;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceNotification implements FunctionNotification {
    private final RepoNotification repo;

   /* Дальнейший код приведен для примера.
        В данном классе создаются методы сервиса, заявленные в интерфейсе Function,
        в том числе, и с подключением интерфейса Repo (наследник CrudRepository)
        */

// ************************************** EXAMPLE START **************************************

    @Override
    public Notification saveOne(Notification not) {
        return repo.save(not);
    }
    @Override
    public Optional<Notification> getById(Long id) {
        return repo.findById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

//    ************************************** EXAMPLE END **************************************

}
