package demo.project.twitter.facade.chats;

import demo.project.twitter.facade.Mapper;
import demo.project.twitter.facade.masseges.DtoMessage;
import demo.project.twitter.facade.masseges.FacadeMessage;
import demo.project.twitter.facade.masseges.ServiceMessage;
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
import java.util.stream.Collectors;


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
        mapper.map().map(dto, entity);
        entity.setInitiator(userService.findById(dto.getInitiator_id()));
        List<Message> messageList = new ArrayList<>();

        entity.setMessages(messageList);
        return entity;
    }


    private DtoChatResp transEntityToDto(Chat entity) {
        DtoChatResp dto = new DtoChatResp();
        //mapper.map().map(entity, dto.getClass());
        dto.setChatId(entity.getId());
        dto.setMessages(entity.getMessages());
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

    public ResponseEntity<DtoChatResp> getChatBetweenUsers(DtoChatReq dtoReq) {
        Chat chat = chatService.getAll()
                .stream().filter(ch ->
                        ch.getInitiator().getId() == dtoReq.getInitiator_id())
                .collect(Collectors.toList()).get(0);
        return ResponseEntity.accepted().body(transEntityToDto(chat));

    }


}






