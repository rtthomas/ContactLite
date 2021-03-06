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

import com.googlecode.objectify.Key;
import com.softart.contactlite.data.Appointment;
import com.softart.contactlite.data.Company;
import com.softart.contactlite.data.DataAccess;
import com.softart.contactlite.data.EntityBase;

/**
 * Handles requests for appointments
 */
@Path("/appointment")
public class AppointmentResource extends AbstractResource{

    /**
     * Creates a new appointment.
     * @param is input stream to read JSON representation of the appointment
     * @return a Response object containing the HTTP response code
     * Normal return code 201 Created
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response create(InputStream is){
    	DataAccess da = new DataAccess();
    	Appointment appointment = extractObject(is, Appointment.class);
    	Key<EntityBase> key = da.ofyPut(appointment);
    	return responseCreated(key.getId());
    }

    /**
     * Updates a appointment.
     * @param is input stream to read JSON representation of the appointment
     * @return a Response object containing the HTTP response code
     * Normal return code 204 No Content
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response update(InputStream is){
    	DataAccess da = new DataAccess();
    	Appointment appointment = extractObject(is, Appointment.class);
    	da.ofyPut(appointment);
    	return responseNoContent();
    }

    /**
     * Gets all appointments.
     * @return  a Response object containing the HTTP response code and a JSON array of appointment
     * Normal return code 200 OK
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(){
    	DataAccess da = new DataAccess();
    	List<Appointment> list = da.getAll(Appointment.class);
    	return responseOkWithBody(list);
    }

    /**
     * Gets a specified appointment
     * @return  a Response object containing the HTTP response code and a JSON representation of the appointment
     * Normal return code 200 OK
     */
    @GET
    @Path("{key}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("key") Long id){
    	DataAccess da = new DataAccess();
    	Key<Appointment> key = Key.create(Appointment.class, id);
    	Appointment o = da.ofyFind(key);
    	return responseOkWithBody(o);
    }
    
    /**
     * Deletes an appointment. 
     * @param key the entity key
     * @return a Response object containing the HTTP response code
     * Normal return code 204 No Content
     */
    @DELETE
    @Path("{key}")
     public Response delete(@PathParam("key") Long id){
    	DataAccess da = new DataAccess();
    	da.ofyDelete(Appointment.class, id);
    	return responseNoContent();
    }
    
}
