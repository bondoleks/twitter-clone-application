package demo.project.twitter.facade.chats;

import demo.project.twitter.config.Mapper;
import demo.project.twitter.facade.messages.DtoMessage;
import demo.project.twitter.facade.messages.ServiceMessage;
import demo.project.twitter.model.User;
import demo.project.twitter.model.chat.Chat;
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

    private final ServiceChatNew service;
    private final UserService serviceUser;
    private final ServiceMessage serviceMessage;
    private final Mapper mapper;
    private final ServiceGeneralChat serviceGeneralChat;


    public Chat getChatByUser(Long userInit, Long userReciv) {
log.info("::::::::::: start1");
        List<Chat> listChat = service.getChatByUser(userInit, userReciv);
        log.info("::::::::::: start2");
        Chat newChat;
        if (listChat.size() == 0) {

            User userIn = serviceUser.findById(userInit);
            User userRe = serviceUser.findById(userReciv);
            log.info("::::::::::: start3");
            Chat chat = new Chat(userIn);
            newChat = service.saveOne(chat);
            log.info("::::::::::: start4");
            userRe.getUserChats().add(newChat);
            log.info("::::::::::: start5");
            serviceUser.saveUser1(userRe);
            log.info("::::::::::: start6");
        } else {
            log.info("::::::::::: start7");
            newChat = listChat.get(0);
            log.info("::::::::::: start8");
        }


        return newChat;
    }

    public void saveMessage(Long profileID, DtoMessage dtoM) {
        Chat chat = service.getById(dtoM.getChat_id()).get();
        User user = serviceUser.findById(profileID);
        Message message = new Message(user, chat, dtoM.getTextMessage());
        message.setCreatedDate(new Date());
        serviceMessage.saveOne(message);

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

    public DtoChat transChatToDtoChat(Chat chat, int keyMessage) {
        DtoChat dtoChat = new DtoChat();
        User user = serviceUser.getUserReceiverFromChat(chat.getId()).get(0);
        mapper.map().map(user,dtoChat);
        dtoChat.setUserResivId(user.getId());
        dtoChat.setInitiatorId(chat.getInitiator().getId());
        dtoChat.setChatId(chat.getId());
        if (keyMessage == 1) {
            List<String> lastMessage = serviceMessage.getLastMessage(chat.getId());
            if (lastMessage.size() > 0)
                dtoChat.setLastMessage(lastMessage.get(0));
        }

        return dtoChat;
    }


    public Chat getChatById(Long chatId) {
        return service.getById(chatId).get();
    }

    public void delChat(Long chatId, Long profileId) {
        Chat chat = getChatById(chatId);
        if (chat.getInitiator().getId() == profileId){
//            serviceMessage.delMessageByChatId(chatId);
log.info("::::: star1");
log.info(":::::::: chatId = " + chat.getId());
           User userReceiver = serviceUser.getUserReceiverFromChat(chatId).get(0);
           log.info("::::::::: userID = " + userReceiver.getId());
            log.info("::::: star2");

            Set<Chat> setChat = userReceiver.getUserChats();
            setChat.remove(chat);

            log.info("::::: star3");
//            serviceUser.saveUser(userReceiver);
            log.info("::::: star4");

        }
        else {


        }
        /*GeneralChat generalChat = serviceGeneralChat.getListChatByUserId(profileId).get(0);
        generalChat.getListChat().remove(chat);
        serviceGeneralChat.saveOne(generalChat);*/
    }
}






