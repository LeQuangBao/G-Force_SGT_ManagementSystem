package com.isc.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isc.dao.InstructorDao;
import com.isc.dao.RegistrarDao;
import com.isc.model.Instructor;
import com.isc.model.Registrar;

@Service
public class RegistrarServiceImpl implements RegistrarService {

	@Autowired
	private RegistrarDao registrarDao;
	@Transactional
	public List<Registrar>getAllRegistrars()
	{
		return registrarDao.getAllRegistrars();
	}
	@Transactional
	public Registrar getRegistrar(int id)
	{
		return registrarDao.getRegistrar(id);
	}
	@Transactional
	public void addRegistrar(Registrar registrar)
	{
		registrarDao.addRegistrar(registrar);
	}
	@Transactional
	public void deleteRegistrar(int id)
	{
		registrarDao.deleteRegistrar(id);
	}
	@Transactional
	public void updateRegistrar(Registrar registrar)
	{
		registrarDao.updateRegistrar(registrar);
	}
	@Transactional
	public void resetPassword(int id)
	{
		Registrar registrar =registrarDao.getRegistrar(id);
		registrar.setPassword("123456");
		registrarDao.updateRegistrar(registrar);
	}
	


}
