package demo.project.twitter.facade.users;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController

@RequestMapping("user")
public class ControllerUser {
    private final FacadeUser facade;


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
    public DtoUser saveEntity(@RequestBody DtoUser dto) {
        return facade.saveEntity(dto);
    }

    //    ************************************** EXAMPLE END **************************************
}
