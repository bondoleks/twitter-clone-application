package demo.project.twitter.facade.tweets;



import demo.project.twitter.model.User;
import demo.project.twitter.model.enums.TweetType;
import demo.project.twitter.model.tweet.Tweet;
import demo.project.twitter.model.tweet.TweetWord;
import demo.project.twitter.repository.TweetRepository;
import demo.project.twitter.repository.TweetWordRepository;
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
public class ServiceTweetWord implements FunctionTweetWord {
    private final TweetWordRepository repo;


    @Override
    public TweetWord saveOne(TweetWord tweetWord) {
        return repo.save(tweetWord);
    }

    @Override
    public Optional<TweetWord> getById(Long id) {
        return repo.findById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

    @Override
    public List<TweetWord> getAll() {
        return repo.findAll();
    }

    public boolean existWord(String word){
        return repo.existsTweetWordByWord(word);
    }
}
