package demo.project.twitter.facade.tweets;


import demo.project.twitter.model.User;
import demo.project.twitter.models.tweet.Tweet;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceTweet implements FunctionTweet {
    private final RepoTweet repo;



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




    public Page<Tweet> findAll(Integer sizePage, Integer numberPage) {
        Pageable pageable = PageRequest.of(numberPage, sizePage);
        return repo.findAll(pageable);
    }

    public Page<Tweet> getAllTweetById(Long id, Integer sizePage, Integer numberPage) {
        Pageable pageable = PageRequest.of(numberPage, sizePage);
        return id == 0 ?
                repo.findAll(pageable) :
                repo.findAllByUser_id(id, pageable);

    }




}
