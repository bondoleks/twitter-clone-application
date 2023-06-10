package demo.project.twitter.facade.chats;

import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.tweet.Tweet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface RepoChat extends JpaRepository<Chat, Long> {

    @Query(
            value = "select * from chats where initiator_id = ?1 and user_to_id = ?2",
            nativeQuery = true
    )
    Optional<Chat> findChatBetween(Long user_initiator, Long user_to);
}
