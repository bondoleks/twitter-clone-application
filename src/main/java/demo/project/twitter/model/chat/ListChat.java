package demo.project.twitter.model.chat;

import demo.project.twitter.model.BaseEntity;
import demo.project.twitter.model.tweet.Tweet;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "listchat")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ListChat extends BaseEntity {

    @Column(unique = true)
    @org.hibernate.annotations.Index(name = "index_userId")
    private Long userId;

    @ManyToMany
    @JoinTable(name = "listchat_chat",
            joinColumns = @JoinColumn(name = "listchat_id"),
            inverseJoinColumns = @JoinColumn(name = "chat_id"))

    private List<Chat> listChat = new ArrayList<>();

    public ListChat(Long userId) {
        this.userId = userId;
    }
}
