package demo.project.twitter.facade.masseges;

import demo.project.twitter.model.User;
import demo.project.twitter.models.chat.Message;
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
public  class FacadeMessage {

    private final ServiceMessage service;
    private Message entity = new Message();
    private DtoMessage dto = new DtoMessage();

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

 /* Дальнейший код приведен для примера.
        В данном классе реализуются методы предназначенные для связи контроллера и сервиса, с подкючением ModelMapper
         для преобразования данных из БД в DTO и обратно
  */

    // ************************************** EXAMPLE START **************************************
    public ResponseEntity<?> getEntity (Long id){

        if (service.existsById(id)) {
            entity = service.getById(id).get();
            dto = mapper().map(entity,dto.getClass());
            return ResponseEntity.accepted().body(dto);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body("Object with cod " + id + " not found");
        }
    }

    public DtoMessage saveEntity (DtoMessage requestBody){
        entity = mapper().map(requestBody, entity.getClass());
        Message entity2 =service.saveOne(entity);
        dto = mapper().map(entity2, dto.getClass());
        return dto;
    }

//    ************************************** EXAMPLE END **************************************
}






