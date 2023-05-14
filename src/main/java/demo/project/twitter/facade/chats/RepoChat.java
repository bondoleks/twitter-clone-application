package demo.project.twitter.facade.chats;

import demo.project.twitter.models.chat.Chat;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepoChat extends CrudRepository<Chat, Long> { }
