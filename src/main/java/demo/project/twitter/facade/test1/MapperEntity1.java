package demo.project.twitter.facade.test1;

import demo.project.twitter.facade.service.MapperAbstract;
import demo.project.twitter.facade.test1.model.DtoModel1;
import demo.project.twitter.facade.test1.model.Model1;
import lombok.Data;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Data
@Service
@Component("M1")
public class MapperEntity1 extends MapperAbstract {
    private  final Model1 entity = new Model1();
    private  final DtoModel1 dto = new DtoModel1();
    @Override
    public String ent() {
        return entity.getClass().getName();
    }
    @Override
    public String dto() {
        return dto.getClass().getName();
    }
}
