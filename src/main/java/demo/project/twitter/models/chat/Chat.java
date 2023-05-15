package demo.project.twitter.models.chat;

import demo.project.twitter.model.BaseEntity;
import demo.project.twitter.model.User;
import javax.persistence.*;
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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "initiator_id", referencedColumnName = "id")
    private User initiator;

    @OneToMany(mappedBy = "chat")
    private List<Message> messages;

}
