package demo.project.twitter.facade.test1;



import demo.project.twitter.facade.controller.ControllerAbstractCrud;
import demo.project.twitter.facade.service.MapperAbstract;
import demo.project.twitter.facade.test1.model.Model2;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("test2")

public class ControllerModel2 extends ControllerAbstractCrud<Model2> {
    public ControllerModel2(FacadeCrud2 serviceFacade, @Qualifier("M2") MapperAbstract mg) {
        super(serviceFacade, mg);
    }
}

