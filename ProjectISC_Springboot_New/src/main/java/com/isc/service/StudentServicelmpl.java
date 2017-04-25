package com.isc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.isc.model.EntranceExam;
import com.isc.model.Instructor;
import com.isc.model.Intake;
import com.isc.model.School;
import com.isc.model.Specialization;
import com.isc.model.Student;
import com.isc.dao.StudentDao;
@Service
public class StudentServicelmpl implements StudentService  {

	@Autowired
	private StudentDao studentDao;

	@Transactional
	public List<Student> getAllStudents() {
		
		return studentDao.getAllStudents();
	}

	@Transactional
	public Student getStudent(int id) {
		return studentDao.getStudent(id);
	}
	@Transactional
	public void resetpassword(Student student)
	{
		Student instructorObj = studentDao.getStudent(student.getId());
		instructorObj.setPassword(new BCryptPasswordEncoder().encode(student.getPassword()));
		studentDao.updateStudent(instructorObj);
	}

	@Transactional
	public void addStudent(Student Student) {
		studentDao.addStudent(Student);
		
	}

	@Transactional
	public void deleteStudent(int id) {
		studentDao.deleteStudent(id);
		
	}

	@Transactional
	public void updateStudent(Student Student) {
		studentDao.updateStudent(Student);
		
	}

	@Transactional
	public List<School> getallSchool() {
		return studentDao.getallSchool();
	}

	@Transactional
	public List<Intake> getallintake() {
		return studentDao.getallintake();
	}

	@Transactional
	public List<EntranceExam> getallentranceexam() {
		return studentDao.getallentranceexam();
	}

	@Transactional
	public List<Specialization> getallspecialization() {
		return studentDao.getallspecialization();
	}

}
