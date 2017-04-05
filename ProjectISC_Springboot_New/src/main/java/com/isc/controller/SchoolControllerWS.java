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

import com.isc.model.School;
import com.isc.service.SchoolService;

@RestController
public class SchoolControllerWS {
	@Autowired
	private SchoolService service;

	@RequestMapping(value = "/api/school", method = RequestMethod.GET)
	public ResponseEntity<List<School>> Schools() {

		return new ResponseEntity<>(service.getAllSchools(), HttpStatus.OK);
	}

	@RequestMapping(value = "/api/school/{id}", method = RequestMethod.GET)
	public ResponseEntity<School> getIntake(@PathVariable int id) {
		School school;
		try {
			school = service.getSchool(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(school, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/school", method = RequestMethod.POST)
	public ResponseEntity<Void> addIntake(@RequestBody School school) {
		try {
			service.addSchool(school);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "/api/school/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteIntake(@PathVariable int id) {
		try {
			service.deleteSchool(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "/api/school", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateIntake(@RequestBody School school) {
		try {
			service.updateSchool(school);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

}
