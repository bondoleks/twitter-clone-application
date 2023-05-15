package demo.project.twitter.models.chat;


import demo.project.twitter.model.BaseEntity;
import demo.project.twitter.model.User;
import javax.persistence.*;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "chats_to_users")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatsToUsers extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @JoinColumn(name = "chat_id", referencedColumnName = "id")
    private Long chatId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

}
