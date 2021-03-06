package com.isc.dao;

import java.util.Date;
import java.util.List;

import com.isc.model.SessionDetail;
import com.isc.model.Time;

public interface TimeDao {
	public List<Time> getAllTimes();

	public Time getTime(int id);
	
	public List<Time> getTimeByClassId(int classId);

	public void addTime(Time time);

	public void deleteTime(int id);

	public void updateTime(Time time);

	public List<Time> getTimeByDateAndSession(Date date, SessionDetail sessionDetail);
	
	public List<Time> getTimeByTimeTableId(int timetableId);

}
