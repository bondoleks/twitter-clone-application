package demo.project.twitter.model.tweet;

import demo.project.twitter.model.BaseEntity;
import lombok.*;

import javax.persistence.*;

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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tweet_id", referencedColumnName = "id")
    private Tweet tweet;
}
