package com.isc.dao;

import java.util.List;
import org.springframework.stereotype.Repository;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.isc.model.*;

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
	public void addTimetable(Timetable Timetable) {
		session.getCurrentSession().save(Timetable);
	}

	@Override
	public void deleteTimetable(int id) {
		session.getCurrentSession().delete(getTimetable(id));
	}

	@Override
	public void updateTimetable(Timetable Timetable) {
		session.getCurrentSession().update(Timetable);
	}

}
