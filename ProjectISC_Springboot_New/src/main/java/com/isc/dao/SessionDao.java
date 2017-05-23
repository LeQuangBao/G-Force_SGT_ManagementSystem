package com.isc.dao;

import java.util.List;

import com.isc.model.Session;

public interface SessionDao {
	public List<Session> getAllSessions();

	public Session getSession(int id);

	public void addSession(Session Session);

	public void deleteSession(int id);

	public void updateSession(Session Session);

}
