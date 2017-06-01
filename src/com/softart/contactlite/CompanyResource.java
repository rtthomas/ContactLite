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
import javax.ws.rs.DELETE;
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

import com.googlecode.objectify.Key;
import com.softart.contactlite.data.Company;
import com.softart.contactlite.data.DataAccess;

import java.util.Date;

/**
 * Handles requests for companies
 */
@Path("/company")
public class CompanyResource  extends AbstractResource{

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
    	Company company = extractObject(is, Company.class);
    	Key<Company> key = da.ofyPut(company);
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
    	Company company = extractObject(is, Company.class);
    	da.ofyPut(company);
    	return responseNoContent();
    }
    
    /**
     * Deletes a resource. 
     * @param key the entity key
     * @return a Response object containing the HTTP response code
     * Normal return code 204 No Content
     */
    @DELETE
    public Response delete(@QueryParam("key") Long id){
    	DataAccess da = new DataAccess();
    	da.ofyDelete(Company.class, id);
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
    	List<Company> list = da.getAll(Company.class);
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
    	Key<Company> key = Key.create(Company.class, id);
    	Company o = da.ofyFind(key);
    	return responseOkWithBody(o);
    }
}
