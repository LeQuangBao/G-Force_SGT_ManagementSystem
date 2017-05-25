package com.isc.service;

import java.util.List;

import com.isc.model.SessionDetail;


public interface SessionDetailService {
	public void deleteSessionDetail(int id);
	public SessionDetail getSessionDetail(int id);
	public void addSessionDetail(SessionDetail sessiondetail);
	public List<SessionDetail> getlistsessiondetail(int id);
}
