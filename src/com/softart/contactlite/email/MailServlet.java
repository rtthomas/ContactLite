package com.softart.contactlite.email;

import java.io.IOException;
import java.util.Date;
import java.util.Properties;
import java.util.logging.Logger;

import javax.mail.BodyPart;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.googlecode.objectify.Key;
import com.softart.contactlite.data.DataAccess;
import com.softart.contactlite.data.Email;
import com.softart.contactlite.data.EmailContent;
import com.softart.contactlite.data.EntityBase;

/**
 * Processes emails sent to the application
 */
public class MailServlet extends HttpServlet {

	private static final Logger log = Logger.getLogger(MailServlet.class.getName());
	private enum State {START, FORWARD, READING};

	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		Properties props = new Properties();
		Session session = Session.getDefaultInstance(props, null);
		try {
			MimeMessage message = new MimeMessage(session, req.getInputStream());
			
			String sender = message.getHeader("From")[0];
			String receiver = message.getHeader("To")[0];
			String subject = message.getHeader("Subject")[0];
			Date date = new Date(message.getHeader("Date")[0]);			
			
			Multipart parts = (Multipart)message.getContent();
			for (int i = 0; i < parts.getCount(); i++){
				BodyPart part = parts.getBodyPart(i);
				String type = part.getContentType();
				// Process only text part
				if (type.startsWith("text/plain")){
					// Check if message forwarded, and if so, strip out forward heading
					String text = removeForward((String)part.getContent());
					// Store the body text separately
			    	DataAccess da = new DataAccess();
					EmailContent content = new EmailContent(text);
					Key<EntityBase> key = da.ofyPut(content);
					Email email = new Email(sender, receiver, date, subject, key.getId());
			    	da.ofyPut(email);
				}
			}
		} 
		catch (MessagingException e) {
			System.out.println(e);
		}
	}

	private String removeForward(String content){
		StringBuilder sb = new StringBuilder();
		State state = State.START;
		String lines[] = content.split("\n");
		for (String line: lines){
			if (state == State.START){
				if (line.length() == 0){
					continue;
				}				
				if (line.indexOf("Forwarded") >= 0){
					state = State.FORWARD;
					continue;
				}
				state = State.READING;
			}
			if (state == State.FORWARD) {
				if (line.length() > 0){
					continue;
				}
				state = State.READING;
			}
			sb.append(line).append("\n");
			
		}
		return sb.toString();
	}
}
