package demo.project.twitter.facade.chats;


import demo.project.twitter.model.User;
import demo.project.twitter.model.chat.GeneralChat;
import demo.project.twitter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
@Log4j2
public class ServiceGeneralChat implements FunctionListChat {
    private final RepoListChat repo;
    private final UserRepository repoUser;


    @Override
    public GeneralChat saveOne(GeneralChat listchat) {
        return repo.save(listchat);
    }

    @Override
    public Optional<GeneralChat> getById(Long id) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }

    public boolean existsByUserId(Long profileID) {
        return repo.existsByUserId(profileID);
    }

    public GeneralChat getListChatByUserId(Long profileID) {
        return repo.findByUserId(profileID);
    }

    public List<User> getListChat(Long listChatId) {


        return repoUser.getListChat(listChatId);




//        return null;

    }
}
