package demo.project.twitter.models;

import demo.project.twitter.models.enums.ActionType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Tweet_Action")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TweetAction {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "tweet_action_id")
    private Long tweetActionId;

    @Column(name = "tweet_id")
    private Long tweetId;

    @Column(name = "user_id")
    private Long userId;

    @Enumerated(EnumType.STRING)
    @Column(name = "action_type")
    private ActionType actionType;

    @Column(name = "quantity")
    private Long quantity;

    public TweetAction(Long tweetId, Long userId, ActionType actionType, Long quantity) {
        this.tweetId = tweetId;
        this.userId = userId;
        this.actionType = actionType;
        this.quantity = quantity;
    }
}
