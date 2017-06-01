package com.isc.dao;

import java.util.Date;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.SessionDetail;
import com.isc.model.Time;

@Repository
public class TimeDaoImpl implements TimeDao {
	@Autowired
	private SessionFactory session;

	@SuppressWarnings("unchecked")
	@Override
	public List<Time> getAllTimes() {
		return session.getCurrentSession().createQuery("from Time").list();
	}

	@Override
	public Time getTime(int id) {
		return session.getCurrentSession().load(Time.class, id);
	}

	@Override
	public List<Time> getTimeByClassId(int classId) {
		return session.getCurrentSession().createQuery("from Time t where t.iclass.id = :id").setInteger("id", classId)
				.list();
	}

	@Override
	public void addTime(Time time) {
		session.getCurrentSession().save(time);
	}

	@Override
	public void deleteTime(int id) {
		session.getCurrentSession().delete(getTime(id));
	}

	@Override
	public void updateTime(Time time) {
		session.getCurrentSession().update(time);
	}

	@Override
	public List<Time> getTimeByDateAndSession(Date date, SessionDetail sessionDetail) {
		return session.getCurrentSession()
				.createQuery("from Time t where t.date = :date and t.sessionDetail.id = :sessionDetailId")
				.setDate("date", date).setInteger("sessionDetailId", sessionDetail.getId()).list();
	}

}
