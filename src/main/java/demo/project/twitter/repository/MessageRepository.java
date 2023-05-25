package demo.project.twitter.repository;

import org.springframework.stereotype.Repository;

import demo.project.twitter.model.chat.Message;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
    public interface MessageRepository extends JpaRepository<Message, Long> {
    }

