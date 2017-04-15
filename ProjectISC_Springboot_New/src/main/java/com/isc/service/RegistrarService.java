package com.isc.service;

import java.util.List;

import com.isc.model.Instructor;
import com.isc.model.Registrar;

public interface RegistrarService {
	public List<Registrar>getAllRegistrars();
	public Registrar getRegistrar(int id);
	public void addRegistrar(Registrar registrar);
	public void deleteRegistrar(int id);
	public void updateRegistrar(Registrar registrar);
	public void resetPassword(int id);
}
