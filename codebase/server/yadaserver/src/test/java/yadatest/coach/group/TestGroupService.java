package yadatest.coach.group;
import org.junit.Test;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import static com.jayway.restassured.RestAssured.*;
import static com.jayway.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;
import yada.coach.group.*;
import org.bson.types.*;

import yadatest.BaseTest;
import yadatest.common.*;

public class TestGroupService extends BaseTest{
	
	public String getRESTEndPointEntity()
	{
		return "group";
	}

	public String getJSON()
	{
		Group g = new Group();
		g.setName("class1");
		g.setDescription("Ms Meneses class");
		g.setId(new ObjectId(ID));
		ObjectWriter writer = new ObjectMapper().writer();
		try {
			return writer.writeValueAsString(g);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "";
	}
	

}
