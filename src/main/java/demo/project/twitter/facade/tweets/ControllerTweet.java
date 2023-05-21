package demo.project.twitter.facade.tweets;



import demo.project.twitter.model.tweet.Tweet;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController

@RequestMapping("tweets")
public class ControllerTweet {
    private final FacadeTweet facade;


/* Дальнейший код приведен для примера.
        В данном классе создаются endpoint для обработки запросов фронта.
        Весь основной процесс обработки происходит в классе Facade
        */

// ************************************** EXAMPLE START **************************************

    @GetMapping("get/{id}")
    public ResponseEntity<?> getEntity(@PathVariable("id") Long id) {
        return facade.getEntity(id);
    }

    @PostMapping("save")
    public DtoTweet saveEntity(@RequestBody DtoTweet dto) {
        return facade.saveEntity(dto);
    }

    public List<Tweet> getAll(){
        return facade.getAll();
    }

    //    ************************************** EXAMPLE END **************************************
}
