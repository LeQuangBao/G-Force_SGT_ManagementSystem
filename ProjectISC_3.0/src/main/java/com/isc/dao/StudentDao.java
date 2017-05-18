package com.isc.dao;

import java.util.List;

import com.isc.model.Student;
import com.isc.model.School;
import com.isc.model.Intake;
import com.isc.model.EntranceExam;
import com.isc.model.Specialization;

public interface StudentDao {
	public List<Student> getAllStudents();

	public Student getStudent(int id);

	public void addStudent(Student Student);

	public void deleteStudent(int id);

	public void updateStudent(Student Student);

	public List<School> getallSchool();

	public List<Intake> getallintake();

	public List<EntranceExam> getallentranceexam();

	public List<Specialization> getallspecialization();
	public void resetpassword(Student student);
	


}
