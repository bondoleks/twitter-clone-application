package demo.project.twitter.facade.tweets;



import demo.project.twitter.model.tweet.Tweet;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
@Log4j2
public class ServiceTweet implements FunctionTweet {
    private final RepoTweet repo;



    @Override
    public Tweet saveOne(Tweet tweet) {
        log.info(":::::::::" + tweet);
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

    public Page<Tweet> getAllTweetById(Long id, Integer sizePage, Integer numberPage) {
        Pageable pageable = PageRequest.of(numberPage, sizePage);
        return id == 0 ?
                repo.findAllTweet(pageable) :
                repo.findAllByUser_id(id, pageable);
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




}
