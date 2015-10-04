package yada.model.content;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;

import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.dao.BasicDAO;
import org.bson.types.ObjectId;
import yada.model.content.SimpleYada;
import yada.util.MorphiaManager;

public class SimpleYadaDAO extends BasicDAO<SimpleYada,ObjectId>
{

	public SimpleYadaDAO()
	{
		super(SimpleYada.class,MorphiaManager.getInstance().getMongoClient(), MorphiaManager.getInstance().getMorphia(), "test");
	}

}
