package com.softart.contactlite;

import java.io.InputStream;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.softart.contactlite.data.Attachment;
import com.softart.contactlite.data.DataAccess;

import com.googlecode.objectify.Key;

/**
 * Handles requests for attachments
 */
@Path("/attachment")
public class AttachmentResource  extends AbstractResource{

    /**
     * Creates a new resource.
     * @param is input stream to read JSON representation of the resource
     * @return a Response object containing the HTTP response code
     * Normal return code 201 Created
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response create(InputStream is){
    	DataAccess da = new DataAccess();
    	Attachment attachment = extractObject(is, Attachment.class);
    	Key<Attachment> key = da.ofyPut(attachment);
    	return responseCreated(key.getId());
    }

    /**
     * Updates a resource.
     * @param is input stream to read JSON representation of the resource
     * @return a Response object containing the HTTP response code
     * Normal return code 204 No Content
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response update(InputStream is){
    	DataAccess da = new DataAccess();
    	Attachment attachment = extractObject(is, Attachment.class);
    	return responseNoContent();
    }

    /**
     * Gets all resources
     * @return  a Response object containing the HTTP response code and a JSON array of resource resources
     * Normal return code 200 OK
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(){
    	DataAccess da = new DataAccess();
    	List<Attachment> list = da.getAll(Attachment.class);
    	return responseOkWithBody(list);
    }

    /**
     * Gets a specified resource
    * @return  a Response object containing the HTTP response code and a JSON representation of the resource
     * Normal return code 200 OK
     */
    @GET
    @Path("{key}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("key") Long id){
    	DataAccess da = new DataAccess();
    	Key<Attachment> key = Key.create(Attachment.class, id);
    	Attachment o = da.ofyFind(key);
    	return responseOkWithBody(o);
    }
}
