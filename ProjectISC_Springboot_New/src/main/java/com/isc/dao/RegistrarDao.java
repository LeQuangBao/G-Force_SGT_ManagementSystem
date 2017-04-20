package com.isc.dao;

import java.util.List;


import com.isc.model.Registrar;;

public interface RegistrarDao {
	public List<Registrar>getAllRegistrars();
	public Registrar getRegistrar(int id);
	public void addRegistrar(Registrar registrar);
	public void deleteRegistrar(int id);
	public void updateRegistrar(Registrar registrar);
}
