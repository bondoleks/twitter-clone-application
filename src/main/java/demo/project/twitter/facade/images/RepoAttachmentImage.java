package demo.project.twitter.facade.images;

import demo.project.twitter.model.User;
import demo.project.twitter.models.tweet.AttachmentImage;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepoAttachmentImage extends CrudRepository<AttachmentImage, Long> { }
