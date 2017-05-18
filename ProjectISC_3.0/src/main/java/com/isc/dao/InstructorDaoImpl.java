package com.isc.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.Instructor;

@Repository
public class InstructorDaoImpl implements InstructorDao {

	@Autowired
	private SessionFactory session;

	@SuppressWarnings("unchecked")
	public List<Instructor> getAllInstructors() {
		return session.getCurrentSession().createQuery("from Instructor").list();
	}

	public Instructor getInstructor(int id) {
		return session.getCurrentSession().load(Instructor.class, id);
	}

	public void addInstructor(Instructor instructor) {
		session.getCurrentSession().save(instructor);
	}

	public void deleteInstructor(int id) {
		session.getCurrentSession().delete(getInstructor(id));
	}

	public void updateInstructor(Instructor instructor) {
		session.getCurrentSession().update(instructor);
	}

}
