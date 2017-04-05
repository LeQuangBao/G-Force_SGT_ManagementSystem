package com.isc.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.Intake;

@Repository
public class IntakeDaoImpl implements IntakeDao {

	@Autowired
	private SessionFactory session;

	@SuppressWarnings("unchecked")
	@Override
	public List<Intake> getAllIntakes() {

		return session.getCurrentSession().createQuery("from Intake").list();
	}

	@Override
	public Intake getIntake(int id) {

		return (Intake) session.getCurrentSession().load(Intake.class, id);
	}

	@Override
	public void addIntake(Intake intake) {
		session.getCurrentSession().save(intake);

	}

	@Override
	public void deleteIntake(int id) {
		session.getCurrentSession().delete(getIntake(id));

	}

	@Override
	public void updateIntake(Intake intake) {
		session.getCurrentSession().update(intake);

	}

}
