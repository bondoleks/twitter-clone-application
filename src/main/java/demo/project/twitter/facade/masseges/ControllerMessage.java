package demo.project.twitter.facade.masseges;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController

@RequestMapping("/api/v1/messages")
@CrossOrigin("http://localhost:5173")
public class ControllerMessage {
    private final FacadeMessage facade;


    @GetMapping("get/{id}")
    public ResponseEntity<?> getMessageById(@PathVariable("id") Long id) {
        return facade.getEntity(id);
    }

    @PostMapping("save")
    public DtoMessage saveMessage(@RequestBody DtoMessage dto) {
        return facade.saveEntity(dto);
    }

    @PostMapping("delete/{id}")
    public DtoMessage saveMessage(@PathVariable("id") Long id) {
        return facade.deleteById(id);
    }

}
