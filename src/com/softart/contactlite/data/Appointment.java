package com.softart.contactlite.data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.persistence.Id;

import com.googlecode.objectify.Key;
/**
 * @author Robert
 *
 */
public class Appointment implements Serializable{

	@Id
	private Long		id;
	private Long		positionKey;
    private List<Long> 	personKeys;
	private Long		companyKey;
	private Date 		date;
	private Date 		time;
	private String		details;
	
	
	public Appointment(){
		personKeys = new ArrayList<Long>();
	}
	
	public Long getId() {
		return id;
	}
	public Long getPositionKey() {
		return positionKey;
	}
	public Collection<Long> getPersonKeys(){
		return personKeys;
	}
	public Long getCompanyKey() {
		return companyKey;
	}
	public Date getDate() {
		return date;
	}
	public Date getTime() {
		return time;
	}
	public String getDetails() {
		return details;
	}
	public void setPosition(Long positionKey) {
		this.positionKey = positionKey;
	}
//	public void setPersons(List<Key<Person>> personKeys){
//		this.personKeys = personKeys;
//	}
	public void setCompany(Long companyKey) {
		this.companyKey = companyKey;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public void setDetails(String details) {
		this.details = details;
	}
}
