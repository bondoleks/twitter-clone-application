package demo.project.twitter;

import demo.project.twitter.user.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
class TwitterApplicationTests {

	@Test
	void contextLoads() {
		User user = new User("Test");
		Assert.isTrue(user.getName().equals("Test"));
	}

}
