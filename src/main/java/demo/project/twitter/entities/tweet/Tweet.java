package demo.project.twitter.entities.tweet;

import demo.project.twitter.entities.BaseEntity;
import demo.project.twitter.entities.User;
import lombok.*;
import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tweets")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tweet extends BaseEntity {
    @Enumerated(EnumType.STRING)
    private TweetType tweetType;

    private String tweetBody;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "parent_tweet_id", referencedColumnName = "id")
    private Tweet parentTweet;

}
