package com.softart.contactlite;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.softart.contactlite.data.DataAccess;
import com.softart.contactlite.data.Email;

import com.googlecode.objectify.Key;
import java.util.Date;

/**
 * Handles requests for emails
 */
@Path("/email")
public class EmailResource  extends AbstractResource{

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
    	Email email = extractObject(is, Email.class);
    	Key<Email> key = da.ofyPut(email);
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
    	Email email = extractObject(is, Email.class);
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
    	return responseOkWithBody(null);
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
    	Key<Email> key = Key.create(Email.class, id);
    	Email o = da.ofyFind(key);
    	return responseOkWithBody(o);
    }
}
