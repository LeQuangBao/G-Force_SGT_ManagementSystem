package com.isc.dao;

import java.util.List;

import com.isc.model.Specialization;

public interface SpecializationDao {
	public List<Specialization> getAllSpecializations();
	
	public Specialization getSpecialization(int id);
	
	public void addSpecialization(Specialization specialization);
	
	public void deleteSpecialization(int id);
	
	public void updateSpecialization(Specialization specialization);
}
