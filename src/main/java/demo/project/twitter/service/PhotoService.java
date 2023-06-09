package demo.project.twitter.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
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
}
