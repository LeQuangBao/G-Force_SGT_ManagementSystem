package com.isc.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isc.dao.InstructorDao;
import com.isc.model.Instructor;

@Service
public class InstructorServiceImpl implements InstructorService {

	@Autowired
	private InstructorDao instructorDao;

	@Transactional
	public List<Instructor> getAllInstructors() {

		return instructorDao.getAllInstructors();
	}

	@Transactional
	public Instructor getInstructor(int id) {
		
		return instructorDao.getInstructor(id);
	}

	@Transactional
	public void addInstructor(Instructor instructor) {
		instructorDao.addInstructor(instructor);

	}

	@Transactional
	public void deleteInstructor(int id) {
		instructorDao.deleteInstructor(id);

	}

	@Transactional
	public void updateInstructor(Instructor instructor) {
		instructorDao.updateInstructor(instructor);

	}

	@Transactional
	public void resetPassword(int id) {
		Instructor instructor = instructorDao.getInstructor(id);
		instructor.setPassword("123456");
		instructorDao.updateInstructor(instructor);
	}

}
