package com.softart.contactlite.data;

import java.io.Serializable;
import java.util.Date;

import com.googlecode.objectify.annotation.Entity;

/**
 * Represents an email, phone or meeting contact
 */
@Entity
public class Contact extends EntityBase implements Serializable {

	private Long	positionId;
	private Long	personId;
	private Date 	date;
	private String 	type;
	private String	details;
	private Long 	emailId;

	public Contact(){}

	public Long getPositionId() {
		return positionId;
	}
	public void setPositionId(Long positionId) {
		this.positionId = positionId;
	}

	public Long getPersonId() {
		return personId;
	}
	public void setPersonId(Long personId) {
		this.personId = personId;
	}

	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}

	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}

	public Long getEmailId() {
		return emailId;
	}
	public void setEmailId(Long emailId) {
		this.emailId = emailId;
	}
	
}
