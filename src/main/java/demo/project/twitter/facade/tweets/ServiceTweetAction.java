package demo.project.twitter.facade.tweets;



import demo.project.twitter.model.TweetAction;
import demo.project.twitter.model.tweet.Tweet;
import demo.project.twitter.repository.TweetActionRepository;
import demo.project.twitter.repository.TweetRepository;
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
public class ServiceTweetAction {
    private final TweetActionRepository repo;

    public Integer countLike(Long tweetId, String actionType) {
        return repo.countLike(tweetId, "LIKE");
    }

    public Integer marker(Long tweeId, Long profileId, String actionType){
        return repo.marker(tweeId, profileId, actionType);
    }

    public void saveTweetAction(TweetAction tweetAction){
        tweetAction.setCreatedDate(new Date());
        repo.save(tweetAction);
    }

    public Optional<TweetAction> getTweetAction(Long tweetId, Long profileId, String actionType){
        return repo.getTweetAction(tweetId, profileId, actionType);
    }

    public void delTweetAction(TweetAction tweetAction){
        repo.delete(tweetAction);
    }


   /* @Override
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
        return null;
    }


    public Page<Tweet> findAll(Integer sizePage, Integer numberPage) {
        Pageable pageable = PageRequest.of(numberPage, sizePage, Sort.by("id").ascending());
        return repo.findAll(pageable);
    }

    public Page<Tweet> getAllTweetById(Long id, Integer sizePage, Integer numberPage, int key) {
        Pageable pageable = PageRequest.of(numberPage, sizePage);
       *//* private final int ALL_TWEET_USERID = 0;
        private final int ALL_REPLY_TWEETID = 1;
        private final int ALL_TWEET = 2;*//*

        Page<Tweet> pageTweet = null;


        switch (key){
            case 0: pageTweet = repo.findAllByUser_id(id, pageable); break;
            case 1: pageTweet = repo.findAllReplyByTweet_id(id, pageable); break;
            case 2: pageTweet = repo.findAllTweet(pageable); break;
        }
        return pageTweet;

//        return id == 0 ?
//                repo.findAllTweet(pageable) :
//                repo.findAllByUser_id(id, pageable);
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




*/
}
