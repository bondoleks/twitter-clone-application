package demo.project.twitter.repository;

import demo.project.twitter.model.TweetAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TweetActionRepository extends JpaRepository<TweetAction, Long> {

    @Query(
            value = "select count(*) from tweet_actions  where tweet_id = ? and action_type = ?",
            nativeQuery = true
    )
    Integer countAction(Long tweetId, String  tweetType);

    @Query(
            value = "select count(*) from tweet_actions  where tweet_id = ? and user_id = ? and action_type = ? ",
            nativeQuery = true
    )
    Integer marker(Long tweetId, Long profileId, String actionType);

    @Query(
            value = "select * from tweet_actions  where tweet_id = ? and user_id = ? and action_type = ? ",
            nativeQuery = true
    )
    Optional<TweetAction> getTweetAction(Long tweetId, Long profileId, String actionType);

    void deleteById(Long id);


}