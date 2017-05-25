package com.isc.service;

import java.util.List;

import com.isc.model.Session;

public interface SessionService {
	public List<Session> getAllSessions();
	
	public Session getSession(int id);
	
	public void addSession(Session session);
	
	public void deleteSession(int id);
	
	public void updateSession(Session session);
	
	
}
