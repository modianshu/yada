package yada.coach.group;

import com.mongodb.*;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.dao.BasicDAO;
import org.bson.types.ObjectId;

import yada.content.SimpleYada;
import yada.util.MorphiaManager;

public class GroupDAO extends BasicDAO<Group,ObjectId>
{
	public GroupDAO()
	{
		//super(SimpleYada.class,MorphiaManager.getInstance().getMongoClient(), MorphiaManager.getInstance().getMorphia(), "test");
		super(Group.class,MorphiaManager.getInstance().getDatastore());
	}
}
