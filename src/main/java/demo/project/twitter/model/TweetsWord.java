package demo.project.twitter.model;

import demo.project.twitter.model.tweet.Tweet;
import lombok.*;

import javax.persistence.*;
import org.hibernate.annotations.Index;

import java.util.List;

@Entity
@Table(name = "tweetsword")

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TweetsWord extends BaseEntity{

    @Column(unique = true)
    @Index(name = "index_word")
    private String word;

    @ManyToMany (mappedBy = "tweetsword")
    private List<Tweet> tweets;
}
