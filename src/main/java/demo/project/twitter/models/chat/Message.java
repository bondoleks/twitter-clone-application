package demo.project.twitter.models.chat;

import demo.project.twitter.model.BaseEntity;
import demo.project.twitter.model.User;
import jakarta.persistence.*;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "messages")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Message extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long messageId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column(name = "text_message")
    private String textMessage;
}