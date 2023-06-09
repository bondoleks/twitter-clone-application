package demo.project.twitter.facade.masseges;


import demo.project.twitter.model.chat.Message;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceMessage implements FunctionMessage {
    private final RepoMessage repo;

    @Override
    public Message saveOne(Message message) {
        return repo.save(message);
    }
    @Override
    public Optional<Message> getById(Long id) {
        return repo.findById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }
    public List<Message> getAllByChatId(Long chatId){
        return repo.getAllByChatId(chatId);
    }
}
