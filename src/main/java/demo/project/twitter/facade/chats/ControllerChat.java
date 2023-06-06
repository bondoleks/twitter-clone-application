package demo.project.twitter.facade.chats;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController

@RequestMapping("chat")
public class ControllerChat {
    private final FacadeChat facade;


    @GetMapping("get/{userToId}")
    public ResponseEntity<?> getEntity(@PathVariable("userToId") Long id) {
        return facade.getEntity(id);
    }
    @GetMapping("getChat")
    public ResponseEntity<?> getChatBetweenUsers(@RequestBody() DtoChatReq dtoReq) {
        return facade.getChatBetweenUsers(dtoReq);
    }

//    @PostMapping("save")
//    public DtoChatReq saveEntity(@RequestBody DtoChatReq dto) {
//        return facade.saveEntity(dto);
//    }

}
