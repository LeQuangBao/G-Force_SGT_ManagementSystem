package com.isc.service;

import java.util.List;

import com.isc.model.Intake;

public interface IntakeService {
	public List<Intake> getAllIntakes();

	public Intake getIntake(int id);

	public void addIntake(Intake intake);

	public void deleteIntake(int id);

	public void updateIntake(Intake intake);
}
