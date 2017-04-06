package com.isc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isc.dao.SpecializationDao;
import com.isc.model.Specialization;

@Service
public class SpecializationServiceImpl implements SpecializationService{

	@Autowired
	private SpecializationDao specializationDao;
	
	@Transactional
	public List<Specialization> getAllSpecializations() {
		return specializationDao.getAllSpecializations();
	}

	@Transactional
	public Specialization getSpecialization(int id) {
		return specializationDao.getSpecialization(id);
	}

	@Transactional
	public void addSpecialization(Specialization specialization) {
		specializationDao.addSpecialization(specialization);
	}

	@Transactional
	public void deleteSpecialization(int id) {
		specializationDao.deleteSpecialization(id);		
	}

	@Transactional
	public void updateSpecialization(Specialization specialization) {
		specializationDao.updateSpecialization(specialization);
	}
}
