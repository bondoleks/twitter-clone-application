package demo.project.twitter.repository;

import demo.project.twitter.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String name);

    Long getUserIdByUsername(String username);

    User findByActivationCode(String code);

    User findByEmail(String email);

 @Query (value = "SELECT * FROM users u WHERE NOT EXISTS (SELECT * FROM followers f WHERE (f.follower_id = u.id) LIMIT 4", nativeQuery = true)
 List<User> whoToFollow (Long id);

}
