package demo.project.twitter.facade.tweets;

import demo.project.twitter.model.User;
import demo.project.twitter.models.tweet.Tweet;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface FunctionTweet {

/* Дальнейший код приведен для примера.
        В данном интерфейсе декларируются методы для их реализации в Service.
        Их количество, семантика и логическая нагрузка определяется индивидуально для каждой entity из списка models
        */

    // ************************************** EXAMPLE START **************************************
    Tweet saveOne(Tweet tweet);
    Optional<Tweet> getById(Long id);
    boolean existsById(Long id);

    List<Tweet> getAll();

//    ************************************** EXAMPLE END **************************************
}
