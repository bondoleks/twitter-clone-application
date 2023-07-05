package demo.project.twitter.model.tweet;

import demo.project.twitter.model.BaseEntity;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "view_user_id")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ViewUserId extends BaseEntity {

    @Column(unique = true)
    @org.hibernate.annotations.Index(name = "index_usId")
    private Long userId;

    @ManyToMany
    @JoinTable(name = "tweet_user",
            joinColumns = @JoinColumn(name = "us_id"),
            inverseJoinColumns = @JoinColumn(name = "tw_id"))

    private Set<Tweet> listTweet1 = new HashSet<>();

    public ViewUserId(Long userId) {
        this.userId =userId;



    }
}
