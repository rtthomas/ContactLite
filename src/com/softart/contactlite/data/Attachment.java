/**
 * 
 */
package com.softart.contactlite.data;

import java.io.Serializable;

import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Entity;
/**
 * @author Robert
 *
 */
@Entity
public class Attachment extends EntityBase implements Serializable {
	private String	fileName;
    private byte[]	attachment;
    private Long	emailKeyValue;
    
	public byte[] getAttachment() {
		return attachment;
	}
	public void setAttachment(byte[] attachment) {
		this.attachment = attachment;
	}
	public Long getEmail() {
		return emailKeyValue;
	}
	public void setEmail(Long email) {
		emailKeyValue = email;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

}
