package demo.project.twitter.facade.chats;

import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.chat.GeneralChat;
import demo.project.twitter.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;


@RequiredArgsConstructor
@Service
@Log4j2
public class FacadeGeneralChat {

    private final ServiceGeneralChat service;
    private final ServiceChatNew serviceChatNew;
    private final UserService serviceUser;


    public GeneralChat addChatToChatList(Long chatId, Long profileID) {
        GeneralChat listChat;
        if (service.existsByUserId(profileID)) {
            log.info(":::::: start1");
            listChat = service.getListChatByUserId(profileID);
            Chat chat = serviceChatNew.getById(chatId).get();
            listChat.getListChat().add(chat);
            service.saveOne(listChat);

        } else {
            log.info(":::::: start2");
            listChat = new GeneralChat(profileID);
            log.info(":::::: listChat = " + listChat.toString());
            GeneralChat listChat1 = service.saveOne(listChat);
            log.info("::::::: save ok");

            log.info(":::::: listChat = " + listChat1.toString());

            Chat chat = serviceChatNew.getById(chatId).get();
            log.info("::::::: chat = " + chat.getId());
            /*List<ListChat> listlistChat = new ArrayList<>();
            chat.setListListChat(listlistChat);*/
            chat.getListGeneralChat().add(listChat1);
            log.info("::::::: chat = " + chat.getListGeneralChat().size());

            chat = serviceChatNew.saveOne(chat);
            listChat.getListChat().add(chat);
            service.saveOne(listChat);

        }
        return listChat;
    }



    public List<Chat> getListChat(Long profileId) {
        Long generalChatId = service.getListChatByUserId(profileId).getId();

        return serviceChatNew.getListChatByGeneralId(generalChatId);



    }
}






