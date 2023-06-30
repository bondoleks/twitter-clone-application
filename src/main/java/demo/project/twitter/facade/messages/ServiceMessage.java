package demo.project.twitter.facade.messages;


import demo.project.twitter.model.chat.Message;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
@Log4j2
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

    public List<Message> getAllByChatId(Long chatId) {
        return repo.getAllByChatId(chatId);
    }

    public void deleteById(Long id) {
        repo.deleteById(id);
    }

    public Page<Message> getChatAllMessages(Long chatId, Integer sizePage, Integer numberPage) {
        Pageable pageable = PageRequest.of(numberPage, sizePage);
        return repo.getChatAllMessages(chatId, pageable);
    }

    public List<String> getLastMessage(Long chatId) {
        return repo.getLastMessage(chatId, chatId);
    }

    public void delMessageByChatId(Long chatId) {
        repo.deleteByChat_Id(chatId);
    }
}
