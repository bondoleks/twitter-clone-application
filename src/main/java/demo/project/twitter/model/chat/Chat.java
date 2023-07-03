package demo.project.twitter.model.chat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import demo.project.twitter.model.BaseEntity;
import demo.project.twitter.model.User;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
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

   /* @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "initiator_id", referencedColumnName = "id")*/
//    @Column(name = "initiator_id")
    private Long initiatorId;


    @OneToMany(mappedBy = "chat")
    private List<Message> messages = new ArrayList<>();


    @ManyToMany(mappedBy = "userChats")
    @JsonIgnore
    private Set<User> users = new HashSet<>();

    @ManyToMany(mappedBy = "listChat")
    @JsonIgnore
    private List<GeneralChat> listGeneralChat = new ArrayList<>();


    public Chat(Long initiator1, User user) {
        this.initiatorId = initiator1;
        users.add(user );


    }

    public void addUser(User user) {
        this.users.add(user);
    }
//    @ManyToMany
//    @JoinTable(name = "chats_to_users", joinColumns = @JoinColumn(name = "user_id"),
//            inverseJoinColumns = @JoinColumn(name = "chat_id"))
//    private Set<Chat> chats = new HashSet<>();

}
