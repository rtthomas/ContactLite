package com.softart.contactlite.data;

import java.util.Iterator;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Key;
import static com.googlecode.objectify.ObjectifyService.ofy;

public class DataAccess {
	private static final Logger log = Logger.getLogger(DataAccess.class.getName());
	private static final boolean	LOG = true;
	
	static {
		try {
			ObjectifyService.register(Class.forName("com.softart.contactlite.data.Appointment"));
			ObjectifyService.register(Class.forName("com.softart.contactlite.data.Attachment"));
			ObjectifyService.register(Class.forName("com.softart.contactlite.data.Company"));
			ObjectifyService.register(Class.forName("com.softart.contactlite.data.Contact"));
			ObjectifyService.register(Class.forName("com.softart.contactlite.data.Email"));
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
	
	public Key ofyPut(EntityBase o){
		ofy().save().entity(o).now();
		Key key = Key.create(o.getClass(), o.getId());
		if (LOG){
//			log.log(Level.INFO, "+++ Put " + o.getClass().getName() + "\n" + o.toString());
		}
		return key;
	}
	
	public <T> void ofyDelete(Class<T> clazz, long id){
		Key key = Key.create(clazz, id);
		ofy().delete().key(key).now();
	}
	
	public <T> T ofyFind(Key<T> key){
		T o = ofy().load().key(key).now();
		if (o == null){
			if (LOG){
//				log.log(Level.SEVERE, "+++ Find\n" + "--- Not found key = " + (key.getName() == null ? key.getId() : key.getName()));
			}
		}
		return o;
	}
}

