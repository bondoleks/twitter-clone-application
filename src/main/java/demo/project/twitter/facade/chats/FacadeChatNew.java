package demo.project.twitter.facade.chats;

import demo.project.twitter.config.Mapper;
import demo.project.twitter.facade.messages.DtoMessage;
import demo.project.twitter.facade.messages.ServiceMessage;
import demo.project.twitter.model.User;
import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.chat.ChatNew;
import demo.project.twitter.model.chat.GeneralChat;
import demo.project.twitter.model.chat.Message;
import demo.project.twitter.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
@Log4j2
public class FacadeChatNew {

    private final ServiceChatNew1 service;
    private final UserService serviceUser;
    private final ServiceMessage serviceMessage;
    private final Mapper mapper;
    private final ServiceGeneralChat serviceGeneralChat;


    public ChatNew getChatByUser(Long userInit, Long userReciv) {
log.info("::::::::::: start1*****");
        List<ChatNew> listChatInit = service.getChatByUser(userInit, userReciv);
        List<ChatNew> listChatReciv = service.getChatByUser(userReciv, userInit);
        log.info(":::::: chatInit = " + listChatInit.size());
        log.info(":::::: chatRec = " + listChatReciv.size());
        log.info("::::::::::: start2");
        ChatNew newChat;
        if ((listChatInit.size() == 0) && (listChatReciv.size() == 0)){

            User userIn = serviceUser.findById(userInit);
            User userRe = serviceUser.findById(userReciv);
            log.info(":::::::: userIn = " + userIn.getId());
            log.info(":::::::: userRe = " + userRe.getId());
            log.info("::::::::::: start2.1");
            log.info(":::::: userChatIni = " + userIn.getUserChats().size());
            log.info("::::::::::: start2.2");
            log.info(":::::: userChatRes = " + userRe.getUserChats().size());
            log.info("::::::::::: start3");
            ChatNew chat = new ChatNew(userIn.getId(), userRe);

            newChat = service.saveOne(chat);


            log.info("::::::::::: start3.1");
            userRe.getUserChatsNew().add(newChat);
//            userIn.getUserChats().add(chat);
            log.info("!!!!!!!!!!!!!!!!!! userReChat = " + userRe.getUserChatsNew().size());
            log.info("::::::::::: start4");

            log.info("::::::::::: start5");
            User u1 = serviceUser.saveUser(userRe);
            log.info("::::::::::: start5.1");
            Long u1Id = u1.getId();
            log.info("::::::::::: start5.2");
            log.info("!!!!!!!!!!!!!!!!!! userReChat = " + u1.getUserChatsNew().size());
            log.info("!!!!!!!!!!!!!!!!!! userID     = " + u1.getId());
            log.info("::::::::::: start6");
            User u2 = serviceUser.findById(u1.getId());
                        log.info("!!!!!!!!!!!!!!!!!! userID     = " + u2.getId());
            log.info("!!!!!!!!!!!!!!!!!! userReChat = " + u2.getUserChatsNew().size());
            log.info("::::::::::: start6.1");
          /*  log.info("::::::::::: start4");
            log.info("::::::::::::::::::userRe.getUserChats().size() = "+ userRe.getUserChats().size());
            log.info(":::::::::: newChat = " + newChat.getId());
            log.info(":::::::::: newChat = " + newChat.getInitiator().getId());
            log.info(":::::::::: newChat = " + newChat.getUsers().size());
            userRe.getUserChats().add(newChat);


            log.info("::::::::::: start5");
            serviceUser.saveUser1(userRe);*/
            log.info("::::::::::: start6");
        } else {
            log.info("::::::::::: start7");
            newChat = (listChatInit.size() == 0) ? listChatReciv.get(0) : listChatInit.get(0);
            User userIn = serviceUser.findById(userInit);
            User userRe = serviceUser.findById(userReciv);
            log.info("!!!!!!!!!!!!!!!!!! userIN     = " + userIn.getId());
            log.info("!!!!!!!!!!!!!!!!!! userRE     = " + userRe.getId());
            log.info("::::::::::: start7.1");
            log.info("!!!!!!!!!!!!!!!!!! userInChat = " + userIn.getUserChatsNew().size());
            log.info("!!!!!!!!!!!!!!!!!! userReChat = " + userRe.getUserChatsNew().size());
            log.info("::::::::::: start8");
        }


        return newChat;
    }

    public Message saveMessage(Long profileID, DtoMessage dtoM) {
        ChatNew chat = service.getById(dtoM.getChat_id()).get();
        User user = serviceUser.findById(profileID);
        Message message = new Message(user, chat, dtoM.getTextMessage());
        message.setCreatedDate(new Date());
        serviceMessage.saveOne(message);
        return message;
    }

    public DtoChatMessage getChatAllMessages(Long chatId, Long profileId, Integer sizePage, Integer namberPage) {
        Page<Message> page = serviceMessage.getChatAllMessages(chatId, sizePage, namberPage);
        DtoChatMessage dtoChatMessage = new DtoChatMessage();
        dtoChatMessage.setTotalElements(page.getTotalElements());
        dtoChatMessage.setTotalPage(page.getTotalPages());

        List<DtoMessage> listDtoMessage = page.
                stream().
                map(m -> transMessageToDto(m, profileId)).
                collect(Collectors.toList());

        dtoChatMessage.setListDto(listDtoMessage);
        return dtoChatMessage;
    }

    private DtoMessage transMessageToDto(Message m, Long profileId) {
        DtoMessage dtoMessage = new DtoMessage();
        dtoMessage.setDateMessage(m.getCreatedDate());
        dtoMessage.setTextMessage(m.getTextMessage());
        dtoMessage.setChat_id(m.getChat().getId());
        dtoMessage.setUser_author(m.getUser().getId());

        int i = (profileId == m.getUser().getId()) ? 1 : -1;
        dtoMessage.setTypeMessage(i);
        return dtoMessage;
    }

    public DtoChat transChatToDtoChat(ChatNew chat, int keyMessage) {
        DtoChat dtoChat = new DtoChat();
        User user = serviceUser.getUserReceiverFromChat(chat.getId()).get(0);
        mapper.map().map(user,dtoChat);
        dtoChat.setUserResivId(user.getId());
        dtoChat.setInitiatorId(chat.getInitiatorId());
        dtoChat.setChatId(chat.getId());
        if (keyMessage == 1) {
            List<String> lastMessage = serviceMessage.getLastMessage(chat.getId());
            if (lastMessage.size() > 0)
                dtoChat.setLastMessage(lastMessage.get(0));
        }

        return dtoChat;
    }


    public ChatNew getChatById(Long chatId) {
        return service.getById(chatId).get();
    }

    public void delChat(Long chatId, Long profileId) {
        ChatNew chat = getChatById(chatId);
        if (chat.getInitiatorId() == profileId){
            log.info("::::: star0");
            serviceMessage.delMessageByChatId(chatId);
log.info("::::: star1");
log.info(":::::::: chatId = " + chat.getId());
           User userReceiver = serviceUser.getUserReceiverFromChat(chatId).get(0);
           log.info("::::::::: userID = " + userReceiver.getId());
            log.info("::::: star2");

            userReceiver.getUserChatsNew().remove(chat);
            log.info("::::: star2.1");
            GeneralChat generalChat = serviceGeneralChat.getListChatByUserId(userReceiver.getId()).get(0);
            generalChat.getListChat().remove(chat);

            log.info("::::: star3");
            serviceUser.saveUser(userReceiver);
            log.info("::::: star4");

        }
        else {


        }
        GeneralChat generalChat = serviceGeneralChat.getListChatByUserId(profileId).get(0);
        generalChat.getListChat().remove(chat);
        serviceGeneralChat.saveOne(generalChat);
        log.info("::::: star5");

        if (chat.getInitiatorId() == profileId) service.deleteById(chatId);
    }
}






