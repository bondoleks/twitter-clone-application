package demo.project.twitter.facade.chats;

import demo.project.twitter.facade.masseges.DtoMessage;
import demo.project.twitter.facade.masseges.FacadeMessage;
import demo.project.twitter.facade.masseges.ServiceMessage;
import demo.project.twitter.model.chat.Chat;
import demo.project.twitter.model.chat.Message;
import demo.project.twitter.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@RequiredArgsConstructor
@Service
@Log4j2
public class FacadeChat {

    private final ServiceChat chatService;
    private final UserServiceImpl userService;
    private final ServiceMessage messageService;
    private final FacadeMessage messageFacade;
    private Chat entity = new Chat();
    private DtoChat dto = new DtoChat();

    /*Маппер настроен минимально, только для выполнения основной функции - простого преобразования одного объекта
     * в другой - entity в dto и dto в entity. */
    private ModelMapper mapper() {
        ModelMapper mm = new ModelMapper();
        mm.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STRICT)
                .setFieldMatchingEnabled(true)
                .setSkipNullEnabled(true)
                .setFieldAccessLevel(Configuration.AccessLevel.PRIVATE);
        return mm;
    }

    private Chat transDtoToEntity(DtoChat dto) {
        Chat entity = new Chat();
        entity.setInitiator(userService.findById(dto.getInitiator_id()));
        List<Message> messageList = new ArrayList<>();
        dto.getMessages().forEach(m -> messageList.add(messageFacade.transDtoToEntity(m)));
        entity.setMessages(messageList);
        return entity;
    }


    private DtoChat transEntityToDto(Chat entity) {
        DtoChat dto = new DtoChat();
        dto.setInitiator_id(entity.getInitiator().getId());
        List<DtoMessage> messageList = new ArrayList<>();
        entity.getMessages().forEach(m -> messageList.add(messageFacade.transEntityToDto(m)));
        return dto;
    }

    public ResponseEntity<?> getEntity(Long id) {

        if (chatService.existsById(id)) {
            entity = chatService.getById(id).get();
            dto = mapper().map(entity, dto.getClass());
            return ResponseEntity.accepted().body(dto);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body("Object with cod " + id + " not found");
        }
    }

    public DtoChat saveEntity(DtoChat requestBody) {

        entity = mapper().map(requestBody, entity.getClass());
        Chat entity2 = chatService.saveOne(entity);
        dto = mapper().map(entity2, dto.getClass());

        return dto;
    }

}






