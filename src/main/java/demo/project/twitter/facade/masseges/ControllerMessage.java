package demo.project.twitter.facade.masseges;


import demo.project.twitter.facade.users.DtoUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController

@RequestMapping("messages")
public class ControllerMessage {
    private final FacadeMessage facade;


    @GetMapping("get/{id}")
    public ResponseEntity<?> getMessageById(@PathVariable("id") Long id) {
        return facade.getEntity(id);
    }

    @PostMapping("save")
    public DtoMessage seveMessage(@RequestBody DtoMessage dto) {
        return facade.saveEntity(dto);
    }

}
