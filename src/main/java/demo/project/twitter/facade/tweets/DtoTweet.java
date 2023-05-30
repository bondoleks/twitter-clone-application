package demo.project.twitter.facade.tweets;


import demo.project.twitter.model.enums.TweetType;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@Data
public class DtoTweet {

    private Long id;
    private String tweetBody;
    private Date createdDate;
    private Long parent_Tweet;

    private TweetType tweetType;
    private Integer countRetweet;
    private Integer countReply;

    private Long user_id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String av_imagerUrl;

    private String tweet_imageUrl;

    private DtoTweet parentDto;

}
