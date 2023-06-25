package demo.project.twitter.facade.masseges;

import demo.project.twitter.model.chat.Message;
import demo.project.twitter.model.tweet.Tweet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


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

}
