package yadatest;
import org.junit.Test;
import static com.jayway.restassured.RestAssured.*;
import static com.jayway.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;
import yada.coach.group.*;
import org.bson.types.*;

public abstract class BaseTest {
	
	public static String REST_BASE_URL = "http://localhost:8080/yadaserver/api";
	public String ID = new ObjectId().toString();
	
	@Test
	public void testList()
	{
		given()
		.when().
			get(getRESTEndPoint())
		.then()
			.statusCode(200)
			.log()
			.all();
	}
	
	@Test
	public void testCreateAndDelete()
	{
		//create first 
		given()
		.contentType("application/json")
		.body(getJSON())
	.when()
		.post(getRESTEndPoint())
	.then()
		.statusCode(200);
		
		testDelete();
	}
	
	public void testEdit()
	{
		
	}
	
	
	public void testDelete()
	{
		given()
		.pathParam("id",this.ID)
	.when()
		.delete(getRESTEndPoint()+"/{id}")
	.then()
		.statusCode(204);
	}
	
	public String getRESTEndPoint()
	{
		return this.REST_BASE_URL+"/"+getRESTEndPointEntity();
	}
	public abstract String getRESTEndPointEntity();
	public abstract String getJSON();


}
