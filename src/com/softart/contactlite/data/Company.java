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
public class Company implements Serializable {

	@Id
	private Long		id;
	private String 		name;
	private String 		url;
	private String 		address;
	private String 		city;
	private String 		phone;
    private List<Long> 	positionKeyValues;

	public Company(){
		positionKeyValues = new ArrayList<Long>();
	}
	public String toString(){
		return name;
	}

	public List<Long> getPositionKeyValues() {
		return positionKeyValues;
	}
//	public void setPositions(Collection<Key<Position>> positions) {
//		this.positions = positions;
//	}
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
	public Long getId() {
		return id;
	}

}
