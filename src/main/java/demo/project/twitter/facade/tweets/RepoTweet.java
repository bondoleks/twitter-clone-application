package demo.project.twitter.facade.tweets;


import demo.project.twitter.model.tweet.Tweet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepoTweet extends JpaRepository<Tweet, Long>, PagingAndSortingRepository<Tweet, Long> {
    /*@Query(
            value = "select * from tweets tw where tw.user_id = ? order by tw.created_at desc",
            nativeQuery = true
    )
    List<Tweet> getTweetById(Long id);*/
    Page<Tweet> findAll(Pageable pageable);
    Page<Tweet> findAllByUser_id(Long user_id, Pageable pageable);
    Tweet getSingleTweetById(Long id);
    @Query(
            value = "select count(*) from tweets  where parent_tweet_id = ? and tweet_type = ?",
            nativeQuery = true
    )
    Integer countTweets(Long tweetId, String  tweetType);

}
