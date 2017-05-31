package com.isc.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.Iclass;

@Repository
public class ClassDAOImpl implements ClassDAO {
	@Autowired
	private SessionFactory sesion;

	@SuppressWarnings("unchecked")
	public List<Iclass> getAllClass() {
		return sesion.getCurrentSession().createQuery("from Iclass").list();
	}

	public Iclass getIClass(int id) {
		return sesion.getCurrentSession().load(Iclass.class, id);
	}

	public void addIClass(Iclass iclass) {
		sesion.getCurrentSession().save(iclass);

	}

	public void deleteIClass(int id) {
		sesion.getCurrentSession().delete(getIClass(id));

	}

	public void updateIClass(Iclass iclass) {
		sesion.getCurrentSession().update(iclass);

	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Iclass> getIClassByTimetableID(int timetableId) {
		return sesion.getCurrentSession().createQuery("from Iclass c where c.timetable.id = :id")
				.setInteger("id", timetableId).list();
	}

}
