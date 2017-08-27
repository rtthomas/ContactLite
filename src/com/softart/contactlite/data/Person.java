package com.softart.contactlite.data;

import java.io.Serializable;
import com.googlecode.objectify.annotation.Entity;

/**
 * Represents a person
 */
@Entity
public class Person extends EntityBase implements Serializable {

	private String 		name;
	private String 		email;
	private String 		phone;
	private Long 		companyId;

	public Person(){}
	
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

	public Long getCompanyId() {
		return companyId;
	}
	public void setCompanyId(Long companyId) {
		this.companyId = companyId;
	}
}
