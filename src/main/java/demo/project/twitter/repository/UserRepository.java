package demo.project.twitter.repository;

import demo.project.twitter.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String name);

    User findByActivationCode(String code);

    User findByActivationCodeForgotPassword(String code);

    User findByEmail(String email);

    @Query(value = "SELECT * FROM users u WHERE NOT EXISTS (SELECT * FROM followers f WHERE (f.follower_id = u.id) LIMIT 4", nativeQuery = true)
    List<User> whoToFollow(Long id);

    @Query(
            value = "select * from users where lower(first_name) like %?1% or lower(last_name) like %?1% or lower(username) like %?1% limit 12",
            nativeQuery = true
    )
    List<User> searchByName(String s1, String s2);

     @Query(
            value = "select us. * from listchat_chat as lc\n" +
                    "    inner join chats_to_users as cu on lc.chat_id = cu.chat_id\n" +
                    "    inner join users as us on cu.user_id = us.id where lc.listchat_id = ?",
            nativeQuery = true
    )
    List<User> getListChat(Long listChatId);

    @Query(
            value = "select users. * from chatsnew_to_users as cu\n" +
                    "inner join users on cu.user_id = users.id where cu.chat_id = ?",
            nativeQuery = true
    )
    List<User> getUserReceiverFromChat(Long chatId);


}
