package demo.project.twitter.facade.chats;


import demo.project.twitter.config.Mapper;
import demo.project.twitter.dto.UserDto;
import demo.project.twitter.facade.UserFacade;
import demo.project.twitter.facade.messages.DtoMessage;
import demo.project.twitter.model.chat.Chat;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import static java.lang.Long.parseLong;

@RequiredArgsConstructor
@RestController
@Log4j2
@RequestMapping("api/v1/chats")
//@CrossOrigin("https://twitter-clone-application.vercel.app")
@CrossOrigin("http://localhost:5173")
public class ControllerChatNew {

    private final FacadeChatNew facade;
    private final FacadeListChat facadeListChat;
    private final Mapper mapper;
    private final UserFacade facadeUser;


    @GetMapping("chat")
    public UserDto getChatByUser(@RequestParam("user_init") Long user_init, @RequestParam("user_reciv") Long user_reciv) {
        Long profileId = user_init;
        Chat chat= facade.getChatByUser(profileId, user_reciv);
        return mapper.map().map(facadeUser.getUserById1(user_reciv), UserDto.class);

    }

    @PostMapping("chat/message/save")
    public String saveMessage(@RequestBody DtoMessage dtoM){
        Long profileID = dtoM.getUser_from();
        facade.saveMessage(profileID, dtoM);
        return "ok";
    }

    @GetMapping("chat/messages/{chatId}")
    public DtoChatMessage getChatAllMessages(@PathVariable("chatId") Long chat_id,
                                     @RequestParam("sizePage") Integer sizePage,
                                     @RequestParam("numberPage") Integer numberPage,
                                     @RequestParam("profileId") Long userId) {
        Long profileId = userId;
        return facade.getChatAllMessages(chat_id, profileId, sizePage, numberPage);

    }

    @PostMapping("add/{chatId}")
    public String addChatToChatList(@PathVariable("chatId") Long chat_id, @RequestParam("profileId") Long userId){
        Long profileID = userId;
        facadeListChat.addChatToChatList(chat_id, profileID);
        return "ok";
    }




}
