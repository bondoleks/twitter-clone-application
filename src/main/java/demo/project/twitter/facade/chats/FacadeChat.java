package demo.project.twitter.facade.chats;

import demo.project.twitter.config.Mapper;
import demo.project.twitter.facade.masseges.FacadeMessage;
import demo.project.twitter.facade.masseges.ServiceMessage;
import demo.project.twitter.model.User;
import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.chat.Message;
import demo.project.twitter.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import java.util.Optional;
=======



@RequiredArgsConstructor
@Service
@Log4j2
public class FacadeChat {

    private final ServiceChat chatService;
    private final UserServiceImpl userService;
    private final ServiceMessage messageService;
    private final FacadeMessage messageFacade;
    private final Mapper mapper;
    private Chat entity = new Chat();
    private DtoChatResp dto = new DtoChatResp();

    private Chat transDtoToEntity(DtoChatReq dto) {
        Chat entity = new Chat();
        entity.setInitiator(userService.findById(dto.getUser_initiator()));
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

    public ResponseEntity<?> getEntity(Long id) {

        if (chatService.existsById(id)) {
            entity = chatService.getById(id).get();
            dto = mapper.map().map(entity, dto.getClass());
            return ResponseEntity.accepted().body(dto);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body("Object with cod " + id + " not found");
        }
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
        chatService.saveOne(entity);
        return ResponseEntity.accepted().body(requestBody);
    }

}






