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
	private String 		phone;
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
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
}
