package demo.project.twitter.repository;

import demo.project.twitter.model.tweet.AttachmentImage;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AttachmentImageRepository extends CrudRepository<AttachmentImage, Long> {

    @Query(
            value = "select image_url from images  where tweet_id = ?",
            nativeQuery = true
    )
    List<String> getAttachmentImageUrlByTweetId(Long id);
}
