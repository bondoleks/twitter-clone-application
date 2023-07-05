package demo.project.twitter.service;


import demo.project.twitter.model.tweet.AttachmentImage;
import demo.project.twitter.repository.AttachmentImageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
@Log4j2
public class AttachmentImageService implements FunctionAttachmentImage {
    private final AttachmentImageRepository repo;



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
