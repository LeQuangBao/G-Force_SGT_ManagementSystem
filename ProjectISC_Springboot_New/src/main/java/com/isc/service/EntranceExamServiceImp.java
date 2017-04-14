package com.isc.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isc.dao.EntranceExamDao;
import com.isc.dao.IntakeDao;
import com.isc.model.EntranceExam;
import com.isc.model.Intake;

@Service
public class EntranceExamServiceImp implements EntranceExamService {

	@Autowired
	private EntranceExamDao entranceExamDao;
	@Autowired
	private IntakeDao intakeDao;

	@Transactional
	public List<EntranceExam> getAllEntranceExams() {

		return entranceExamDao.getAllEntranceExams();
	}

	@Transactional
	public EntranceExam getEntranceExam(int id) {

		return entranceExamDao.getEntranceExam(id);
	}

	@Transactional
	public void addEntranceExam(EntranceExam entranceExam) {
		Intake intake = intakeDao.getIntake(entranceExam.getIntake().getId());
		entranceExam.setIntake(intake);
		entranceExamDao.addEntranceExam(entranceExam);
	}

	@Transactional
	public void deleteEntranceExam(int id) {
		entranceExamDao.deleteEntranceExam(id);

	}

	@Transactional
	public void updateEntranceExam(EntranceExam entranceExam) {
		entranceExamDao.updateEntranceExam(entranceExam);

	}

}
