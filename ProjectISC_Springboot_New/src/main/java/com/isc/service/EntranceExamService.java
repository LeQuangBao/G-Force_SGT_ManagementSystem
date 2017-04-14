package com.isc.service;

import java.util.List;

import com.isc.model.EntranceExam;

public interface EntranceExamService {
	public List<EntranceExam> getAllEntranceExams();

	public EntranceExam getEntranceExam(int id);

	public void addEntranceExam(EntranceExam entranceExam);

	public void deleteEntranceExam(int id);

	public void updateEntranceExam(EntranceExam entranceExam);

}
