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

import com.isc.model.Subject;
import com.isc.service.SubjectService;

@RestController
public class SubjectControllerWS {
	@Autowired
	private SubjectService service;

	@RequestMapping(value = "/api/subject", method = RequestMethod.GET)
	public ResponseEntity<List<Subject>> Subjects() {
		return new ResponseEntity<>(service.getAllSubjects(), HttpStatus.OK);
	}

	@RequestMapping(value = "/api/subject/{id}", method = RequestMethod.GET)
	public ResponseEntity<Subject> getSubject(@PathVariable int id) {
		Subject subject;
		try {
			subject = service.getSubject(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(subject, HttpStatus.OK);
	}

	@RequestMapping(value = "api/subject", method = RequestMethod.POST)
	public ResponseEntity<Void> addSubject(@RequestBody Subject subject) {
		try {
			service.addSubject(subject);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "api/subject/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteSubject(@PathVariable int id) {
		try {
			service.deleteSubject(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "/api/subject", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateSubject(@RequestBody Subject subject){
		try {
			service.updateSubject(subject);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

}

