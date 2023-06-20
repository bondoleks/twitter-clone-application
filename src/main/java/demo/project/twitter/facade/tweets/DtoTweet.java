package demo.project.twitter.facade.tweets;


import demo.project.twitter.model.enums.BranchType;
import demo.project.twitter.model.enums.TweetType;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@Data
public class DtoTweet {

    private Long id;
    private BranchType branch;
    private String tweetBody;
    private Date createdDate;
    private Long parent_Tweet;

    private TweetType tweetType;
    private Integer countRetweet;
    private Integer countReply;
    private Integer countLike;
    private Integer markerRetweet;
    private Integer markerLike;
    private Integer markerBookmark;

    private Long user_id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String av_imagerUrl;

    private List<String> tweet_imageUrl;

    private DtoTweet branchDto;

    private DtoTweet parentDto;


}
