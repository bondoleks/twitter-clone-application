package demo.project.twitter.facade.chats;

import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.chat.ListChat;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@RequiredArgsConstructor
@Service
@Log4j2
public class FacadeListChat {

    private final ServiceListChat service;
    private final ServiceChatNew serviceChatNew;


    public ListChat addChatToChatList(Long chatId, Long profileID) {
        ListChat listChat;
        if (service.existsByUserId(profileID)) {
            log.info(":::::: start1");
            listChat = service.getListChatByUserId(profileID);
        } else {
            log.info(":::::: start2");
            listChat = new ListChat(profileID);
            log.info(":::::: listChat = " + listChat.toString());
            ListChat listChat1 = service.saveOne(listChat);
            log.info("::::::: save ok");

            log.info(":::::: listChat = " + listChat1.toString());

            Chat chat = serviceChatNew.getById(chatId).get();
            log.info("::::::: chat = " + chat.toString());
            /*List<ListChat> listlistChat = new ArrayList<>();
            chat.setListListChat(listlistChat);*/
            chat.getListListChat().add(listChat1);
            log.info("::::::: chat = " + chat.toString());
            serviceChatNew.saveOne(chat);
        }
        return listChat;
    }
}






