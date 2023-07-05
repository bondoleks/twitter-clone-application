package demo.project.twitter.facade.tweets;



import demo.project.twitter.model.User;
import demo.project.twitter.model.enums.TweetType;
import demo.project.twitter.model.tweet.Tweet;
import demo.project.twitter.model.tweet.ViewUserId;
import demo.project.twitter.repository.TweetRepository;
import demo.project.twitter.repository.ViewUserIdRepository;
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
public class ServiceViewUser implements FunctionViewUser {
    private final ViewUserIdRepository repo;



    @Override
    public ViewUserId saveOne(ViewUserId viewUserId) {
        return repo.save(viewUserId);
    }
    @Override
    public Optional<ViewUserId> getById(Long id) {
        return repo.findById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

    @Override
    public List<ViewUserId> getAll() {
        return repo.findAll();
    }


    public boolean existsByUserId(Long profileId) {
        return repo.existsByUserId(profileId);
    }

    public ViewUserId getviewUserIdByUserId(Long profileId) {
        return repo.findByUserId(profileId);
    }
}
