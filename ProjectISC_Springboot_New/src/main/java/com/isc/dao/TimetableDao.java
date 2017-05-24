package com.isc.dao;

import java.util.List;

import com.isc.model.Timetable;

public interface TimetableDao {
	public List<Timetable> getAllTimetables();
	
	public Timetable getTimetable(int id);
	
	public void addTimetable(Timetable timetable);
	
	public void deleteTimetable(int id);
	
	public void updateTimetable(Timetable timetable);
}
