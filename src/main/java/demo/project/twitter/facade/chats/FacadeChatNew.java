package demo.project.twitter.facade.chats;

import demo.project.twitter.config.Mapper;
import demo.project.twitter.facade.messages.DtoMessage;
import demo.project.twitter.facade.messages.ServiceMessage;
import demo.project.twitter.model.User;
import demo.project.twitter.model.chat.Chat;
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


    public Chat getChatByUser(Long userInit, Long userReciv) {

        List<Chat> listChat = service.getChatByUser(userInit, userReciv);
        Chat newChat;
        if (listChat.size() == 0) {

            User userIn = serviceUser.findById(userInit);
            User userRe = serviceUser.findById(userReciv);
            Chat chat = new Chat(userIn);
            newChat = service.saveOne(chat);
            userRe.getUserChats().add(newChat);
            serviceUser.saveUser1(userRe);

        } else newChat = listChat.get(0);

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
        int i = (profileId == m.getUser().getId()) ? 1 : -1;
        dtoMessage.setTypeMessage(i);
        return dtoMessage;
    }

    public DtoChat transChatToDtoChat(Chat chat, int keyMessage) {
        DtoChat dtoChat = new DtoChat();
        User user = serviceUser.getUserFromChat(chat.getId()).get(0);
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
}






