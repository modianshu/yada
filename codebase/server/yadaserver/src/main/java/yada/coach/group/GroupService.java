package yada.coach.group;

import java.util.List;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import org.mongodb.morphia.*;
import com.mongodb.MongoClient;
import org.bson.Document;
import org.bson.types.ObjectId;
import com.mongodb.*;
import com.mongodb.client.*;
import yada.util.MorphiaManager;

@Path("group")
public class GroupService {

	GroupDAO dao = new GroupDAO();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Group> get() {
		return dao.createQuery().asList();

	}
	
	@Path("{id}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Group get(@PathParam("id") ObjectId id)
	{
		return dao.get(id);
	}
	

	@PUT 
	@Path("{id}")
	@Consumes({"application/json"})
	public void updateGroup(@PathParam("id") ObjectId id, Group sy) 
	{
		dao.save(sy);
	}

	@DELETE 
	@Path("{id}")
	public void deleteGroup(@PathParam("id") ObjectId id)
	{ 
		System.out.println("delete request received for id:"+id.toString());
		dao.deleteById(id);
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes({"application/json"})
	public String createGroup(Group sy)
	{
		dao.save(sy);
		return "{\"id\":"+"\""+sy.getId()+"\"}";
	}

}
