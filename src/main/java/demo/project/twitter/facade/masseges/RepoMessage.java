package demo.project.twitter.facade.masseges;

import demo.project.twitter.model.chat.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepoMessage extends JpaRepository<Message, Long> {

}
