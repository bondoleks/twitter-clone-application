package demo.project.twitter.facade.test1;

import demo.project.twitter.facade.dao.EntityCrudRepo;
import demo.project.twitter.facade.test1.model.Model2;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Component("Model2")
public interface Model2Repo extends EntityCrudRepo<Model2> { }
