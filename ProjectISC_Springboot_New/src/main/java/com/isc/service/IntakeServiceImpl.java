package com.isc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isc.dao.IntakeDao;
import com.isc.model.Intake;;

@Service
public class IntakeServiceImpl implements IntakeService {
	@Autowired
	private IntakeDao intakeDao;

	@Transactional
	public List<Intake> getAllIntakes() {

		return intakeDao.getAllIntakes();
	}

	@Transactional
	public Intake getIntake(int id) {
		// TODO Auto-generated method stub
		return intakeDao.getIntake(id);
	}

	@Transactional
	public void addIntake(Intake intake) {
		intakeDao.addIntake(intake);

	}

	@Transactional
	public void deleteIntake(int id) {
		intakeDao.deleteIntake(id);

	}

	@Transactional
	public void updateIntake(Intake intake) {
		intakeDao.updateIntake(intake);

	}

}
