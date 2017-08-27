package com.softart.contactlite.data;

import java.io.Serializable;
import com.googlecode.objectify.annotation.Entity;

/**
 * Represents a company
 */
@Entity
public class Company extends EntityBase implements Serializable {

	private String 		name;
	private String 		url;
	private String 		address;
	private String 		city;
	private String 		phone;

	public String toString(){
		return name;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
}
