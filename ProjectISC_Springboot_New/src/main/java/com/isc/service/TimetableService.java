package com.isc.service;

import java.util.List;

import com.isc.model.Timetable;

public interface TimetableService {
	public List<Timetable> getAllTimetables();
	
	public Timetable getTimetable(int id);
	
	public void addTimetable(Timetable timetable);
	
	public void deleteTimetable(int id);
	
	public void updateTimetable(Timetable timetable);
}
