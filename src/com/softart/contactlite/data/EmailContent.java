package com.softart.contactlite.data;

import java.io.Serializable;

import com.googlecode.objectify.annotation.Entity;

/**
 * Holds the body text of an email
 */
@Entity
public class EmailContent extends EntityBase implements Serializable {
	private String	text;
	
	public EmailContent(){}

	public EmailContent(String text) {
		super();
		this.text = text;
	}

	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
}
