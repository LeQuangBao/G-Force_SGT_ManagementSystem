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
	@Override
	public List<Session> getAllSessions() {
		return session.getCurrentSession().createQuery("from Session").list();
	}
	@Override
	public Session getSession(int id) {
		return (Session) session.getCurrentSession().load(Session.class, id);
	}
	@Override
	public void addSession(Session Session) {
		session.getCurrentSession().save(Session);
	}
	@Override
	public void deleteSession(int id) {
		session.getCurrentSession().delete(getSession(id));
	}
	@Override
	public void updateSession(Session Session) {
		session.getCurrentSession().update(Session);
	}

	
}
