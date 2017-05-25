package com.isc.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.SessionDetail;
@Repository
public class SessionDetailDaoImpl implements SessionDetailDao{

	@Autowired
	private SessionFactory sessionFactory;
	
	//@Override
//	public List<SessionDetail> getAllSessionDetailBySessionId(int sessionId) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	
	@Override
	public void deleteSessionDetail(int id) {
		sessionFactory.getCurrentSession().delete(getSessionDetail(id));
		
	}
	@Override
	public SessionDetail getSessionDetail(int id) {
		 return (SessionDetail) sessionFactory.getCurrentSession().load(SessionDetail.class, id);
		
	}

}
