package yada.common.user;

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

@Path("user")
public class UserService {

	UserDAO dao = new UserDAO();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> get() {
		return dao.createQuery().asList();

	}
	
	@Path("{id}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public User get(@PathParam("id") ObjectId id)
	{
		return dao.get(id);
	}
	

	@PUT 
	@Path("{id}")
	@Consumes({"application/json"})
	public void updateUser(@PathParam("id") ObjectId id, User sy) 
	{
		dao.save(sy);
	}

	@DELETE 
	@Path("{id}")
	public void deleteUser(@PathParam("id") ObjectId id)
	{ 
		System.out.println("delete request received for id:"+id.toString());
		dao.deleteById(id);
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes({"application/json"})
	public String createUser(User sy)
	{
		dao.save(sy);
		return "{\"id\":"+"\""+sy.getId()+"\"}";
	}

}
