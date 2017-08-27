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

import com.softart.contactlite.data.DataAccess;
import com.softart.contactlite.data.EntityBase;
import com.softart.contactlite.data.Person;

import com.googlecode.objectify.Key;

/**
 * Handles requests for persons
 */
@Path("/person")
public class PersonResource  extends AbstractResource{

    /**
     * Creates a new person.
     * @param is input stream to read JSON representation of the person
     * @return a Response object containing the HTTP response code
     * Normal return code 201 Created
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response create(InputStream is){
    	DataAccess da = new DataAccess();
    	Person person = extractObject(is, Person.class);
    	Key<EntityBase> key = da.ofyPut(person);
    	return responseCreated(key.getId());
    }

    /**
     * Updates a person.
     * @param is input stream to read JSON representation of the person
     * @return a Response object containing the HTTP response code
     * Normal return code 204 No Content
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response update(InputStream is){
    	DataAccess da = new DataAccess();
    	Person person = extractObject(is, Person.class);
    	da.ofyPut(person);
    	return responseNoContent();
    }

    /**
     * Gets all resources
     * @return  a Response object containing the HTTP response code and a JSON array of persons
     * Normal return code 200 OK
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(){
    	DataAccess da = new DataAccess();
    	List<Person> list = da.getAll(Person.class);
    	return responseOkWithBody(list);
    }

    /**
     * Gets a specified person
    * @return  a Response object containing the HTTP response code and a JSON representation of the person
     * Normal return code 200 OK
     */
    @GET
    @Path("{key}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("key") Long id){
    	DataAccess da = new DataAccess();
    	Key<Person> key = Key.create(Person.class, id);
    	Person o = da.ofyFind(key);
    	return responseOkWithBody(o);
    }
}
