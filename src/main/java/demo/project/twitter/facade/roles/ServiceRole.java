package demo.project.twitter.facade.roles;


import demo.project.twitter.model.Role;
import demo.project.twitter.model.User;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceRole implements FunctionRole {
    private final RepoRole repo;

   /* Дальнейший код приведен для примера.
        В данном классе создаются методы сервиса, заявленные в интерфейсе Function,
        в том числе, и с подключением интерфейса Repo (наследник CrudRepository)
        */

// ************************************** EXAMPLE START **************************************

    @Override
    public Role saveOne(Role role) {
        return repo.save(role);
    }
    @Override
    public Optional<Role> getById(Long id) {
        return repo.findById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

//    ************************************** EXAMPLE END **************************************

}
