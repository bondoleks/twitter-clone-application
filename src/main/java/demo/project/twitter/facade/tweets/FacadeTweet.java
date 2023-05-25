package demo.project.twitter.facade.tweets;

import demo.project.twitter.facade.users.ServiceUser;
import demo.project.twitter.model.User;

import demo.project.twitter.model.enums.TweetType;
import demo.project.twitter.model.tweet.Tweet;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
@Log4j2
public  class FacadeTweet {

    private final ServiceTweet service;
    private final ServiceUser serviceUser;




    private ModelMapper mapper() {
        ModelMapper mm = new ModelMapper();
        mm.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STRICT)
                .setFieldMatchingEnabled(true)
                .setSkipNullEnabled(true)
                .setFieldAccessLevel(Configuration.AccessLevel.PRIVATE);
        return mm;
    }

    private Tweet transDtoToEntity(DtoTweet dto){
        Tweet entity = new Tweet();
        mapper().map(dto, entity);
        User user = serviceUser.getById(dto.getUser_id()).get();
        Long tweetId = dto.getParentTweet();
        if (tweetId != 0) {
            Tweet parentTweet = service.getTweetById(tweetId);
            entity.setParentTweet(parentTweet);
        }
        entity.setUser(user);
        entity.setCreatedDate(new Date());
        return entity;
    }


    private DtoTweet transEntityToDto(Tweet entity){
        DtoTweet dto = new DtoTweet();
        mapper().map(entity.getUser(), dto);
        mapper().map(entity, dto);
        dto.setUser_id(entity.getUser().getId());
        return dto;
    }
    public ResponseEntity<?> getEntity (Long id){
        DtoTweet dto = new DtoTweet();
        if (service.existsById(id)) {
            Tweet entity = service.getById(id).get();
            dto = mapper().map(entity,dto.getClass());
            return ResponseEntity.accepted().body(dto);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body("Object with cod " + id + " not found");
        }
    }

    public void saveEntity (DtoTweet requestBody){
        Tweet entity = transDtoToEntity(requestBody);
        Tweet entity2 =service.saveOne(entity);

    }

    public Page<Tweet> getAll(Integer sizePage, Integer numberPage){
        return service.findAll(sizePage, numberPage);
    }


    public DtoTweetPage getAllTweetById(Long id, Integer sizePage, Integer numberPage) {
        Page<Tweet> pTweet= service.getAllTweetById(id, sizePage, numberPage);
        List<DtoTweet> list = pTweet.stream().
                map(x -> transEntityToDto(x)).
                        collect(Collectors.toList());
        DtoTweetPage dtp = new DtoTweetPage();
        dtp.setListDto(list);
        dtp.setTotalElements(pTweet.getTotalElements());
        dtp.setTotalPage(pTweet.getTotalPages());
        return dtp;
    }


}






