package demo.project.twitter.facade.chats;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController

@RequestMapping("/api/v1/chat")
@CrossOrigin(origins = {"https://twitter-clone-application.vercel.app",
        "http://localhost:5173",
        "https://twitter-clone-application-e8cz8renm-bondoleks.vercel.app"})
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

    @PostMapping("addUser/{chatId}/{userId}")
    public ResponseEntity<?> addUserToChat(@PathVariable("chatId") Long chatId,
                                           @PathVariable("userId") Long userId) {
        return facade.addUserToChat(chatId, userId);
    }

    @PostMapping("deleteUser/{chatId}/{userId}")
    public ResponseEntity<?> deleteUserToChat(@PathVariable("chatId") Long chatId,
                                              @PathVariable("userId") Long userId) {
        return facade.deleteUserFromChat(chatId, userId);
    }


    @PostMapping("delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        return facade.deleteEntity(id);
    }

    @GetMapping("getAll/{userId}")
    public ResponseEntity<List<DtoChatResp>> getAll(@PathVariable("userId") Long userId){
        return facade.getAll(userId);
    }
}
