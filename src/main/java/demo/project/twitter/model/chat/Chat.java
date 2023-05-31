package demo.project.twitter.model.chat;

import demo.project.twitter.model.BaseEntity;
import demo.project.twitter.model.User;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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


    @ManyToMany
    @JoinTable(name = "chats_to_users", joinColumns = @JoinColumn(name = "chat_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private Set<Chat> chats = new HashSet<>();

}
