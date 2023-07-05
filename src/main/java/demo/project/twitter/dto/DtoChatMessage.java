package demo.project.twitter.dto;

import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
public class DtoChatMessage {

    private Long totalElements;
    private Integer totalPage;
    private List<DtoMessage> listDto;
}
