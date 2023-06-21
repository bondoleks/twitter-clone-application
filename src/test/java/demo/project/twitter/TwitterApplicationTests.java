package demo.project.twitter;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class TwitterApplicationTests {

    @Autowired
    private TwitterApplication twitterApplication;

    @Test
    public void test() throws Exception {
        assertThat(twitterApplication).isNotNull();
    }
}