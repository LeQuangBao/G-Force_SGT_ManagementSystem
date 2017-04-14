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

import com.isc.model.EntranceExam;
import com.isc.service.EntranceExamService;

@RestController
public class EntranceExamControllerWS {
	@Autowired
	private EntranceExamService service;

	@RequestMapping(value = "admin/api/entrance-exam", method = RequestMethod.GET)
	public ResponseEntity<List<EntranceExam>> getAllEntranceExams() {
		return new ResponseEntity<>(service.getAllEntranceExams(), HttpStatus.OK);
	}

	@RequestMapping(value = "admin/api/entrance-exam/{id}", method = RequestMethod.GET)
	public ResponseEntity<EntranceExam> getEntranceExam(@PathVariable int id) {
		EntranceExam entranceExam;
		try {
			entranceExam = service.getEntranceExam(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(entranceExam, HttpStatus.OK);
	}

	@RequestMapping(value = "admin/api/entrance-exam", method = RequestMethod.POST)
	public ResponseEntity<Void> addEntranceExam(@RequestBody EntranceExam entranceExam) {
		try {
			service.addEntranceExam(entranceExam);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "admin/api/entrance-exam", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateEntranceExam(@RequestBody EntranceExam entranceExam) {
		try {
			service.updateEntranceExam(entranceExam);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "admin/api/entrance-exam/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteEntranceExam(@PathVariable int id) {
		try {
			service.deleteEntranceExam(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

}
