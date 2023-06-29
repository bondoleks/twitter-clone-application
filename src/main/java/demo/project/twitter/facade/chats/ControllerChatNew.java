package demo.project.twitter.facade.chats;


import demo.project.twitter.config.Mapper;
import demo.project.twitter.dto.UserDto;
import demo.project.twitter.dto.UserSearchDto;
import demo.project.twitter.facade.UserFacade;
import demo.project.twitter.facade.messages.DtoMessage;
import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.chat.GeneralChat;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
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


    @DeleteMapping("del/{chat_id}")
    public void delChatFromGeneralChat(@PathVariable("chat_id") Long chatId,
                                       @RequestParam("profileId") Long userId){
        Long profileId = userId;
        facade.delChat(chatId, profileId);
    }


   /* @GetMapping("chat/{userReceiver}")
    public DtoChat getChatByUser(@PathVariable("userReceiver") Long userRec, @RequestParam("profileId") Long userId) {
        Long profileId = userId;

        Chat chat= facade.getChatByUser(profileId, userRec);
        return facade.transChatToDtoChat(chat, 0);
    }*/

    @GetMapping("chat/{userReceiver}")
    public DtoChat getChatByUser(@PathVariable("userReceiver") Long userRec,
                                 Principal principal) {
//        Long profileId = userId;

        Long profileId = facadeUser.getUserByName(principal.getName()).getId();

        Chat chat= facade.getChatByUser(profileId, userRec);
        return facade.transChatToDtoChat(chat, 0);

    }




    @GetMapping("usersearch")
    public List<UserSearchDto> searchUserForChat(@RequestParam("search_request") String searchRequest, @RequestParam("profileId") Long profileId){
        return facadeUser.userSearch(searchRequest);
    }

    /*@PostMapping("chat/message/save")
    public String saveMessage(@RequestBody DtoMessage dtoM){
        Long profileID = dtoM.getUser_from();
        facade.saveMessage(profileID, dtoM);
        return "ok";
    }*/

    @PostMapping("chat/message/save")
    public String saveMessage(@RequestBody DtoMessage dtoM, Principal principal){
       /* Long profileId = dtoM.getUser_from();*/

        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        facade.saveMessage(profileId, dtoM);
        return "ok";
    }

  /*  @GetMapping("chat/messages/{chatId}")
    public DtoChatMessage getChatAllMessages(@PathVariable("chatId") Long chat_id,
                                     @RequestParam("sizePage") Integer sizePage,
                                     @RequestParam("numberPage") Integer numberPage,
                                     @RequestParam("profileId") Long userId) {
        Long profileId = userId;
        return facade.getChatAllMessages(chat_id, profileId, sizePage, numberPage);

    }*/

    @GetMapping("chat/messages/{chatId}")
    public DtoChatMessage getChatAllMessages(@PathVariable("chatId") Long chat_id,
                                             @RequestParam("sizePage") Integer sizePage,
                                             @RequestParam("numberPage") Integer numberPage,
                                             Principal principal) {
     /*   Long profileId = userId;*/
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        return facade.getChatAllMessages(chat_id, profileId, sizePage, numberPage);

    }

    @PostMapping("add/{chatId}")
    public List<DtoChat> addChatToChatList(@PathVariable("chatId") Long chat_id,
                                           Principal principal){
//        Long profileId = userId;
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        facadeGeneralChat.newGenegarChat(chat_id, profileId);

        return facadeGeneralChat.getListChat(profileId).stream().
                map(c -> facade.transChatToDtoChat(c, 1)).
                collect(Collectors.toList());




    }

    /*@PostMapping("add/{chatId}")
    public List<DtoChat> addChatToChatList(@PathVariable("chatId") Long chat_id, @RequestParam("profileId") Long userId){
        Long profileID = userId;
        GeneralChat generalChat = facadeGeneralChat.newGenegarChat(chat_id, profileID);
        log.info("::::::::: generalChat = " + generalChat.getId());
        return facadeGeneralChat.getListChat(profileID).stream().
                map(c -> facade.transChatToDtoChat(c, 1)).
                collect(Collectors.toList());



    }*/

    /*@GetMapping("chat/list")
    public List<DtoChat> getListChat(@RequestParam("profileId") Long userId) {
        Long profileId = userId;

        return facadeGeneralChat.getListChat(profileId).stream().
                map(c -> facade.transChatToDtoChat(c, 1)).
                collect(Collectors.toList());

    }*/

    @GetMapping("chat/list")
    public List<DtoChat> getListChat(Principal principal) {
     /*   Long profileId = userId;*/
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();

        return facadeGeneralChat.getListChat(profileId).stream().
                map(c -> facade.transChatToDtoChat(c, 1)).
                collect(Collectors.toList());



    }






}
