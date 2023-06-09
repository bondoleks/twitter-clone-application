package demo.project.twitter.garbage;


import demo.project.twitter.model.chat.Chat;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceChat /*implements FunctionChat*/ {
    /*private final RepoChat repo;

    @Override
    public Chat saveOne(Chat chat) {
        return repo.save(chat);
    }

    @Override
    public Optional<Chat> getById(Long id) {
        return repo.findById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

    public List<Chat> getAll() {
        List<Chat> chats = new ArrayList<>();
        return StreamSupport.stream(repo.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    public void addUserToChat(Long chatId, Long userId) {
        repo.addUserToChat(chatId, userId);
    }

    public void deleteUserFromChat(Long chatId, Long userId) {
        repo.deleteUserFromChat(chatId, userId);
    }

    public void deleteById(Long id) {
        repo.deleteById(id);
    }


    public List<Chat> getAllByUserId(Long userId) {
        return repo.getAllByUserId(userId);
    }
}*/
}
