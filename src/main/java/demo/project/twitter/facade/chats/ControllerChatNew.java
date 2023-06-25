package demo.project.twitter.facade.chats;


import demo.project.twitter.config.Mapper;
import demo.project.twitter.dto.UserDto;
import demo.project.twitter.dto.UserSearchDto;
import demo.project.twitter.facade.UserFacade;
import demo.project.twitter.facade.masseges.DtoMessage;
import demo.project.twitter.facade.tweets.DtoTweet;
import demo.project.twitter.facade.tweets.DtoTweetPage;
import demo.project.twitter.facade.tweets.FacadeTweet;
import demo.project.twitter.model.User;
import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.enums.ActionType;
import demo.project.twitter.model.enums.TweetType;
import demo.project.twitter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.List;

import static java.lang.Long.parseLong;

@RequiredArgsConstructor
@RestController
@Log4j2
@RequestMapping("api/v1/chats")
//@CrossOrigin("https://twitter-clone-application.vercel.app")
@CrossOrigin("http://localhost:5173")
public class ControllerChatNew {

    private final FacadeChatNew facade;
    private final Mapper mapper;
    private final UserFacade facadeUser;


    @GetMapping("chat")
    public UserDto getChatByUser(@RequestParam("user_init") Long user_init, @RequestParam("user_reciv") Long user_reciv) {
        Long profileId = user_init;
        Chat chat= facade.getChatByUser(profileId, user_reciv);
        return mapper.map().map(facadeUser.getUserById(user_reciv), UserDto.class);

    }

    @PostMapping("chat/meaasge/save")
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


}
