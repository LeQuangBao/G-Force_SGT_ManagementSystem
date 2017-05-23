package com.isc.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isc.dao.SessionDao;
import com.isc.model.Session;
@Service
public class SessionServiceImpl implements SessionService {

	@Autowired
	private SessionDao sessionDao;

	@Transactional
	public List<Session> getAllSessions() {
		// TODO Auto-generated method stub
		return sessionDao.getAllSessions();
	}

	@Transactional
	public Session getSession(int id) {
		// TODO Auto-generated method stub
		return sessionDao.getSession(id);
	}

	@Transactional
	public void addSession(Session Session) {
		sessionDao.addSession(Session);

	}

	@Transactional
	public void deleteSession(int id) {
		sessionDao.deleteSession(id);
	}

	@Transactional
	public void updateSession(Session Session) {
		sessionDao.updateSession(Session);

	}

}
