package demo.project.twitter.facade.roles;

import demo.project.twitter.model.Role;
import demo.project.twitter.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepoRole extends CrudRepository<Role, Long> { }
