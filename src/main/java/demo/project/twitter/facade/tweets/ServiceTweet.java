package demo.project.twitter.facade.tweets;


import demo.project.twitter.model.User;
import demo.project.twitter.models.tweet.Tweet;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceTweet implements FunctionTweet {
    private final RepoTweet repo;

   /* Дальнейший код приведен для примера.
        В данном классе создаются методы сервиса, заявленные в интерфейсе Function,
        в том числе, и с подключением интерфейса Repo (наследник CrudRepository)
        */

// ************************************** EXAMPLE START **************************************

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

//    ************************************** EXAMPLE END **************************************

}
