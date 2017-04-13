package com.isc.service;

import java.util.List;

import com.isc.model.Instructor;

public interface InstructorService {
	public List<Instructor> getAllInstructors();

	public Instructor getInstructor(int id);

	public void addInstructor(Instructor instructor);

	public void deleteInstructor(int id);

	public void updateInstructor(Instructor instructor);

	public void resetPassword(int id);
}
