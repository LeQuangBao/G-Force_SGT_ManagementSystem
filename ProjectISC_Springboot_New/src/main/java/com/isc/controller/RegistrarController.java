package com.isc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.isc.model.Registrar;
import com.isc.service.RegistrarService;

@RestController
public class RegistrarController {
	@Autowired
	private RegistrarService service;
	@RequestMapping(value="admin/api/registrar",method=RequestMethod.GET)
	public ResponseEntity<List<Registrar>>getAllRegistrars(){
		return new ResponseEntity<>(service.getAllRegistrars(),HttpStatus.OK);
		
	}
	@RequestMapping(value="admin/api/registrar/{id}", method = RequestMethod.GET)
	public ResponseEntity<Registrar>getRegistrar(@PathVariable int id){
		Registrar registrar;
		try {
			registrar=service.getRegistrar(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(registrar,HttpStatus.OK);
	}
	@RequestMapping(value="admin/api/registrar",method=RequestMethod.PUT)
	public ResponseEntity<Void>updateRegistrar(@RequestBody Registrar registrar){
		try {
			service.updateRegistrar(registrar);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	@RequestMapping(value="admin/api/registrar/{id}",method=RequestMethod.DELETE)
	public ResponseEntity<Void>deleteRegistrar(@PathVariable int id)
	{
		try {
			service.deleteRegistrar(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	@RequestMapping(value="admin/api/registrar/reset/{id}",method=RequestMethod.GET)
	public ResponseEntity<Void>resetPassword(@PathVariable int id)
	{
		try {
			service.resetPassword(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
}
