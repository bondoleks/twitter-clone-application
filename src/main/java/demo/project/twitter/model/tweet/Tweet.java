package demo.project.twitter.model.tweet;

import demo.project.twitter.model.BaseEntity;
import demo.project.twitter.model.TweetsWord;
import demo.project.twitter.model.User;
import demo.project.twitter.model.enums.TweetType;
import lombok.*;
import javax.persistence.*;
import java.util.List;

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

    @Column(name = "count_views")
    private Long countViews;

    @ManyToMany(mappedBy = "tweets")
    private List<User> users;

    @ManyToMany
    @JoinTable(name = "tweet_tweetsword",
            joinColumns = @JoinColumn(name = "tweet_id"),
            inverseJoinColumns = @JoinColumn(name = "tweetsword_id"))
    private List<TweetsWord> tweetsWords;

    public Tweet(TweetType tweetType, String tweetBody, User user) {
        this.tweetType = tweetType;
        this.tweetBody = tweetBody;
        this.user = user;
    }
}
