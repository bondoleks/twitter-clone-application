package demo.project.twitter.entities.tweetAction;

import demo.project.twitter.entities.BaseEntity;
import demo.project.twitter.entities.User;
import demo.project.twitter.entities.tweet.Tweet;
import demo.project.twitter.models.enums.ActionType;
import lombok.*;

import javax.persistence.*;


@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tweetActions")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TweetAction extends BaseEntity {
    @Enumerated(EnumType.STRING)
    private ActionType actionType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tweet_id", referencedColumnName = "id")
    private Tweet tweet;
}
