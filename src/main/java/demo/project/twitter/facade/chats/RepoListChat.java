package demo.project.twitter.facade.chats;

import demo.project.twitter.model.chat.GeneralChat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface RepoListChat extends JpaRepository<GeneralChat, Long> {


    boolean existsByUserId(Long profile);

    List<GeneralChat> findByUserId(Long profile);

    @Query(
            value = "select  * from listchat\n" +
                    "inner join listchat_chat on listchat.id = listchat_chat.listchat_id\n" +
                    "          where chat_id = ? and listchat.id = ?",
            nativeQuery = true
    )
    List<GeneralChat> existsChatInGeneralChat(Long chatId, Long generalChatId);

}
