package com.isc.service;

import java.util.List;

import com.isc.model.Subject;;

public interface SubjectService {
	
	public List<Subject> getAllSubjects();
	
	public Subject getSubject(int id);
	
	public void addSubject(Subject subject);
	
	public void deleteSubject(int id);
	
	public void updateSubject(Subject subject);

}
