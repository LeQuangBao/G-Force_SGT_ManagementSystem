package com.isc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isc.dao.TimetableDao;
import com.isc.model.Timetable;

@Service
public class TimetableServiceImpl implements TimetableService{

	@Autowired
	private TimetableDao timetableDao;
	
	@Transactional
	public List<Timetable> getAllTimetables() {
		return timetableDao.getAllTimetables();
	}

	@Transactional
	public Timetable getTimetable(int id) {
		return timetableDao.getTimetable(id);
	}

	@Transactional
	public void addTimetable(Timetable timetable) {
		timetableDao.addTimetable(timetable);
	}

	@Transactional
	public void deleteTimetable(int id) {
		timetableDao.deleteTimetable(id);		
	}

	@Transactional
	public void updateTimetable(Timetable timetable) {
		timetableDao.updateTimetable(timetable);
	}
}
