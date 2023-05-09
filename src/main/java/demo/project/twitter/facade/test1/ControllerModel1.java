package demo.project.twitter.facade.test1;



import demo.project.twitter.facade.controller.ControllerAbstractCrud;
import demo.project.twitter.facade.service.MapperAbstract;
import demo.project.twitter.facade.test1.model.Model1;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("test1")

public class ControllerModel1 extends ControllerAbstractCrud<Model1> {

    public ControllerModel1(FacadeCrud1 serviceFacade, @Qualifier("M1") MapperAbstract mg) {
        super(serviceFacade, mg);
    }
}

