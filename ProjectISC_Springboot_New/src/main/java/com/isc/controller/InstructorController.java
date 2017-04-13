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

import com.isc.model.Instructor;
import com.isc.service.InstructorService;

@RestController
public class InstructorController {
	@Autowired
	private InstructorService service;

	@RequestMapping(value = "admin/api/instructor", method = RequestMethod.GET)
	public ResponseEntity<List<Instructor>> getAllInstructors() {
		return new ResponseEntity<>(service.getAllInstructors(), HttpStatus.OK);
	}

	@RequestMapping(value = "admin/api/instructor/{id}", method = RequestMethod.GET)
	public ResponseEntity<Instructor> getInstructor(@PathVariable int id) {
		Instructor instructor;
		try {
			instructor = service.getInstructor(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(instructor, HttpStatus.OK);
	}

	@RequestMapping(value = "admin/api/instructor", method = RequestMethod.POST)
	public ResponseEntity<Void> addInstructor(@RequestBody Instructor instructor) {
		try {
			service.addInstructor(instructor);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "admin/api/instructor", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateInstructor(@RequestBody Instructor instructor) {
		try {
			service.updateInstructor(instructor);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "admin/api/instructor/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteInstructor(@PathVariable int id) {
		try {
			service.deleteInstructor(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "admin/api/instructor/reset/{id}", method = RequestMethod.GET)
	public ResponseEntity<Void> resetPassword(@PathVariable int id) {
		try {
			service.resetPassword(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
}
