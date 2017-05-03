package com.isc.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.Registrar;

@Repository
public class RegistrarDaoImpl implements RegistrarDao {

	@Autowired
	private SessionFactory session;

	@SuppressWarnings("unchecked")
	public List<Registrar> getAllRegistrars() {
		return session.getCurrentSession().createQuery("from Registrar").list();

	}

	public Registrar getRegistrar(int id) {
		return session.getCurrentSession().load(Registrar.class, id);
	}

	public void addRegistrar(Registrar registrar) {
		session.getCurrentSession().save(registrar);

	}

	public void deleteRegistrar(int id) {
		session.getCurrentSession().delete(getRegistrar(id));
	}

	public void updateRegistrar(Registrar registrar) {
		session.getCurrentSession().update(registrar);
	}

	public Registrar findByUsername(String username) {
		return (Registrar) session.getCurrentSession().createQuery("from Registrar where username = :username")
				.setParameter("username", username).list().get(0);

	}

}
