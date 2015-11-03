package yada.coach.group;

import org.mongodb.morphia.annotations.Entity;

import yada.BaseEntity;

@Entity
public class Group extends BaseEntity{
	private String name, description;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	

}
