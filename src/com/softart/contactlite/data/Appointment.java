package com.softart.contactlite.data;

import java.io.Serializable;
import java.util.Date;
import com.googlecode.objectify.annotation.Entity;

/**
 * Represents an appointment
 */
@Entity
public class Appointment extends EntityBase implements Serializable{

	private Long		companyId;
    private Long	 	personId;
	private Date 		date;
	private Date 		time;
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
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public Long getPositionId() {
		return positionId;
	}
	public void setPositionId(Long positionId) {
		this.positionId = positionId;
	}
}
