package com.isc.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.Specialization;

@Repository
public class SpecializationDaoImpl implements SpecializationDao{

	@Autowired
	private SessionFactory session;	
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Specialization> getAllSpecializations() {
		return session.getCurrentSession().createQuery("from Specialization").list();
	}

	@Override
	public Specialization getSpecialization(int id) {
		return (Specialization) session.getCurrentSession().load(Specialization.class, id);
	}

	@Override
	public void addSpecialization(Specialization specialization) {
		session.getCurrentSession().save(specialization);
	}

	@Override
	public void deleteSpecialization(int id) {
		session.getCurrentSession().delete(getSpecialization(id));
	}

	@Override
	public void updateSpecialization(Specialization specialization) {
		session.getCurrentSession().update(specialization);
	}

}
