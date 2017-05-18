package com.isc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isc.dao.SchoolDao;
import com.isc.model.School;

@Service
public class SchoolServiceImpl implements SchoolService {
	@Autowired
	private SchoolDao schoolDao;

	@Transactional
	public List<School> getAllSchools() {

		return schoolDao.getAllSchools();
	}

	@Transactional
	public School getSchool(int id) {
		// TODO Auto-generated method stub
		return schoolDao.getSchool(id);
	}

	@Transactional
	public void addSchool(School school) {
		schoolDao.addSchool(school);

	}

	@Transactional
	public void deleteSchool(int id) {
		schoolDao.deleteSchool(id);

	}

	@Transactional
	public void updateSchool(School school) {
		schoolDao.updateSchool(school);

	}

}
