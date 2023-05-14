package demo.project.twitter.facade.masseges;


import demo.project.twitter.model.User;
import demo.project.twitter.models.chat.Message;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceMessage implements FunctionMessage {
    private final RepoMessage repo;

   /* Дальнейший код приведен для примера.
        В данном классе создаются методы сервиса, заявленные в интерфейсе Function,
        в том числе, и с подключением интерфейса Repo (наследник CrudRepository)
        */

// ************************************** EXAMPLE START **************************************

    @Override
    public Message saveOne(Message message) {
        return repo.save(message);
    }
    @Override
    public Optional<Message> getById(Long id) {
        return repo.findById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

//    ************************************** EXAMPLE END **************************************

}
