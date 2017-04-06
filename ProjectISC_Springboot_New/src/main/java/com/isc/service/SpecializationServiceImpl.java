package com.isc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isc.dao.SpecializationDao;
import com.isc.model.Specialization;

@Service
public class SpecializationServiceImpl implements SpecializationService{

	@Autowired
	private SpecializationDao specializationDao;
	
	@Override
	public List<Specialization> getAllSpecializations() {
		return specializationDao.getAllSpecializations();
	}

	@Override
	public Specialization getSpecialization(int id) {
		return specializationDao.getSpecialization(id);
	}

	@Override
	public void addSpecialization(Specialization specialization) {
		specializationDao.addSpecialization(specialization);
	}

	@Override
	public void deleteSpecialization(int id) {
		specializationDao.deleteSpecialization(id);		
	}

	@Override
	public void updateSpecialization(Specialization specialization) {
		specializationDao.updateSpecialization(specialization);
	}
}
