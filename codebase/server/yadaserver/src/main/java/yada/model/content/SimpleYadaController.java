package yada.model.content;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.mongodb.MongoClient;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.mongodb.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import yada.util.MorphiaManager;

@Path("simpleyada")
public class SimpleYadaController {

	SimpleYadaDAO dao = new SimpleYadaDAO();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<SimpleYada> get() {
		return dao.createQuery().asList();

	}
	
	@Path("{id}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public SimpleYada get(@PathParam("id") ObjectId id)
	{
		return dao.get(id);
	}
	

	@PUT 
	@Path("{id}")
	@Consumes({"application/json"})
	public void updateSimpleYada(@PathParam("id") ObjectId id, SimpleYada sy) 
	{
		dao.save(sy);
	}

	@DELETE 
	@Path("{id}")
	public void deleteSimpleYada(@PathParam("id") ObjectId id)
	{ 
		System.out.println("delete request received for id:"+id.toString());
		dao.deleteById(id);
	}
	
	@POST
	@Path("{id}")
	public String createSimpleYada(SimpleYada sy)
	{
		dao.save(sy);
		return sy.getId();
	}

}
