package com.isc.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.Timetable;

@Repository
public class TimetableDaoImpl implements TimetableDao {

	@Autowired
	private SessionFactory session;

	@SuppressWarnings("unchecked")
	@Override
	public List<Timetable> getAllTimetables() {
		return session.getCurrentSession().createQuery("from Timetable").list();
	}

	@Override
	public Timetable getTimetable(int id) {
		return (Timetable) session.getCurrentSession().load(Timetable.class, id);
	}

	@Override
	public void addTimetable(Timetable timetable) {
//		timetable.setTimetableName(Ultility.getMD5(timetable.getTimetableName()));
		session.getCurrentSession().save(timetable);
	}

	@Override
	public void deleteTimetable(int id) {
		session.getCurrentSession().delete(getTimetable(id));
	}

	@Override
	public void updateTimetable(Timetable timetable) {
//		timetable.setTimetableName(Ultility.getMD5(timetable.getTimetableName()));
		session.getCurrentSession().update(timetable);
	}

}
