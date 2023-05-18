package demo.project.twitter.rest;

import demo.project.twitter.repository.MessageRepository;
import demo.project.twitter.webSocket.MessageOnlyTest;
import demo.project.twitter.webSocket.OutputMessageOnlyTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class ChatController {

    private final MessageRepository messageRepo;
    @Autowired
    public ChatController(MessageRepository messageRepo) {
        this.messageRepo = messageRepo;
    }
    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public OutputMessageOnlyTest send(final MessageOnlyTest message) throws Exception {

        final String time = new SimpleDateFormat("HH:mm").format(new Date());
        return new OutputMessageOnlyTest(message.getFrom(), message.getText(), time);
    }

}
