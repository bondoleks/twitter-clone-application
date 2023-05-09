package demo.project.twitter.facade.test1;

import demo.project.twitter.facade.service.FacadeAbstractCrud;
import demo.project.twitter.facade.service.Mapper;
import demo.project.twitter.facade.test1.model.Model2;
import org.springframework.stereotype.Service;

@Service
public class FacadeCrud2 extends FacadeAbstractCrud<Model2> {

    public FacadeCrud2(Mapper mm, ServiceCrudMode2 service) {
        super(mm, service);
    }
}
