package com.softart.contactlite.data;

import com.googlecode.objectify.annotation.Id;

/**
 * Base class for ann entities
 */
public abstract class EntityBase {
	@Id
	private Long		id;

	public Long getId() {
		return id;
	}
}
