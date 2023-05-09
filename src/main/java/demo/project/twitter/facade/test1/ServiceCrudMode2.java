package demo.project.twitter.facade.test1;

import demo.project.twitter.facade.dao.EntityCrudRepo;
import demo.project.twitter.facade.service.ServiceAbstractCrud;
import demo.project.twitter.facade.test1.model.Model2;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service

public class ServiceCrudMode2 extends ServiceAbstractCrud<Model2> {
    public ServiceCrudMode2(@Qualifier("Model2") EntityCrudRepo repo) {
        super(repo);
    }
}
