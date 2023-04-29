package demo.project.twitter.entities.tweet;

import demo.project.twitter.entities.BaseEntity;
import lombok.*;

import javax.persistence.*;
import java.net.URL;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "images")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttachmentImage extends BaseEntity {

    private URL ImageUrl;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "tweet_id", referencedColumnName = "id")
    private Tweet tweet;
}
