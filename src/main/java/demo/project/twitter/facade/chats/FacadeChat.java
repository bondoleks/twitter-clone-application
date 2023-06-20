package demo.project.twitter.facade.chats;

import demo.project.twitter.facade.masseges.DtoMessage;
import demo.project.twitter.facade.masseges.FacadeMessage;
import demo.project.twitter.facade.masseges.ServiceMessage;
import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.chat.Message;
import demo.project.twitter.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor
@Service
@Log4j2
public class FacadeChat {

    private final ServiceChat chatService;
    private final UserServiceImpl userService;
    private final ServiceMessage messageService;
    private final FacadeMessage messageFacade;

    private Chat entity = new Chat();
    private DtoChatResp dto = new DtoChatResp();

    private Chat transDtoToEntity(DtoChatReq dto) {
        Chat entity = new Chat();
        System.out.println(dto.getUser_initiatorId());
        entity.setInitiator(userService.findById(dto.getUser_initiatorId()));
        List<Message> messageList = new ArrayList<>();
        entity.setMessages(messageList);
        return entity;
    }


    private DtoChatResp transEntityToDto(Chat entity) {
        DtoChatResp dto = new DtoChatResp();
        dto.setChatId(entity.getId());

        //get messages from entity and transfer them to DTOs and set chatDto List<MessageDto>
        List<DtoMessage> messagesDto = new ArrayList<>();
        List<Message> messages = new ArrayList<>();
        entity.getMessages().forEach(m -> messagesDto.add(messageFacade.transEntityToDto(m)));
        dto.setMessages(messagesDto);

        return dto;
    }


    public ResponseEntity<DtoChatResp> getChat(DtoChatReq dtoReq, Long chatId) {
        Optional<Chat> maybeChat = chatService.getById(chatId);
        Chat chat = maybeChat.get();
        chat.setMessages(messageService.getAllByChatId(chat.getId()));
        //chat.getMessages().forEach(m -> System.out.println(m.toString()));
        return ResponseEntity.accepted().body(transEntityToDto(maybeChat.get()));

    }

    public ResponseEntity<?> saveEntity(DtoChatReq requestBody) {
        entity = transDtoToEntity(requestBody);
        entity.addUser(userService.
                findById(requestBody.
                        getUser_initiatorId()));
        ;
        chatService.saveOne(entity);
        return ResponseEntity.accepted().body(requestBody);
    }


    public ResponseEntity<?> addUserToChat(Long chatId, Long userId) {
        chatService.addUserToChat(chatId, userId);
        return ResponseEntity.accepted().body("added!");
    }

    public ResponseEntity<?> deleteUserFromChat(Long chatId, Long userId) {
        chatService.deleteUserFromChat(chatId, userId);
        return ResponseEntity.accepted().body("deleted!");
    }

    public ResponseEntity<?> deleteEntity(Long id) {
        chatService.deleteById(id);
        return ResponseEntity.accepted().body("deleted!");
    }


    public ResponseEntity<List<DtoChatResp>> getAll(Long userId) {

        List<DtoChatResp> dtos = new ArrayList<>();
        List<Chat> chats = chatService.getAll();
        chats.forEach(chat -> dtos.add(transEntityToDto(chat)));
        return ResponseEntity.accepted().body(dtos);
    }

}






