package com.isc.dao;

import java.util.List;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.EntranceExam;
import com.isc.model.Intake;
import com.isc.model.School;
import com.isc.model.Specialization;
import com.isc.model.Student;


@Repository
public class StudentDaolmpl implements StudentDao {
	@Autowired
	private SessionFactory session;
	@SuppressWarnings("unchecked")
	
	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		return session.getCurrentSession().createQuery("from Student").list();
	}


	public Student getStudent(int id) {
		
		return session.getCurrentSession().load(Student.class, id);
	}

	@Override
	public void addStudent(Student Student) {
		session.getCurrentSession().save(Student);
		
	}

	@Override
	public void deleteStudent(int id) {
		session.getCurrentSession().delete(getStudent(id));
	}

	
	public void updateStudent(Student Student) {
		session.getCurrentSession().update(Student);
		
	}

	@SuppressWarnings("unchecked")
	public List<School> getallSchool() {
		
		 return session.getCurrentSession().createQuery("from School").list();
	}

	@SuppressWarnings("unchecked")
	public List<Intake> getallintake() {
		 return session.getCurrentSession().createQuery("from Intake").list();
	}

	@SuppressWarnings("unchecked")
	public List<EntranceExam> getallentranceexam() {
		 return session.getCurrentSession().createQuery("from EntranceExam").list();
	}

	@SuppressWarnings("unchecked")
	public List<Specialization> getallspecialization() {
		 return session.getCurrentSession().createQuery("from Specialization").list();
	}

}
