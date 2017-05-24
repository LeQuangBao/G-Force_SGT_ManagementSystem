package com.isc.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

public class RoomDaoImpl {

	@Autowired
	private SessionFactory sessionFactory;
}
