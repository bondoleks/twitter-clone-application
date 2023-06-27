package demo.project.twitter.facade.chats;


import demo.project.twitter.config.Mapper;
import demo.project.twitter.dto.UserDto;
import demo.project.twitter.dto.UserSearchDto;
import demo.project.twitter.facade.UserFacade;
import demo.project.twitter.facade.messages.DtoMessage;
import demo.project.twitter.model.chat.Chat;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static java.lang.Long.parseLong;

@RequiredArgsConstructor
@RestController
@Log4j2
@RequestMapping("api/v1/chats")
@CrossOrigin(origins = {"https://twitter-clone-application.vercel.app", "http://localhost:5173"})
public class ControllerChatNew {

    private final FacadeChatNew facade;
    private final FacadeGeneralChat facadeGeneralChat;
    private final Mapper mapper;
    private final UserFacade facadeUser;
    private final ServiceChatNew serviceChatNew;


    @GetMapping("chat/{chatId}")
    public DtoChat getChatByUser(@PathVariable("chatId") Long chatId, @RequestParam("profileId") Long profileId) {

        Chat chat= facade.getChatById(chatId);
        return facade.transChatToDtoChat(chat, 0);
    }
    @GetMapping("usersearch")
    public List<UserSearchDto> searchUserForChat(@RequestParam("search_request") String searchRequest, @RequestParam("profileId") Long profileId){
        return facadeUser.userSearch(searchRequest);
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
        facadeGeneralChat.addChatToChatList(chat_id, profileID);
        /*Chat chat = serviceChatNew.getById(21L).get();
        if (chat.getListListChat() == null) log.info(":::::: ok");
        else {
            log.info("::::::: not null");
            log.info("        = " + chat.getListListChat().size());
        }
        List<ListChat> list = new ArrayList<>();
        chat.setListListChat(list);
        serviceChatNew.saveOne(chat);*/

        return "ok";
    }

    @GetMapping("chat/list")
    public List<DtoChat> getListChat(@RequestParam("profileId") Long userId) {
        Long profileId = userId;

        return facadeGeneralChat.getListChat(profileId).stream().
                map(c -> facade.transChatToDtoChat(c, 1)).
                collect(Collectors.toList());

    }






}
