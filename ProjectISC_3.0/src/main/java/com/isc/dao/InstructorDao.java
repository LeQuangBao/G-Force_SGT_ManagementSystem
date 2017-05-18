package com.isc.dao;

import java.util.List;

import com.isc.model.Instructor;;

public interface InstructorDao {
	public List<Instructor> getAllInstructors();

	public Instructor getInstructor(int id);

	public void addInstructor(Instructor instructor);

	public void deleteInstructor(int id);

	public void updateInstructor(Instructor instructor);
}
