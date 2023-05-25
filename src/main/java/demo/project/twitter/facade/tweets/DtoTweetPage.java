package demo.project.twitter.facade.tweets;

import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
public class DtoTweetPage {

    private Long totalElements;
    private Integer totalPage;
    private List<DtoTweet> listDto;


}
