package demo.project.twitter.model.tweet;

import demo.project.twitter.model.BaseEntity;
import demo.project.twitter.model.User;
import demo.project.twitter.model.enums.TweetType;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tweetword")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TweetWord extends BaseEntity {

    @Column(unique = true)
    @org.hibernate.annotations.Index(name = "index_word")
    private String word;

    @ManyToMany
    @JoinTable(name = "tweet_word",
            joinColumns = @JoinColumn(name = "word_id"),
            inverseJoinColumns = @JoinColumn(name = "tweet_id"))
    private List<Tweet> listTweet = new ArrayList<>();

    public TweetWord(String word, Tweet tweet) {
        this.word = word;
        listTweet.add(tweet);
    }
}
