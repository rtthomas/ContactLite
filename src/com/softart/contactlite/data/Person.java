package com.softart.contactlite.data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.Id;

import com.googlecode.objectify.Key;
/**
 * @author Robert
 *
 */
public class Person implements Serializable {

	@Id
	private Long		id;
	private String 		name;
	private String 		email;
	private String 		phoneCell;
	private String 		phoneOffice;
	private Long 		companyKeyValue;
    private List<Long> 	appointmentKeyValues;

	public Person(){
		appointmentKeyValues = new ArrayList<Long>();
	}
	public String toString(){
		return name;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneCell() {
		return phoneCell;
	}
	public void setPhoneCell(String phoneCell) {
		this.phoneCell = phoneCell;
	}
	public String getPhoneOffice() {
		return phoneOffice;
	}
	public void setPhoneOffice(String phoneOffice) {
		this.phoneOffice = phoneOffice;
	}
	public Long getCompanyKeyValue() {
		return companyKeyValue;
	}
	public void setCompanyKeyValue(Long companyKeyValue) {
		this.companyKeyValue = companyKeyValue;
	}
	public Long getId() {
		return id;
	}
	public List<Long> getAppointmentKeyValues() {
		return appointmentKeyValues;
	}

//	public void setAppointments(Collection<Appointment> appointments) {
//		this.appointments = appointments;
//	}
	
}
