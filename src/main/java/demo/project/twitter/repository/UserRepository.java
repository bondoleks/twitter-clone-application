package demo.project.twitter.repository;

import demo.project.twitter.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String name);

    User findByActivationCode(String code);

    User findByEmail(String email);

    @Query(value = "SELECT * FROM users u WHERE NOT EXISTS (SELECT * FROM followers f WHERE (f.follower_id = u.id) LIMIT 4", nativeQuery = true)
    List<User> whoToFollow(Long id);

    @Query(
            value = "select * from users where lower(first_name) like %?1% or lower(last_name) like %?1% or lower(username) like %?1% limit 12",
            nativeQuery = true
    )
    List<User> searchByName(String s1, String s2);


}
