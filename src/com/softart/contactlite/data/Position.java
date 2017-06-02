package com.softart.contactlite.data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Entity;
/**
 * @author Robert
 *
 */
@Entity
public class Position extends EntityBase implements Serializable {

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
