package demo.project.twitter.facade.test1;

import demo.project.twitter.facade.dao.EntityCrudRepo;
import demo.project.twitter.facade.test1.model.Model1;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Component("Model1")
public interface Model1Repo extends EntityCrudRepo<Model1> { }
