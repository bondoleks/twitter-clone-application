package demo.project.twitter.garbage;

import demo.project.twitter.garbage.DtoAttachmentImage;
import demo.project.twitter.model.tweet.AttachmentImage;
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
public  class FacadeAttachmentImage {
/*

    private final ServicAttachmentImage service;
    private AttachmentImage entity = new AttachmentImage();
    private DtoAttachmentImage dto = new DtoAttachmentImage();

*/
/*Маппер настроен минимально, только для выполнения основной функции - простого преобразования одного объекта
* в другой - entity в dto и dto в entity. *//*

    private ModelMapper mapper() {
        ModelMapper mm = new ModelMapper();
        mm.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STRICT)
                .setFieldMatchingEnabled(true)
                .setSkipNullEnabled(true)
                .setFieldAccessLevel(Configuration.AccessLevel.PRIVATE);
        return mm;
    }

 */
/* Дальнейший код приведен для примера.
        В данном классе реализуются методы предназначенные для связи контроллера и сервиса, с подкючением ModelMapper
         для преобразования данных из БД в DTO и обратно
  *//*


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

    public DtoAttachmentImage saveEntity (DtoAttachmentImage requestBody){
        entity = mapper().map(requestBody, entity.getClass());
        AttachmentImage entity2 =service.saveOne(entity);
        dto = mapper().map(entity2, dto.getClass());
        return dto;
    }

//    ************************************** EXAMPLE END **************************************
*/

}






