package demo.project.twitter.repository;


import demo.project.twitter.model.tweet.Tweet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TweetRepository extends JpaRepository<Tweet, Long>, PagingAndSortingRepository<Tweet, Long> {
    /*@Query(
            value = "select * from tweets tw where tw.user_id = ? order by tw.created_at desc",
            nativeQuery = true
    )
    List<Tweet> getTweetById(Long id);*/
    @Query(
            value = "select * from tweets where tweet_type != 'REPLY' order by id desc",
            nativeQuery = true
    )
    Page<Tweet> findAllTweet(Pageable pageable);
    @Query(
            value = "select * from tweets where user_id = ? and tweet_type != 'REPLY' order by id desc",
            nativeQuery = true
    )
    Page<Tweet> findAllByUser_id(Long user_id, Pageable pageable);

    @Query(
            value = "select * from tweets where parent_tweet_id = ? and tweet_type = 'REPLY' order by id desc",
            nativeQuery = true
    )
    Page<Tweet> findAllReplyByTweet_id(Long user_id, Pageable pageable);

    @Query(
            value = "select * from tweets  where id > ? and  tweet_type = ?",
            nativeQuery = true
    )
    List<Tweet> findAllByParentTweetId(Long userID, Long parentTweetId, String tweetType);
    Tweet getTweetById(Long id);
    @Query(
            value = "select count(*) from tweets  where parent_tweet_id = ? and tweet_type = ?",
            nativeQuery = true
    )
    Integer countTweets(Long tweetId, String  tweetType);

    @Query(
            value = "select * from tweets  where parent_tweet_id = ? and user_id = ? and tweet_type = 'REPLY' order by id asc",
            nativeQuery = true
    )
    List<Tweet> getSingleTweet(Long parentTweetId, Long  userId);


    @Query(
            value = "select * from tweets  where tweet_type = 'TWEET'",
            nativeQuery = true
    )
    List<Tweet> getAllTweet();

}
