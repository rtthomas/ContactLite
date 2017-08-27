package com.softart.contactlite;

import java.io.InputStream;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.googlecode.objectify.Key;
import com.softart.contactlite.data.DataAccess;
import com.softart.contactlite.data.Email;
import com.softart.contactlite.data.EmailContent;

/**
 * Handles requests for email
 */
@Path("/email")
public class EmailResource extends AbstractResource{
    
	/**
     * Gets all Email objects
     * @return  a Response object containing the HTTP response code and a JSON array of Email objects
     * Normal return code 200 OK
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(){
    	DataAccess da = new DataAccess();
    	List<Email> list = da.getAll(Email.class);
 //   	List<Email> list = da.query(Email.class, "assigned", false);
    	return responseOkWithBody(list);
    }

    /**
     * Updates an Email object 
     * @param is input stream to read JSON representation of the Email object
     * @return a Response object containing the HTTP response code
     * Normal return code 204 No Content
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response update(InputStream is){
    	DataAccess da = new DataAccess();
    	Email email = extractObject(is, Email.class);
    	da.ofyPut(email);
    	return responseNoContent();
    }

    /**
     * Gets the EmailContent object of a specified email
     * @return  a Response object containing the HTTP response code and a JSON representation of the EmailContent object
     * Normal return code 200 OK
     */
    @GET
    @Path("{key}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("key") Long id){
    	DataAccess da = new DataAccess();
    	Key<EmailContent> key = Key.create(EmailContent.class, id);
    	EmailContent o = da.ofyFind(key);
    	return responseOkWithBody(o);
    }
}

