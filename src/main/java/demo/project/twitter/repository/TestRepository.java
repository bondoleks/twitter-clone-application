package demo.project.twitter.repository;

import demo.project.twitter.models.TestDb;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends CrudRepository<TestDb, Long> {
}
