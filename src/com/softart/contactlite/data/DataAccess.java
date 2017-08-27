package com.softart.contactlite.data;

import java.util.Iterator;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Key;
import static com.googlecode.objectify.ObjectifyService.ofy;

/**
 * Implements low level access to the Datastore via Objectify
 */
public class DataAccess {
	private static final Logger log = Logger.getLogger(DataAccess.class.getName());
	
	static {
		try {
			ObjectifyService.register(Class.forName("com.softart.contactlite.data.Appointment"));
			ObjectifyService.register(Class.forName("com.softart.contactlite.data.Company"));
			ObjectifyService.register(Class.forName("com.softart.contactlite.data.Contact"));
			ObjectifyService.register(Class.forName("com.softart.contactlite.data.Email"));
			ObjectifyService.register(Class.forName("com.softart.contactlite.data.EmailContent"));
			ObjectifyService.register(Class.forName("com.softart.contactlite.data.Person"));
			ObjectifyService.register(Class.forName("com.softart.contactlite.data.Position"));
		}
		catch (ClassNotFoundException e){
			log.warning(e.getMessage());
		}		
	}

	public <T> List<T> getAll(Class<T> clazz){
		List<T> list = ofy().load().type(clazz).list();
		StringBuilder sb = new StringBuilder();
		sb.append("Found " + list.size());
		Iterator<T> i = list.iterator();
		while (i.hasNext()){
			sb.append("\n     ").append(((EntityBase)i.next()).getId());
		}
		log.log(Level.INFO, sb.toString()); 
		return list;
	}
	
	public Key<EntityBase> ofyPut(EntityBase o){
		ofy().save().entity(o).now();
		Key<EntityBase> key = Key.create(o.getClass(), o.getId());
		return key;
	}
	
	public <T> void ofyDelete(Class<T> clazz, long id){
		Key<T> key = Key.create(clazz, id);
		ofy().delete().key(key).now();
	}
	
	public <T> T ofyFind(Key<T> key){
		T o = ofy().load().key(key).now();
		return o;
	}
	
	public <T> List<T> query(Class<T> clazz, String condition, Object value){		
		return ofy().load().type(clazz).filter(condition, value).list();
	}
}

