package com.isc.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isc.dao.ClassDAO;
import com.isc.model.Iclass;
@Service
public class ClassServiceImpl implements ClassService{
	@Autowired
private ClassDAO classDao;
	@Transactional
	public List<Iclass> getAllClass() {
		return classDao.getAllClass();
	}

	@Transactional
	public Iclass getIClass(int id) {
		
		return classDao.getIClass(id);
	}

	@Transactional
	public void addIClass(Iclass iclass) {
		classDao.addIClass(iclass);
		
	}

	@Transactional
	public void deleteIClass(int id) {
		classDao.deleteIClass(id);
		
	}

	@Transactional
	public void updateIClass(Iclass iclass) {
		classDao.updateIClass(iclass);
		
	}

	@Override
	public List<Iclass> getIClassByTimetableID(int timetableId) {
		return classDao.getIClassByTimetableID(timetableId);
	}

}
