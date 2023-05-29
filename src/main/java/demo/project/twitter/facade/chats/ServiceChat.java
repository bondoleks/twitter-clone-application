package demo.project.twitter.facade.chats;


import demo.project.twitter.model.chat.Chat;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceChat implements FunctionChat {
    private final RepoChat repo;

   /* Дальнейший код приведен для примера.
        В данном классе создаются методы сервиса, заявленные в интерфейсе Function,
        в том числе, и с подключением интерфейса Repo (наследник CrudRepository)
        */

// ************************************** EXAMPLE START **************************************

    @Override
    public Chat saveOne(Chat chat) {
        return repo.save(chat);
    }
    @Override
    public Optional<Chat> getById(Long id) {
        return repo.findById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

//    ************************************** EXAMPLE END **************************************

}
