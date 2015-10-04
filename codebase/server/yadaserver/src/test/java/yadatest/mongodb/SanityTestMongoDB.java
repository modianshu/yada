package yadatest.mongodb;

import static org.junit.Assert.*;

import org.bson.Document;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.BasicDBObject;

import yada.model.content.SimpleYada;
import yada.model.content.SimpleYada.SimpleYadaType;
import yada.model.content.SimpleYadaDAO;

public class SanityTestMongoDB {
	MongoCollection<Document> collection;

	@Before
	public void setUp() throws Exception {
		MongoClient mongoClient = new MongoClient();
		MongoDatabase database = mongoClient.getDatabase("test");
		collection = database.getCollection("SimpleYada");
	}

	@After
	public void tearDown() throws Exception {
	}

	
	public void testFind() {

		Document myDoc = collection.find().first();
		System.out.println(myDoc.toJson());
	}

	@Test
	public void testInsert() {
		
		SimpleYada sy = new SimpleYada();
		sy.setTitle1("My First Story");
		sy.setType(SimpleYadaType.STORY);
		sy.setContent("This is my first story. I don't know what to write");
		SimpleYadaDAO dao = new SimpleYadaDAO();
		dao.save(sy);
	}
	
}
