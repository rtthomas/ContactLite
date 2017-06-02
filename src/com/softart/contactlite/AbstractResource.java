package com.softart.contactlite;

import java.io.InputStream;
import java.io.InputStreamReader;


import javax.ws.rs.OPTIONS;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import com.google.gson.Gson;
import com.googlecode.objectify.Key;

/**
 * Base class for all resource classes ("*Resource"), providing common methods
 * for response creation and key conversions
 *
 */
public abstract class AbstractResource {

    private Gson gson = new Gson();

    @OPTIONS
    public Response options(){
    	ResponseBuilder builder = Response.status(Response.Status.OK);
    	builder.header("Access-Control-Allow-Origin", "*");
    	builder.header("Access-Control-Allow-Headers", "content-type");
    	builder.header("Access-Control-Allow-Methods", "HEAD,POST,GET,OPTIONS,PUT,DELETE");
    	return builder.build();
    }
    
    protected <T> T extractObject(InputStream is, Class clazz){
    	T object = (T)gson.fromJson(new InputStreamReader(is), clazz);
    	return object;
    }

    protected Response responseOkWithBody(Object o){
    	String responseBody = gson.toJson(o);
    	Response.ResponseBuilder builder = Response.ok(responseBody);
    	builder.header("Access-Control-Allow-Origin", "*");
    	return builder.build();
     }

    /**
     * Creates a 201 Created response with the key as body content
     * @param key the key
     * @return the Response
     */
    protected Response responseCreated(Long key_){
    	String id = gson.toJson(key_);
    	ResponseBuilder builder = Response.status(Response.Status.CREATED).entity(id);
    	builder.header("Access-Control-Allow-Origin", "*");
    	return builder.build();
    }

    protected Response responseNoContent(){
    	ResponseBuilder builder = Response.status(Response.Status.NO_CONTENT);
    	builder.header("Access-Control-Allow-Origin", "*");
    	return builder.build();
    }

    protected String keyToString(Key key){
    	return key.getString();
    }

    protected Key keyFromString(String s){
    	return Key.create(s);
    }
}
