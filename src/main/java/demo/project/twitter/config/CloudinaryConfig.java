package demo.project.twitter.config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "df2sjncbp",
                "api_key", "538762658368772",
                "api_secret", "tY6fu0XRKJeuJAxIpycgzDo1_xg"));
    }
}
