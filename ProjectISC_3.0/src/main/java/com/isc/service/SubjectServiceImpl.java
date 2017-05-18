package com.isc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isc.dao.SubjectDao;
import com.isc.model.Subject;


@Service
public class SubjectServiceImpl implements SubjectService{
	@Autowired
	private SubjectDao subjectDao;
	
	@Transactional
	public List<Subject> getAllSubjects() {
		return subjectDao.getAllSubjects();
	}

	@Transactional
	public Subject getSubject(int id) {
		return subjectDao.getSubject(id);
	}

	@Transactional
	public void addSubject(Subject subject) {
		subjectDao.addSubject(subject);
	}

	@Transactional
	public void deleteSubject(int id) {
		subjectDao.deleteSubject(id);		
	}

	@Transactional
	public void updateSubject(Subject subject) {
		subjectDao.updateSubject(subject);
	}
}

