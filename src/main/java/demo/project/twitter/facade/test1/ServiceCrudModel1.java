package demo.project.twitter.facade.test1;

import demo.project.twitter.facade.dao.EntityCrudRepo;
import demo.project.twitter.facade.service.ServiceAbstractCrud;
import demo.project.twitter.facade.test1.model.Model1;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service


public class ServiceCrudModel1 extends ServiceAbstractCrud<Model1> {
    public ServiceCrudModel1(@Qualifier("Model1") EntityCrudRepo repo) {
        super(repo);
    }
}
