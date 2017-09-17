package com.softart.contactlite.data;

import java.io.Serializable;
import com.googlecode.objectify.annotation.Entity;

/**
 * Represents an appointment
 */
@Entity
public class Appointment extends EntityBase implements Serializable{

	private Long		companyId;
    private Long	 	personId;
	private Long 		dateTime;
	private Long		positionId;
	
	public Long getCompanyId() {
		return companyId;
	}
	public void setCompanyId(Long companyId) {
		this.companyId = companyId;
	}
	public Long getPersonId() {
		return personId;
	}
	public void setPersonId(Long personId) {
		this.personId = personId;
	}
	public Long getDateTime() {
		return dateTime;
	}
	public void setDateTime(Long dateTime) {
		this.dateTime = dateTime;
	}
	public Long getPositionId() {
		return positionId;
	}
	public void setPositionId(Long positionId) {
		this.positionId = positionId;
	}
}
