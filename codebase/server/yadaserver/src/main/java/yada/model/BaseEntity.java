package yada.model;

import java.util.Date;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Id;

public class BaseEntity {
	@Id
	private ObjectId id;
	
	public String getId()
	{
		return id.toString();
	}
	public String getSchemaVer() {
		return schemaVer;
	}
	public void setSchemaVer(String schemaVer) {
		this.schemaVer = schemaVer;
	}
	public String getShardKey() {
		return shardKey;
	}
	public void setShardKey(String shardKey) {
		this.shardKey = shardKey;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getLastModifiedOn() {
		return lastModifiedOn;
	}
	public void setLastModifiedOn(Date lastModifiedOn) {
		this.lastModifiedOn = lastModifiedOn;
	}
	public Date getLastModifiedBy() {
		return lastModifiedBy;
	}
	public void setLastModifiedBy(Date lastModifiedBy) {
		this.lastModifiedBy = lastModifiedBy;
	}
	public void setId(ObjectId id) {
		this.id = id;
	}
	private String schemaVer,shardKey;
	private Date createdAt, lastModifiedOn, lastModifiedBy;

}
