package demo.project.twitter.facade.test1;

import demo.project.twitter.facade.service.FacadeAbstractCrud;
import demo.project.twitter.facade.service.Mapper;
import demo.project.twitter.facade.test1.model.Model1;
import org.springframework.stereotype.Service;

@Service
public class FacadeCrud1 extends FacadeAbstractCrud<Model1> {

    public FacadeCrud1(Mapper mm, ServiceCrudModel1 service) {
        super(mm, service);
    }
}
