package demo.project.twitter.facade.tweets;



import demo.project.twitter.model.User;
import demo.project.twitter.model.enums.TweetType;
import demo.project.twitter.model.tweet.Tweet;
import demo.project.twitter.repository.TweetRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
@Log4j2
public class ServiceTweet implements FunctionTweet {
    private final TweetRepository repo;



    @Override
    public Tweet saveOne(Tweet tweet) {
        return repo.save(tweet);
    }
    @Override
    public Optional<Tweet> getById(Long id) {
        return repo.findById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

    @Override
    public List<Tweet> getAll() {
        return repo.findAll();
    }


    public Page<Tweet> findAll(Integer sizePage, Integer numberPage) {
        Pageable pageable = PageRequest.of(numberPage, sizePage, Sort.by("id").ascending());
        return repo.findAll(pageable);
    }

    public Page<Tweet> getAllTweetById(Long id, Integer sizePage, Integer numberPage, int key, Long profileId) {
        Pageable pageable = PageRequest.of(numberPage, sizePage);
        Page<Tweet> pageTweet = null;

        switch (key){
            case 0: pageTweet = repo.findAllByUser_id(id, pageable); break;
            case 1: pageTweet = repo.findAllReplyByTweet_id(id, pageable); break;
            case 2: pageTweet = repo.findAllTweet(pageable); break;
            case 3: pageTweet = repo.findAllBookmark(profileId, pageable); break;
        }
        return pageTweet;

    }

    public Tweet getTweetById(Long id){
        return repo.getTweetById(id);
    }

    public Integer countTweets(Long tweetId, String tweetType){
        return repo.countTweets(tweetId, tweetType);
    };

    public List<Tweet> getAllReplay(Long parentTweetId){
        return repo.findAllByParentTweetId(repo.getTweetById(parentTweetId).getUser().getId(), parentTweetId, "REPLY");
    }

    public List<Tweet> getSingleBranch(Long parentTweetId){
        Long userId = repo.getTweetById(parentTweetId).getUser().getId();
        return repo.getSingleTweet(parentTweetId, userId);

    }


    public List<Tweet> findAllTweet(){
        return repo.getAllTweet();
    }


    public void createRetweet(Long id, User user) {
        Tweet tweet = new Tweet(TweetType.QUOTE_TWEET, null, user, repo.getTweetById(id));
        tweet.setCreatedDate(new Date());
        repo.save(tweet);
    }


    public void deleteRetweet(Long id, Long profileId) {
        List<Tweet> list = repo.selectRetweet(id, profileId);
    }


    public void deleteRetweet(Long id, Long profileId) {
        List<Tweet> list = repo.selectRetweet(id, profileId);
    }

    public List<Tweet> getTweetByWord(String s) {
        return repo.getTweetByWord(s);

    }
}
