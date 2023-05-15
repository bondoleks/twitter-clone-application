package demo.project.twitter.rest;

import demo.project.twitter.dto.AdminUserDto;
import demo.project.twitter.model.User;
import demo.project.twitter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@Controller
public class TestController {

    @GetMapping("/test")
    public String home(Model model){
        return "test";
    }
}
