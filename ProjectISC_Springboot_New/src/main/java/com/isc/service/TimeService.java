package com.isc.service;

import java.util.List;

import com.isc.model.Time;


public interface TimeService {

	public List<Time> getAllTimes();

	public Time getTime(int id);

	public void addTime(Time time);

	public void deleteTime(int id);

	public void updateTime(Time time);

}
