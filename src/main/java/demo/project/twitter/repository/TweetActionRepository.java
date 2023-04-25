package demo.project.twitter.repository;

import demo.project.twitter.models.TweetAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TweetActionRepository extends JpaRepository<TweetAction, Long> {
}
