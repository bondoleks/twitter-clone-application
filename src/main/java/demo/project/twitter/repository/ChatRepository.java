package demo.project.twitter.repository;

import demo.project.twitter.models.Chat;
import demo.project.twitter.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatRepository extends JpaRepository<Chat, Long> {
}
