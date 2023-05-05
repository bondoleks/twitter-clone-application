package demo.project.twitter.models.chat;

import demo.project.twitter.model.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@javax.persistence.Entity
@javax.persistence.Table(name = "messages")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Message extends BaseEntity {


    @Column(name = "chat_id")
    private Long chatId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "text_message")
    private String textMessage;
}