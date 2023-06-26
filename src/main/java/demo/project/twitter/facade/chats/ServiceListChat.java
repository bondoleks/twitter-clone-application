package demo.project.twitter.facade.chats;


import demo.project.twitter.model.chat.ListChat;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
@Log4j2
public class ServiceListChat implements FunctionListChat {
    private final RepoListChat repo;


    @Override
    public ListChat saveOne(ListChat listchat) {
        return repo.save(listchat);
    }

    @Override
    public Optional<ListChat> getById(Long id) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }

    public boolean existsByUserId(Long profileID) {
        return repo.existsByUserId(profileID);
    }

    public ListChat getListChatByUserId(Long profileID) {
        return repo.findByUserId(profileID);
    }
}
