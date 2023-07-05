package demo.project.twitter.repository;


import demo.project.twitter.model.tweet.Tweet;
import demo.project.twitter.model.tweet.ViewUserId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ViewUserIdRepository extends JpaRepository<ViewUserId, Long> {


    boolean existsByUserId(Long profileId);

    ViewUserId findByUserId(Long profileId);
}






