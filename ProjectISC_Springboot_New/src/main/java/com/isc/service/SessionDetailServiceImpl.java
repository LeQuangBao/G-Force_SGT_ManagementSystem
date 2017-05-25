package com.isc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isc.dao.SessionDetailDao;
import com.isc.model.SessionDetail;
@Service
public class SessionDetailServiceImpl implements SessionDetailService {

	@Autowired
	private SessionDetailDao sessiondetailDao;

	@Transactional
	public void deleteSessionDetail(int id) {
		sessiondetailDao.deleteSessionDetail(id);
		
	}

	@Transactional
	public SessionDetail getSessionDetail(int id) {
		// TODO Auto-generated method stub
		return sessiondetailDao.getSessionDetail(id);
	}

}
