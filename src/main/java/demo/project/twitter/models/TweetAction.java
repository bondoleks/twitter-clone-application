package demo.project.twitter.models;

import demo.project.twitter.models.tweet.Tweet;
import demo.project.twitter.model.BaseEntity;
import demo.project.twitter.model.User;
import demo.project.twitter.models.enums.ActionType;
import lombok.*;

import javax.persistence.*;
import java.util.List;


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
    private List<User> users;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tweet_id", referencedColumnName = "id")
    private Tweet tweet;
}
