package com.softart.contactlite.data;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

//import com.sun.jersey.core.util.Base64;
import com.googlecode.objectify.NotFoundException;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.Query;
import com.google.appengine.api.datastore.QueryResultIterable;
import com.google.appengine.api.datastore.QueryResultIterator;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.util.DAOBase;

public class DataAccess extends DAOBase {
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
	
	public Key<Object> put(){
		Object o = new Object();
		ofyPut(o);
//		Key<Publication> key = new Key<Publication>(Publication.class, publication.id);
//		return key;
		return null;
	}
	
	public <T> List<T> getAll(Class<T> clazz){
		Query<T> q = ofy().query(clazz);
		QueryResultIterator<T> i = q.fetch().iterator();
		List<T> list = new ArrayList<T>();
		while (i.hasNext()){
			list.add(i.next());
		}
		return list;
	}
	
	public Key ofyPut(Object o){
		Key key = ofy().put(o);
		if (LOG){
//			log.log(Level.INFO, "+++ Put " + o.getClass().getName() + "\n" + o.toString());
		}
		return key;
	}
	public <T> T ofyFind(Key<T> key){
		T o = ofy().find(key);
		if (o == null){
			if (LOG){
//				log.log(Level.SEVERE, "+++ Find\n" + "--- Not found key = " + (key.getName() == null ? key.getId() : key.getName()));
			}
		}
		else {
			if (LOG){
//				log.log(Level.INFO, "+++ Find " + o.getClass().getName() + "\n" + o.toString());
			}
		}
		return o;
	}
	public Object ofyFind(Class clazz, Key key){
		Object o;
		if (key.getName() == null){
			o = ofy().find(clazz, key.getId());
		}
		else {
			o = ofy().find(clazz, key.getName());
		}
		if (o == null){
			if (LOG){
//				log.log(Level.SEVERE, "+++ Find\n" + "--- Not found key = " + (key.getName() == null ? key.getId() : key.getName()));
			}
		}
		else {
			if (LOG){
//				log.log(Level.INFO, "+++ Find " + o.getClass().getName() + "\n" + o.toString());
			}
		}
		return o;
	}
}

