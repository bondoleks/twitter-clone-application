package demo.project.twitter.facade.masseges;

import demo.project.twitter.model.chat.Message;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
@Log4j2
public class FacadeMessage {

    private final ServiceMessage service;
    private Message entity = new Message();
    private DtoMessage dto = new DtoMessage();

    private ModelMapper mapper() {
        ModelMapper mm = new ModelMapper();
        mm.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STRICT)
                .setFieldMatchingEnabled(true)
                .setSkipNullEnabled(true)
                .setFieldAccessLevel(Configuration.AccessLevel.PRIVATE);
        return mm;
    }

    public ResponseEntity<?> getEntity(Long id) {

        if (service.existsById(id)) {
            entity = service.getById(id).get();
            dto = mapper().map(entity, dto.getClass());
            return ResponseEntity.accepted().body(dto);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body("Message with cod " + id + " not found");
        }
    }

    public DtoMessage saveEntity(DtoMessage requestBody) {
        entity = mapper().map(requestBody, entity.getClass());
        Message entity2 = service.saveOne(entity);
        dto = mapper().map(entity2, dto.getClass());
        return dto;
    }
}






