package demo.project.twitter.facade.users;

import demo.project.twitter.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepoUser extends CrudRepository<User, Long> { }
