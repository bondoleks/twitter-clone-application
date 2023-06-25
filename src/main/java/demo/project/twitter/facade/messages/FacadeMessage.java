package demo.project.twitter.facade.messages;

import demo.project.twitter.facade.chats.ServiceChat;
import demo.project.twitter.model.chat.Message;
import demo.project.twitter.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
@Log4j2
public class FacadeMessage {

    private final ServiceMessage messageService;
    private final UserServiceImpl userService;
    private final ServiceChat chatService;
    private Message entity = new Message();
    private DtoMessage dto = new DtoMessage();


    public Message transDtoToEntity(DtoMessage dto) {
        Message entity = new Message();
        entity.setTextMessage(dto.getTextMessage());
        entity.setUser(userService.findById(dto.getUser_from()));
        entity.setChat(chatService.getById(dto.getChat_id()).get());
        //mapper().map(dto, entity);
        return entity;
    }


    public DtoMessage transEntityToDto(Message entity) {
        DtoMessage dto = new DtoMessage();
        dto.setTextMessage(entity.getTextMessage());
        dto.setUser_from(entity.getChat().getInitiator().getId());
        dto.setChat_id(entity.getChat().getId());
        return dto;
    }

    public ResponseEntity<?> getEntity(Long id) {

        if (messageService.existsById(id)) {
            entity = messageService.getById(id).get();
            dto = transEntityToDto(entity);
            return ResponseEntity.accepted().body(dto);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body("Message with cod " + id + " not found");
        }
    }

    public DtoMessage saveEntity(DtoMessage requestBody) {
        entity = transDtoToEntity(requestBody);
        messageService.saveOne(entity);
        return transEntityToDto(entity);
    }

    public DtoMessage deleteById(Long id) {
        Message entity = messageService.getById(id).get();
        DtoMessage dto = transEntityToDto(entity);
        messageService.deleteById(id);
        return dto;
    }
}






