package demo.project.twitter.facade.messages;

import demo.project.twitter.model.chat.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


@Repository
public interface RepoMessage extends JpaRepository<Message, Long>, PagingAndSortingRepository<Message, Long> {


    @Query(
            value = "select * from messages where chat_id = ?1",
            nativeQuery = true
    )
    List<Message> getAllByChatId(Long chatId);

    @Query(
            value = "select * from messages where chat_id = ? order by id asc ",
            nativeQuery = true
    )
    Page<Message> getChatAllMessages(Long chatId, Pageable pageable);

    @Query(
            value = "select text_message from messages where chat_id = ? and id = (select MAX(id) from messages where chat_id = ?)",
            nativeQuery = true
    )
    List<String> getLastMessage(Long chatId1, Long chatId2);
    @Transactional
    void deleteByChat_Id(Long chatId);
}
