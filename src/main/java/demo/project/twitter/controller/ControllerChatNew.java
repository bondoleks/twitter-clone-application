package demo.project.twitter.controller;


import demo.project.twitter.dto.DtoChat;
import demo.project.twitter.dto.DtoChatMessage;
import demo.project.twitter.dto.UserSearchDto;
import demo.project.twitter.facade.UserFacade;
import demo.project.twitter.dto.DtoMessage;
import demo.project.twitter.facade.chats.FacadeChatNew;
import demo.project.twitter.facade.chats.FacadeGeneralChat;
import demo.project.twitter.model.User;
import demo.project.twitter.model.chat.ChatNew;
import demo.project.twitter.model.chat.Message;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageType;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

import static java.lang.Long.parseLong;

@RequiredArgsConstructor
@RestController
@Log4j2
@RequestMapping("api/v1/chats")
@CrossOrigin(origins = {"https://twitter-clone-application.vercel.app",
        "http://localhost:5173",
        "https://twitter-clone-application-e8cz8renm-bondoleks.vercel.app"})
public class ControllerChatNew {

    private final FacadeChatNew facade;
    private final FacadeGeneralChat facadeGeneralChat;
    private final UserFacade facadeUser;
    private final SimpMessagingTemplate simpMessagingTemplate;


    @DeleteMapping("del/{chat_id}")
    public void delChatFromGeneralChat(@PathVariable("chat_id") Long chatId,
                                       Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        facade.delChat(chatId, profileId);
    }

    @GetMapping("chat/{userReceiver}")
    public DtoChat getChatByUser(@PathVariable("userReceiver") Long userRec,
                                 Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        ChatNew chat= facade.getChatByUser(profileId, userRec);
        return facade.transChatToDtoChat(chat, 0);
    }

    @GetMapping("usersearch")
    public List<UserSearchDto> searchUserForChat(@RequestParam("search_request") String searchRequest, @RequestParam("profileId") Long profileId) {
        return facadeUser.userSearch(searchRequest);
    }

    @PostMapping("chat/message/save")
    public String saveMessage(@RequestBody DtoMessage dtoM, Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        Message savedMessage = facade.saveMessage(profileId, dtoM);
        User userReceiver = savedMessage.getChat().getUsers().get(1);
        simpMessagingTemplate.convertAndSendToUser(userReceiver.getUsername(), "/chat/message", dtoM);
        return "ok";
    }

    @SendTo("/chat/message")
    public DtoMessage broadcastMessage(@Payload DtoMessage dtoMessage) {
        return dtoMessage;
    }

    @GetMapping("chat/messages/{chatId}")
    public DtoChatMessage getChatAllMessages(@PathVariable("chatId") Long chat_id,
                                             @RequestParam("sizePage") Integer sizePage,
                                             @RequestParam("numberPage") Integer numberPage,
                                             Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        return facade.getChatAllMessages(chat_id, profileId, sizePage, numberPage);
    }

    @PostMapping("add/{chatId}")
    public List<DtoChat> addChatToChatList1(@PathVariable("chatId") Long chat_id,
                                           Principal principal){
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        facadeGeneralChat.newGenegarChat(chat_id, profileId);
        return facadeGeneralChat.getListChat(profileId).stream().
                map(c -> facade.transChatToDtoChat(c, 1)).
                collect(Collectors.toList());
    }

    @GetMapping("chat/list")
    public List<DtoChat> getListChat(Principal principal) {
        Long profileId = facadeUser.getUserByName(principal.getName()).getId();
        return facadeGeneralChat.getListChat(profileId).stream().
                map(c -> facade.transChatToDtoChat(c, 1)).
                collect(Collectors.toList());
    }

}
