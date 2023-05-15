package demo.project.twitter.facade.masseges;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController

@RequestMapping("messages")
public class ControllerMessage {
    private final FacadeMessage facade;


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
    public DtoMessage saveEntity(@RequestBody DtoMessage dto) {
        return facade.saveEntity(dto);
    }

    //    ************************************** EXAMPLE END **************************************
}
