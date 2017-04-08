package com.isc.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.Subject;

@Repository
public class SubjectDaoImpl implements SubjectDao {
	@Autowired
	private SessionFactory session;
	
	@SuppressWarnings("unchecked")
	@Override
	public List <Subject> getAllSubjects(){
		return session.getCurrentSession().createQuery("from Subject").list();
	}
	
	@Override
	public Subject getSubject(int id) {
		return (Subject) session.getCurrentSession().load(Subject.class, id);
	}

	@Override
	public void addSubject(Subject subject) {
		session.getCurrentSession().save(subject);
	}

	@Override
	public void deleteSubject(int id) {
		session.getCurrentSession().delete(getSubject(id));
	}

	@Override
	public void updateSubject(Subject subject) {
		session.getCurrentSession().update(subject);
	}
	
}
