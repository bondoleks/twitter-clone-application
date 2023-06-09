package demo.project.twitter.facade.chats;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController

@RequestMapping("chat")
public class ControllerChat {
    private final FacadeChat facade;

    @GetMapping("getChat/{id}")
    public ResponseEntity<?> getChatBetweenUsers(@RequestBody() DtoChatReq dtoReq,
                                                 @PathVariable("id") Long chatId) {
        return facade.getChat(dtoReq, chatId);
    }

    @PostMapping("save")
    public ResponseEntity<?> saveEntity(@RequestBody DtoChatReq dto) {
        return facade.saveEntity(dto);
    }
    
}
