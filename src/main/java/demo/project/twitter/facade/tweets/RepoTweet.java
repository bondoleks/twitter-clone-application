package demo.project.twitter.facade.tweets;

import demo.project.twitter.model.User;
import demo.project.twitter.models.tweet.Tweet;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepoTweet extends CrudRepository<Tweet, Long> { }
