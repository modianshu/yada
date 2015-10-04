package yada.util;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.mongodb.MongoClient;

import yada.model.content.SimpleYada;

public class MorphiaManager {
	private static MorphiaManager morphiaManager;
	private MongoClient mongoClient;
	private Morphia morphia;
	private Datastore datastore;
	public static synchronized MorphiaManager getInstance()
	{
		morphiaManager = new MorphiaManager();
		morphiaManager.morphia = new Morphia();
		morphiaManager.mongoClient = new MongoClient();
    	Datastore datastore = morphiaManager.morphia.createDatastore(morphiaManager.mongoClient, "test");
    	datastore.ensureIndexes();
    	morphiaManager.morphia.map(SimpleYada.class);
		return morphiaManager;
	}
	
	public Morphia getMorphia()
	{
		return morphia;
	}
	
	public Datastore getDatastore()
	{
		return datastore;
	}
	
	public MongoClient getMongoClient()
	{
		return mongoClient;
	}
	
}
