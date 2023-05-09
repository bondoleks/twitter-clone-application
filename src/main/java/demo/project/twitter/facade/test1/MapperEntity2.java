package demo.project.twitter.facade.test1;

import demo.project.twitter.facade.service.MapperAbstract;
import demo.project.twitter.facade.test1.model.DtoModel2;
import demo.project.twitter.facade.test1.model.Model2;
import lombok.Data;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Data
@Service
@Component("M2")
public class MapperEntity2 extends MapperAbstract {
    private  final Model2 entity = new Model2();
    private  final DtoModel2 dto = new DtoModel2();
    @Override
    public String ent() {
        return entity.getClass().getName();
    }
    @Override
    public String dto() {
        return dto.getClass().getName();
    }
}
