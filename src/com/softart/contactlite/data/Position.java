package com.softart.contactlite.data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import javax.persistence.Id;
/**
 * @author Robert
 *
 */
public class Position implements Serializable {

	@Id
	private Long		id;
	private String 		title;
	private String 		url;
	private Long 		companyKeyValue;
	private Long 		personKeyValue;
	private Date 		datePosted;
	private Date 		dateApplied;

	public Position(){
	}

	public String toString(){
		return title;
	}

	public Long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Long getCompanyKeyValue() {
		return companyKeyValue;
	}

	public void setCompanyKeyValue(Long companyKeyValue) {
		this.companyKeyValue = companyKeyValue;
	}

	public Long getPersonKeyValue() {
		return personKeyValue;
	}

	public void setPersonKeyValue(Long personKeyValue) {
		this.personKeyValue = personKeyValue;
	}

	public Date getDatePosted() {
		return datePosted;
	}

	public void setDatePosted(Date datePosted) {
		this.datePosted = datePosted;
	}

	public Date getDateApplied() {
		return dateApplied;
	}

	public void setDateApplied(Date dateApplied) {
		this.dateApplied = dateApplied;
	}
	

}
