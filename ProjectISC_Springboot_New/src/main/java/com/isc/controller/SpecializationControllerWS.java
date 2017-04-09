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

import com.isc.model.Specialization;
import com.isc.service.SpecializationService;

@RestController
public class SpecializationControllerWS {
	@Autowired
	private SpecializationService service;

	@RequestMapping(value = "/api/specialization", method = RequestMethod.GET)
	public ResponseEntity<List<Specialization>> Specializations() {
		return new ResponseEntity<>(service.getAllSpecializations(), HttpStatus.OK);
	}

	@RequestMapping(value = "/api/specialization/{id}", method = RequestMethod.GET)
	public ResponseEntity<Specialization> getSpecialization(@PathVariable int id) {
		Specialization specialization;
		try {
			specialization = service.getSpecialization(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(specialization, HttpStatus.OK);
	}

	@RequestMapping(value = "api/specialization", method = RequestMethod.POST)
	public ResponseEntity<Void> addSpecialization(@RequestBody Specialization specialization) {
		try {
			service.addSpecialization(specialization);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "api/specialization/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteSpecialization(@PathVariable int id) {
		try {
			service.deleteSpecialization(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "/api/specialization", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateSpecialization(@RequestBody Specialization specialization){
		try {
			service.updateSpecialization(specialization);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

}
