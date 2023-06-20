package demo.project.twitter.facade.tweets;

import demo.project.twitter.model.tweet.Tweet;
import demo.project.twitter.model.tweet.TweetWord;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface FunctionTweetWord {

    TweetWord saveOne(TweetWord tweetWord);
    Optional<TweetWord> getById(Long id);
    boolean existsById(Long id);

    List<TweetWord> getAll();


}
