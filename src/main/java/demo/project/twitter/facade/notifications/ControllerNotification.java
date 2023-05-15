package demo.project.twitter.facade.notifications;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController

@RequestMapping("notifications")
public class ControllerNotification {
    private final FacadeNotification facade;


/* Дальнейший код приведен для примера.
        В данном классе создаются endpoint для обработки запросов фронта.
        Весь основной процесс обработки происходит в классе Facade
        */

// ************************************** EXAMPLE START **************************************

    @GetMapping("get/{id}")
    public ResponseEntity<?> getEntity(@PathVariable("id") Long id) {
        return facade.getEntity(id);
    }

    @PostMapping("save")
    public DtoNotification saveEntity(@RequestBody DtoNotification dto) {
        return facade.saveEntity(dto);
    }

    //    ************************************** EXAMPLE END **************************************
}
