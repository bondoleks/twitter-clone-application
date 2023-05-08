package demo.project.twitter.facade.test1.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DtoModel1 {


    private Integer id;
    private String name;
    private String description;

    @Override
    public String toString() {
        return "DtoModel1{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
