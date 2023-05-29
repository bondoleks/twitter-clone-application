package demo.project.twitter.repository;

import demo.project.twitter.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String name);
    Long getUserIdByUsername(String username);
}
