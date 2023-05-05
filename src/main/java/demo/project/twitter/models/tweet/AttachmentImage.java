package demo.project.twitter.models.tweet;

import demo.project.twitter.model.BaseEntity;
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

    @Column(name = "image_url")
    private String imagerUrl;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "tweet_id", referencedColumnName = "id")
    private Tweet tweet;
}
