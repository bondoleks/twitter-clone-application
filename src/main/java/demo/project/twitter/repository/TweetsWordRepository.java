package demo.project.twitter.repository;

import demo.project.twitter.model.TweetsWord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TweetsWordRepository extends JpaRepository<TweetsWord, Long> {
}
