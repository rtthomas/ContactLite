package com.softart.contactlite.data;

import java.io.Serializable;

import com.googlecode.objectify.annotation.Entity;

/**
 * Represents an email, phone or meeting contact
 */
@Entity
public class Contact extends EntityBase implements Serializable {

	private Long	companyId;
	private Long	positionId;
	private Long	personId;
	private Long 	date;
	private String 	type;
	private String	details;
	private Long 	emailId;

	public Contact(){}

	public Long getCompanyId() {
		return companyId;
	}

	public void setCompanyId(Long companyId) {
		this.companyId = companyId;
	}

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

	public Long getDate() {
		return date;
	}
	public void setDate(Long date) {
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
