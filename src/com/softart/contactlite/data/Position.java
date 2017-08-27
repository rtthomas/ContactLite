package com.softart.contactlite.data;

import java.io.Serializable;
import java.util.Date;
import com.googlecode.objectify.annotation.Entity;
/**
 * Represents an advertised position
 */
@Entity
public class Position extends EntityBase implements Serializable {

	private String 		title;
	private String 		url;
	private Long 		companyId;
	private Long 		personId;
	private Date 		datePosted;
	private Date 		dateApplied;

	public Position(){}

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
