package demo.project.twitter.facade.chats;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController

@RequestMapping("chat")
public class ControllerChat {
    private final FacadeChat facade;


    //    @GetMapping("get/{userToId}")
//    public ResponseEntity<?> getEntity(@PathVariable("userToId") Long id) {
//        return facade.getEntity(id);
//    }
    @GetMapping("getChat/{id}")
    public ResponseEntity<?> getChatBetweenUsers(@RequestBody() DtoChatReq dtoReq,
                                                 @PathVariable("id") Long chatId) {
        return facade.getChat(dtoReq, chatId);
    }

    @PostMapping("save")
    public ResponseEntity<?> saveEntity(@RequestBody DtoChatReq dto) {
        return facade.saveEntity(dto);
    }

//    @PostMapping("addUser/{chatId}/{userId}")
//    public ResponseEntity<?> addUserToChat(@RequestBody DtoChatReq dto,
//                                           @PathVariable("chatId") Long chatId,
//                                           @PathVariable("userId") Long userId) {
//        return facade.addUserToChat(dto, chatId, userId);
//    }
//
//    @PostMapping("deleteUser/{chatId}/{userId}")
//    public ResponseEntity<?> deleteUserToChat(@RequestBody DtoChatReq dto,
//                                              @PathVariable("chatId") Long chatId,
//                                              @PathVariable("userId") Long userId) {
//        return facade.deleteUserFromChat(dto, chatId, userId);
//    }
//
//    @PostMapping("delete/{id}")
//    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
//        return facade.deleteEntity(id);
//    }

}
