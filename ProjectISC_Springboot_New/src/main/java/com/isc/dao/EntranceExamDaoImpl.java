package com.isc.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.EntranceExam;

@Repository
public class EntranceExamDaoImpl implements EntranceExamDao {

	@Autowired
	private SessionFactory session;

	@SuppressWarnings("unchecked")
	public List<EntranceExam> getAllEntranceExams() {
		return session.getCurrentSession().createQuery("from EntranceExam").list();
	}

	public EntranceExam getEntranceExam(int id) {
		return session.getCurrentSession().load(EntranceExam.class, id);
	}

	public void addEntranceExam(EntranceExam entranceExam) {
		session.getCurrentSession().save(entranceExam);
	}

	public void deleteEntranceExam(int id) {
		session.getCurrentSession().delete(getEntranceExam(id));
	}

	public void updateEntranceExam(EntranceExam entranceExam) {
		session.getCurrentSession().update(entranceExam);
	}
}
