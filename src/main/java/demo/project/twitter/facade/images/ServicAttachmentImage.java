package demo.project.twitter.facade.images;


import demo.project.twitter.model.tweet.AttachmentImage;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
@Log4j2
public class ServicAttachmentImage implements FunctionAttachmentImage {
    private final RepoAttachmentImage repo;



    @Override
    public AttachmentImage saveOne(AttachmentImage img) {
        return repo.save(img);
    }
    @Override
    public Optional<AttachmentImage> getById(Long id) {
        return repo.findById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }



    public List<String> getAttachmentImageUrlByTweetId(Long id){
        return repo.getAttachmentImageUrlByTweetId(id);
    };


}
