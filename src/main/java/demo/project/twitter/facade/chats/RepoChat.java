package demo.project.twitter.facade.chats;

import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.tweet.Tweet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

import java.util.List;

import java.util.Optional;


@Repository
public interface RepoChat extends JpaRepository<Chat, Long> {


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
            value = "delete from chats where id = :id",
            nativeQuery = true
    )

    @Override
    void deleteById(@Param("id") Long id);


    @Query(
            value = "select c.id from chats as c " +
                    "inner join chats_to_users on c.id = chats_to_users.chat_id" +
                    "inner join users on chats_to_users.chat_id = users.id " +
                    "where id = :userId",
            nativeQuery = true
    )
    List<Chat> getAllByUserId(@Param("userId") Long id);


    @Query(
            value = "select chats. * from chats_to_users as cu " +
                    "inner join chats on cu.chat_id = chats.id " +
                    "where  chats.initiator_id = ? and cu.user_id = ?",
            nativeQuery = true
    )
    List<Chat> getChatByUser(Long userInit, Long userReciv);

    @Query(
            value = "select chats. * from chats_to_users as cu " +
                    "inner join chats on cu.chat_id = chats.id " +
                    "where  chats.initiator_id = ? and cu.user_id = ?",
            nativeQuery = true
    )
    List<Chat> getListChat(Long profileId);

    @Query(
            value = "select chats. * from listchat_chat as lc\n" +
                    "     inner join chats on lc.chat_id = chats.id where lc.listchat_id = ?",
            nativeQuery = true
    )
    List<Chat> getListChatByGeneralId(Long generalChatId);
}
