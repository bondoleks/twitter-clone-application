package demo.project.twitter.facade.chats;

import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.chat.ChatNew;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;


@Repository
public interface RepoChatNew extends JpaRepository<ChatNew, Long> {


    @Transactional
    @Modifying
    @Query(
            value = "insert into chats_to_users(chat_id, user_id) values (:chat,:user)",
            nativeQuery = true
    )
    void addUserToChat(@Param("chat") Long chatId, @Param("user") Long userId);


    @Transactional
    @Modifying
    @Query(
            value = "delete from chats_to_users where chat_id = :chat and user_id = :user",
            nativeQuery = true
    )
    void deleteUserFromChat(@Param("chat") Long chatId, @Param("user") Long userId);

    @Transactional
    @Modifying
    @Query(
            value = "delete from chatsnew where id = :id",
            nativeQuery = true
    )

    @Override
    void deleteById(@Param("id") Long id);


    @Query(
            value = "select c.id from chatsnew as c " +
                    "inner join chatsnew_to_users on c.id = chatsnew_to_users.chat_id" +
                    "inner join users on chatsnew_to_users.chat_id = users.id " +
                    "where id = :userId",
            nativeQuery = true
    )
    List<ChatNew> getAllByUserId(@Param("userId") Long id);


    @Query(
            value = "select chatsnew. * from chatsnew_to_users as cu " +
                    "inner join chatsnew on cu.chat_id = chatsnew.id " +
                    "where  chatsnew.initiator_id = ? and cu.user_id = ?",
            nativeQuery = true
    )
    List<ChatNew> getChatByUser(Long userInit, Long userReciv);

    @Query(
            value = "select chatsnew. * from chatsnew_to_users as cu " +
                    "inner join chatsnew on cu.chat_id = chatsnew.id " +
                    "where  chatsnew.initiator_id = ? and cu.user_id = ?",
            nativeQuery = true
    )
    List<ChatNew> getListChat(Long profileId);

    @Query(
            value = "select chatsnew. * from listchat_chat as lc\n" +
                    "     inner join chatsnew on lc.chat_id = chatsnew.id where lc.listchat_id = ?",
            nativeQuery = true
    )
    List<ChatNew> getListChatByGeneralId(Long generalChatId);


}
