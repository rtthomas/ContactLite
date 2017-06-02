/**
 * 
 */
package com.softart.contactlite.data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Entity;

/**
 * @author Robert
 *
 */
@Entity
public class Email extends EntityBase implements Serializable  {
	private String		sender;
	private String		receiver;
	private Date		date;
	private String		subject;
	private String		text;
    private List<Long> 	attachments;
	
	public Email(){
		attachments = new ArrayList<Long>();
	}

	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public List<Long> getAttachments() {
		return attachments;
	}
//	public void setAttachments(Collection<Attachment> attachments) {
//		this.attachments = attachments;
//	}
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
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
}
