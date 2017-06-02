package com.softart.contactlite.data;

import java.io.Serializable;
import java.util.Date;

import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Entity;

/**
 * @author Robert
 *
 */
@Entity
public class Contact extends EntityBase implements Serializable {

	private Long	positionKeyValue;
	private Long	personKeyValue;
	private Date 	date;
	private Type 	type;
	private String	details;
	private Long 	emailKeyValue;

	public String toString(){
		return date.toString();
	}
	
	public static enum Type {
		PHONE("Phone"),
		EMAIL("Email");
	    private String label;

	    private Type(String label) {
	        this.label = label;
	    }
	    public String getLabel() {
	        return label;
	    }
	    public String toString(){
	    	return label;
	    }
	};
	
    public Type[] getTypes() {
        return Type.values();
    }
	public Long getPosition() {
		return positionKeyValue;
	}
	public void setPosition(Long positionKeyValue) {
		this.positionKeyValue = positionKeyValue;
	}
	public Long getPerson() {
		return personKeyValue;
	}
	public void setPerson(Long personKeyValue) {
		this.personKeyValue = personKeyValue;
	}
	public Date getDate() {
		return date;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Type getType() {
		return type;
	}
	public void setType(Type type) {
		this.type = type;
	}
	public Long getEmail() {
		return emailKeyValue;
	}
	public void setEmail(Long emailKeyValue) {
		this.emailKeyValue = emailKeyValue;
	}
}
