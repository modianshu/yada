package yada.util;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.mongodb.MongoClient;

import yada.content.SimpleYada;

public class MorphiaManager {
	private static MorphiaManager morphiaManager;
	private MongoClient mongoClient;
	private Morphia morphia;
	private Datastore datastore;
	public static synchronized MorphiaManager getInstance()
	{
		if (morphiaManager==null)
		{
			morphiaManager = new MorphiaManager();
		}

		return morphiaManager;
	}
	
	public MorphiaManager()
	{
		mongoClient = new MongoClient();
		morphia = new Morphia();
    	datastore = morphia.createDatastore(mongoClient, "test");
    	datastore.ensureIndexes();
    	morphia.map(SimpleYada.class);
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
