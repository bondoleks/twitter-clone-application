package demo.project.twitter.model;

import demo.project.twitter.model.enums.ActionType;
import demo.project.twitter.model.tweet.Tweet;
import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "notifications")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Notification extends BaseEntity {
    @Enumerated(EnumType.STRING)
    private ActionType notificationType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "reciever_id", referencedColumnName = "id")
    private User reciever;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "invitator_id", referencedColumnName = "id")
    private User invitator;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tweet_id", referencedColumnName = "id")
    private Tweet tweet;

    @Column(name = "is_read")
    private boolean isRead;
}




