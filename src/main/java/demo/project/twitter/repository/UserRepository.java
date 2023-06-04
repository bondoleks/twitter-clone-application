package demo.project.twitter.repository;

import demo.project.twitter.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String name);
    Long getUserIdByUsername(String username);
}
