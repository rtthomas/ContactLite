package com.softart.contactlite.data;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Id;

import com.googlecode.objectify.Key;
/**
 * @author Robert
 *
 */
public class Position implements Serializable {

	@Id
	private Long	id;
	private String 	title;
	private String 	url;
	private Long 	companyKeyValue;
	private Long 	personKeyValue;
	private Date 	datePosted;
	private Date 	dateApplied;

	public String toString(){
		return title;
	}
	
	public Long getId() {
		return id;
	}
	public String getTitle() {
		return title;
	}
	public String getUrl() {
		return url;
	}
	public Company getCompany() {
		return null;
	}
	public Person getPerson() {
		return null;
	}
	public Date getDatePosted() {
		return datePosted;
	}
	public Date getDateApplied() {
		return dateApplied;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public void setCompany(Long company) {
		companyKeyValue = company;
	}
	public void setPerson(Long person) {
		personKeyValue = person;
	}
	public void setDatePosted(Date datePosted) {
		this.datePosted = datePosted;
	}
	public void setDateApplied(Date dateApplied) {
		this.dateApplied = dateApplied;
	}
}
