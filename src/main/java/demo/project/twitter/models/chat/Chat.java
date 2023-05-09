package demo.project.twitter.models.chat;

import demo.project.twitter.model.BaseEntity;
import demo.project.twitter.model.User;
import jakarta.persistence.*;
import lombok.*;

import javax.persistence.JoinColumn;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "chats")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
    public class Chat extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "chat_id")
    private Long chatId;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "initiator_id", referencedColumnName = "id")
    private User initiator;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "message_id", referencedColumnName = "id")
    private List<Message> messages;

}
