package demo.project.twitter.facade.masseges;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController

@RequestMapping("messages")
public class    ControllerMessage {
    private final FacadeMessage facade;


    @GetMapping("get/{id}")
    public ResponseEntity<?> getMessageById(@PathVariable("id") Long id) {
        return facade.getEntity(id);
    }

    @PostMapping("save")
    public DtoMessage saveMessage(@RequestBody DtoMessage dto) {
        return facade.saveEntity(dto);
    }

}
