/**
 * 
 */
package com.softart.contactlite.data;

import java.io.Serializable;

import javax.persistence.Id;

import com.googlecode.objectify.Key;
/**
 * @author Robert
 *
 */
public class Attachment implements Serializable {
	@Id
	private Long	id;
	private String	fileName;
    private byte[]	attachment;
    private Long	emailKeyValue;
    
	public Long getAttachmentId() {
		return id;
	}
	public byte[] getAttachment() {
		return attachment;
	}
	public void setAttachmentId(Long id) {
		this.id = id;
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
