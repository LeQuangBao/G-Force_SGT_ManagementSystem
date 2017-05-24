package com.isc.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.isc.model.SessionDetail;

public class SessionDetailDaoImpl implements SessionDetailDao{

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<SessionDetail> getAllSessionDetailBySessionId(int sessionId) {
		// TODO Auto-generated method stub
		return null;
	}

}
