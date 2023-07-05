package demo.project.twitter.garbage;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController

@RequestMapping("images")
public class ControllerAttachmentImage {
    private final FacadeAttachmentImage facade;
/*


*/
/* Дальнейший код приведен для примера.
        В данном классе создаются endpoint для обработки запросов фронта.
        Весь основной процесс обработки происходит в классе Facade
        *//*


// ************************************** EXAMPLE START **************************************

    @GetMapping("get/{id}")
    public ResponseEntity<?> getEntity(@PathVariable("id") Long id) {
        return facade.getEntity(id);
    }

    @PostMapping("save")
    public DtoAttachmentImage saveEntity(@RequestBody DtoAttachmentImage dto) {
        return facade.saveEntity(dto);
    }

    //    ************************************** EXAMPLE END **************************************
*/

}
