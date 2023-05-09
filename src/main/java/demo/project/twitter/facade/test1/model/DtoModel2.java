package demo.project.twitter.facade.test1.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DtoModel2 {


    private Integer id;
    private String name;

    @Override
    public String toString() {
        return "DtoMode2{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
