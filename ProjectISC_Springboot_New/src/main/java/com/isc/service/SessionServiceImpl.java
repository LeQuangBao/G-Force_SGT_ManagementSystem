package com.isc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isc.dao.SessionDao;
import com.isc.model.Session;

@Service
public class SessionServiceImpl implements SessionService{

	@Autowired
	private SessionDao sessionDao;
	
	@Transactional
	public List<Session> getAllSessions() {
		return sessionDao.getAllSessions();
	}

	@Transactional
	public Session getSession(int id) {
		return sessionDao.getSession(id);
	}

	@Transactional
	public void addSession(Session session) {
		sessionDao.addSession(session);
	}

	@Transactional
	public void deleteSession(int id) {
		sessionDao.deleteSession(id);		
	}

	@Transactional
	public void updateSession(Session session) {
		sessionDao.updateSession(session);
	}
	
}
