package com.isc.dao;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.SystemException;
import javax.transaction.Transaction;

import org.hibernate.Session;
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
	@Override
	public void addSessiondetail(SessionDetail sessiondetail) {
		sessionFactory.getCurrentSession().save(sessiondetail);
		
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<SessionDetail> getlistsessiondetail(int id){
		List<SessionDetail> list=new ArrayList<SessionDetail>();
		list=sessionFactory.getCurrentSession().createQuery("select a from SessionDetail a where a.session.id= :id").setInteger("id", id).list();
	
		return list;
	}

}
