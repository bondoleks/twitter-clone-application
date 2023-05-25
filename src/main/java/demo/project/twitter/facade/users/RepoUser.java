package demo.project.twitter.facade.users;

import demo.project.twitter.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepoUser extends JpaRepository<User, Long> {
    Long getUserIdByUsername(String username);

}
