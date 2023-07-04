package demo.project.twitter.model.chat;

import demo.project.twitter.model.BaseEntity;
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
public class GeneralChat extends BaseEntity {

    @Column(unique = true)
    @org.hibernate.annotations.Index(name = "index_userId")
    private Long userId;

    @ManyToMany
    @JoinTable(name = "listchat_chat",
            joinColumns = @JoinColumn(name = "listchat_id"),
            inverseJoinColumns = @JoinColumn(name = "chat_id"))

    private List<ChatNew> listChat = new ArrayList<>();

    public GeneralChat(Long userId) {
        this.userId = userId;
    }
}
