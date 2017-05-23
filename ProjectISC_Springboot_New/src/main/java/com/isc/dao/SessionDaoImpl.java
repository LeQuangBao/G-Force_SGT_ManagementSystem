package com.isc.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.Session;

@Repository
public class SessionDaoImpl implements SessionDao {

	@Autowired
	private SessionFactory session;

	@SuppressWarnings("unchecked")
	
	public List<Session> getAllSessions() {
		return session.getCurrentSession().createQuery("from Session").list();
	}

	public Session getSession(int id) {
		return session.getCurrentSession().load(Session.class, id);
	}

	public void addSession(Session Session) {
		session.getCurrentSession().save(Session);
	}

	public void deleteSession(int id) {
		session.getCurrentSession().delete(getSession(id));
	}

	public void updateSession(Session Session) {
		session.getCurrentSession().update(Session);
	}

	
}
