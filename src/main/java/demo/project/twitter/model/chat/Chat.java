package demo.project.twitter.model.chat;

import com.fasterxml.jackson.annotation.JsonIgnore;
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


    @ManyToMany(mappedBy = "userChats")
    @JsonIgnore
    private Set<User> users = new HashSet<>();

    public void addUser(User user) {
        this.users.add(user);
    }
//    @ManyToMany
//    @JoinTable(name = "chats_to_users", joinColumns = @JoinColumn(name = "user_id"),
//            inverseJoinColumns = @JoinColumn(name = "chat_id"))
//    private Set<Chat> chats = new HashSet<>();

}
