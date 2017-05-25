package com.isc.dao;

import java.util.List;

import com.isc.model.SessionDetail;

public interface SessionDetailDao {
	
	public List<SessionDetail> getAllSessionDetailBySessionId(int sessionId);
	
}
