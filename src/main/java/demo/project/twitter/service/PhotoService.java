package demo.project.twitter.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import demo.project.twitter.model.tweet.Tweet;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Log4j2
public class PhotoService {
    private final Cloudinary cloudinary;

    public Optional<String> getPhotoUrl(MultipartFile file) throws IOException {

        if (file.isEmpty()) return Optional.empty();
        else {

            Map<String, Object> uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
            String imageUrl = uploadResult.get("secure_url").toString();
            return Optional.of(imageUrl);
        }
    }


    public Optional<String> getPhotoUrlNew1(MultipartFile file, int count, Tweet tweet) throws IOException {

        if (file.isEmpty()) return Optional.empty();
        else {
            StringBuilder folderName = new StringBuilder();
            folderName.
                    append("userId_").
                    append(tweet.getUser().getId());
            StringBuilder photoName = new StringBuilder();
            photoName.
                    append(tweet.getTweetType()).
                    append("_").
                    append(tweet.getId()).append("_photo").append(count);




            String s = folderName.toString();
            Map<String, String> folder = new HashMap<>();
            folder.put("folder", folderName.toString());
            folder.put("public_id", photoName.toString());

            Map<String, Object> uploadResult = cloudinary.uploader().upload(file.getBytes(), folder);
            String imageUrl = uploadResult.get("secure_url").toString();
            return Optional.of(imageUrl);
        }
    }
}
