package demo.project.twitter.facade.masseges;

import demo.project.twitter.model.chat.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface RepoMessage extends JpaRepository<Message, Long> {


    @Query(
            value = "select * from messages where chat_id = ?1",
            nativeQuery = true
    )
    List<Message> getAllByChatId(Long chatId);
}
