package demo.project.twitter.model.tweet;

import demo.project.twitter.model.BaseEntity;
import demo.project.twitter.model.User;
import demo.project.twitter.model.enums.TweetType;
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

    @Column(name = "tweet_body")
    private String tweetBody;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "parent_tweet_id", referencedColumnName = "id")
    private Tweet parentTweet;

    public Tweet(TweetType tweetType, String tweetBody, User user) {
        this.tweetType = tweetType;
        this.tweetBody = tweetBody;
        this.user = user;
    }
}
