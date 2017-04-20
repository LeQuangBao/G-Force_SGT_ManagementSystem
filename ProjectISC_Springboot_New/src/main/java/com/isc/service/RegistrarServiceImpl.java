package com.isc.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import com.isc.dao.RegistrarDao;
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
		registrar.setPassword(new BCryptPasswordEncoder().encode(registrar.getPassword()));
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
		Registrar registrarObj=registrarDao.getRegistrar(registrar.getId());
		registrarObj.setUsername(registrar.getUsername());
		registrarObj.setLastname(registrar.getLastname());
		registrarObj.setFirstname(registrar.getFirstname());
		registrarObj.setBirthday(registrar.getBirthday());
		registrarObj.setEmail(registrar.getEmail());
		registrarObj.setAddress(registrar.getAddress());
		registrarObj.setPhone(registrar.getPhone());
		registrarObj.setImage(registrar.getImage());
		registrarObj.setStatus(registrar.isStatus());
		
		registrarDao.updateRegistrar(registrarObj);
	}
	@Transactional
	public void resetPassword(Registrar registrar)
	{
		Registrar registrarObj =registrarDao.getRegistrar(registrar.getId());
		registrarObj.setPassword(new BCryptPasswordEncoder().encode(registrar.getPassword()));
		registrarDao.updateRegistrar(registrarObj);
	}
	


}
