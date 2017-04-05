package com.isc.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.School;

@Repository
public class SchoolDaoImpl implements SchoolDao {

	@Autowired
	private SessionFactory session;

	@SuppressWarnings("unchecked")
	@Override
	public List<School> getAllSchools() {

		return session.getCurrentSession().createQuery("from School").list();
	}

	@Override
	public School getSchool(int id) {

		return (School) session.getCurrentSession().load(School.class, id);
	}

	@Override
	public void addSchool(School school) {
		session.getCurrentSession().save(school);

	}

	@Override
	public void deleteSchool(int id) {
		session.getCurrentSession().delete(getSchool(id));

	}

	@Override
	public void updateSchool(School school) {
		session.getCurrentSession().update(school);

	}

}
