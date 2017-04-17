package com.isc.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isc.dao.InstructorDao;
import com.isc.model.Instructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

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
		instructor.setPassword(new BCryptPasswordEncoder().encode(instructor.getPassword()));
		instructorDao.addInstructor(instructor);

	}

	@Transactional
	public void deleteInstructor(int id) {
		instructorDao.deleteInstructor(id);

	}

	@Transactional
	public void updateInstructor(Instructor instructor) {
		Instructor instructorObj = instructorDao.getInstructor(instructor.getId());
		instructorObj.setUsername(instructor.getUsername());
		instructorObj.setLastname(instructor.getLastname());
		instructorObj.setFirstname(instructor.getFirstname());
		instructorObj.setBirthday(instructor.getBirthday());
		instructorObj.setEmail(instructor.getEmail());
		instructorObj.setAddress(instructor.getAddress());
		instructorObj.setPhone(instructor.getPhone());
		instructorObj.setImage(instructor.getImage());
		instructorObj.setDegree(instructor.getDegree());
		instructorObj.setStatus(instructor.isStatus());
		instructorDao.updateInstructor(instructorObj);

	}

	@Transactional
	public void resetPassword(Instructor instructor) {
		Instructor instructorObj = instructorDao.getInstructor(instructor.getId());
		instructorObj.setPassword(new BCryptPasswordEncoder().encode(instructor.getPassword()));
		instructorDao.updateInstructor(instructorObj);
	}

}
