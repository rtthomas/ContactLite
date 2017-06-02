package com.softart.contactlite.data;

import com.googlecode.objectify.annotation.Id;

public abstract class EntityBase {
	@Id
	private Long		id;

	public Long getId() {
		return id;
	}
}
