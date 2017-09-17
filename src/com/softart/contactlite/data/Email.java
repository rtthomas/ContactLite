/**
 * 
 */
package com.softart.contactlite.data;

import java.io.Serializable;
import com.googlecode.objectify.annotation.Index;
import com.googlecode.objectify.annotation.Entity;

/**
 * Holds an email
 */
@Entity
public class Email extends EntityBase implements Serializable  {
	private String		sender;
	private String		receiver;
	private Long		date;
	private String		subject;
	private Long		contentId;
	@Index
	private boolean		assigned;	
	
	public Email(){}
	
	public Email(String	sender, String receiver, Long date, String subject, Long contentId){
		super();
		this.sender = sender;
		this.receiver = receiver;
		this.date = date;
		this.subject = subject;
		this.contentId = contentId;
		assigned = false;
	}
	
	public String getSender() {
		return sender;
	}
	public String getReceiver() {
		return receiver;
	}
	public String getSubject() {
		return subject;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public void setReceiver(String receiver) {
		this.receiver = receiver;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public Long getDate() {
		return date;
	}
	public void setDate(Long date) {
		this.date = date;
	}
	public Long getContentId() {
		return contentId;
	}

	public void setContentId(Long contentId) {
		this.contentId = contentId;
	}

	public boolean isAssigned() {
		return assigned;
	}
	public void setAssigned(boolean assigned) {
		this.assigned = assigned;
	}
}
