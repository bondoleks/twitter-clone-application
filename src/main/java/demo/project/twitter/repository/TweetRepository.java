package demo.project.twitter.repository;


import demo.project.twitter.model.tweet.Tweet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;


@Repository
public interface TweetRepository extends JpaRepository<Tweet, Long>, PagingAndSortingRepository<Tweet, Long> {
    /*@Query(
            value = "select * from tweets tw where tw.user_id = ? order by tw.created_at desc",
            nativeQuery = true
    )
    List<Tweet> getTweetById(Long id);*/
    @Query(
            value = "select * from tweets  where tweet_type = 'TWEET' or (tweet_type = 'QUOTE_TWEET' and tweet_body is not null) order by id desc",
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
            value = "select * from tweets  where tweet_type = 'TWEET' or (tweet_type = 'QUOTE_TWEET' and tweet_body is not null)",
            nativeQuery = true
    )
    List<Tweet> getAllTweet();

    @Query(
            value ="select tw. * from tweets as tw join tweet_actions as twa On tw.id = twa.tweet_id where twa.action_type  = 'BOOKMARK' and twa.user_id = ? order by twa.id desc",
            nativeQuery = true
    )
    Page<Tweet> findAllBookmark(Long profileId, Pageable pageable);
    @Query(
            value = "delete from tweets where tweet_type = 'QUOTE_TWEET' and tweet_body is null and parent_tweet_id = ?\n" +
                    "                      and user_id = ? returning *",
            nativeQuery = true
    )
    List<Tweet> selectRetweet(Long id, Long profileId);


    @Query(
            value = "select tweets. * from tweetword as tw1 inner join tweet_word as tw2 on tw1.id = tw2.word_id\n" +
                    "    inner join tweets on tw2.tweet_id = tweets.id where word = ? limit 10",
            nativeQuery = true)
    List<Tweet> getTweetByWord(String s);






    @Query(
            value = "select tweets. * from tweetword as tw1 inner join tweet_word as tw2 on tw1.id = tw2.word_id\n" +
                    "    inner join tweets on tw2.tweet_id = tweets.id where word = :wordSearch and tw2.tweet_id in :arr limit 10",
            nativeQuery = true)
    List<Tweet> getTweetByWordAndArrayId(@Param("wordSearch") String s, @Param("arr") Long[] arrId);
}
