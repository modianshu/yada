package yadatest.common.user;

import org.bson.types.ObjectId;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import yada.common.user.*;
import yada.common.user.User.UserType;
import yadatest.BaseTest;

public class TestUserService extends BaseTest {

	@Override
	public String getRESTEndPointEntity() {
		// TODO Auto-generated method stub
		return "user";
	}

	@Override
	public String getJSON() {
		User u = new User();
		u.setId(new ObjectId(ID));
		u.setScreenName("Ms Meneses");
		u.setEmail("m@meneses.com");
		u.setRole(UserType.COACH);		
		ObjectWriter writer = new ObjectMapper().writer();
		try {
			return writer.writeValueAsString(u);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "";
	}

}
