package demo.project.twitter.model.chat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import demo.project.twitter.model.BaseEntity;
import demo.project.twitter.model.User;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "chatsnew")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatNew extends BaseEntity {

   /* @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "initiator_id", referencedColumnName = "id")*/
//    @Column(name = "initiator_id")
    private Long initiatorId;


    @OneToMany(mappedBy = "chat")
    private List<Message> messages = new ArrayList<>();


    @ManyToMany(mappedBy = "userChatsNew")
    @JsonIgnore
    private List<User> users = new ArrayList<>();

    @ManyToMany(mappedBy = "listChat")
    @JsonIgnore
    private List<GeneralChat> listGeneralChat = new ArrayList<>();


    public ChatNew(Long initiator1, User user) {
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
