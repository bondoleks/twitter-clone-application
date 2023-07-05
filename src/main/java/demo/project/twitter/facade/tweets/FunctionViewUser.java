package demo.project.twitter.facade.tweets;

import demo.project.twitter.model.tweet.Tweet;
import demo.project.twitter.model.tweet.ViewUserId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface FunctionViewUser {

    ViewUserId saveOne(ViewUserId viewUserId);

    Optional<ViewUserId> getById(Long id);

    boolean existsById(Long id);

    List<ViewUserId> getAll();

}
