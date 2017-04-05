package com.isc.dao;

import java.util.List;

import com.isc.model.School;

public interface SchoolDao {
	public List<School> getAllSchools();

	public School getSchool(int id);

	public void addSchool(School school);

	public void deleteSchool(int id);

	public void updateSchool(School school);
}
