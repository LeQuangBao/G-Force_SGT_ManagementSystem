package com.isc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isc.dao.TimeDao;
import com.isc.model.Time;

@Service
public class TimeServiceImpl implements TimeService{

	@Autowired
	private TimeDao timeDao;
	
	@Transactional
	public List<Time> getAllTimes() {
		return timeDao.getAllTimes();
	}

	@Transactional
	public Time getTime(int id) {
		return timeDao.getTime(id);
	}

	@Transactional
	public void addTime(Time time) {
		timeDao.addTime(time);
	}

	@Transactional
	public void deleteTime(int id) {
		timeDao.deleteTime(id);		
	}

	@Transactional
	public void updateTime(Time time) {
		timeDao.updateTime(time);
	}
}
