package com.softart.contactlite.data;

import java.io.Serializable;
import com.googlecode.objectify.annotation.Entity;
/**
 * Represents an advertised position
 */
@Entity
public class Position extends EntityBase implements Serializable {

	private String 		title;
	private String 		url;
	private String 		reference;
	private Long 		companyId;
	private Long 		personId;
	private Long 		datePosted;
	private Long 		dateApplied;

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

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
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

	public Long getDatePosted() {
		return datePosted;
	}
	public void setDatePosted(Long datePosted) {
		this.datePosted = datePosted;
	}

	public Long getDateApplied() {
		return dateApplied;
	}
	public void setDateApplied(Long dateApplied) {
		this.dateApplied = dateApplied;
	}

}
