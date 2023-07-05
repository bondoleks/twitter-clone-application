package demo.project.twitter.dto;

import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.Date;


@Service
@Data
public class DtoMessage {
    private Long user_author;
    private Long chat_id;
    private String textMessage;

    private Date dateMessage;
    private Integer typeMessage;


}
