package com.softart.contactlite;

import java.io.InputStream;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.softart.contactlite.data.Contact;
import com.softart.contactlite.data.DataAccess;
import com.softart.contactlite.data.Email;
import com.softart.contactlite.data.EntityBase;
import com.googlecode.objectify.Key;

/**
 * Handles requests for contacts
 */
@Path("/contact")
public class ContactResource  extends AbstractResource{

    /**
     * Creates a new contact.
     * @param is input stream to read JSON representation of the contact
     * @return a Response object containing the HTTP response code
     * Normal return code 201 Created
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response create(InputStream is){
    	DataAccess da = new DataAccess();
    	Contact contact = extractObject(is, Contact.class);
    	Key<EntityBase> key = da.ofyPut(contact);
    	return responseCreated(key.getId());
    }

    /**
     * Updates a contact.
     * @param is input stream to read JSON representation of the contact
     * @return a Response object containing the HTTP response code
     * Normal return code 204 No Content
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response update(InputStream is){
    	DataAccess da = new DataAccess();
    	Contact contact = extractObject(is, Contact.class);
    	da.ofyPut(contact);
    	return responseNoContent();
    }

    /**
     * Gets all resources
     * @return  a Response object containing the HTTP response code and a JSON array of contacts
     * Normal return code 200 OK
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(){
    	DataAccess da = new DataAccess();
     	List<Contact> list = da.getAll(Contact.class);
    	return responseOkWithBody(list);
    }

    /**
     * Gets a specified contact
    * @return  a Response object containing the HTTP response code and a JSON representation of the contact
     * Normal return code 200 OK
     */
    @GET
    @Path("{key}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("key") Long id){
    	DataAccess da = new DataAccess();
    	Key<Contact> key = Key.create(Contact.class, id);
    	Contact o = da.ofyFind(key);
    	return responseOkWithBody(o);
    }
    
    /**
     * Deletes a Contact. 
     * @param key the entity key
     * @return a Response object containing the HTTP response code
     * Normal return code 204 No Content
     */
    @DELETE
    @Path("{key}")
     public Response delete(@PathParam("key") Long id){
    	DataAccess da = new DataAccess();
    	da.ofyDelete(Contact.class, id);
    	return responseNoContent();
    }
}
