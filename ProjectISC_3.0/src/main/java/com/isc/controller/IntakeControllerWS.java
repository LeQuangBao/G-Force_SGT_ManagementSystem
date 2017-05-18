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

import com.isc.model.Intake;
import com.isc.service.IntakeService;

@RestController
public class IntakeControllerWS {
	@Autowired
	private IntakeService service;

	@RequestMapping(value = "/api/intake", method = RequestMethod.GET)
	public ResponseEntity<List<Intake>> getAllIntakes() {

		return new ResponseEntity<>(service.getAllIntakes(), HttpStatus.OK);
	}

	@RequestMapping(value = "/api/intake/{id}", method = RequestMethod.GET)
	public ResponseEntity<Intake> getIntake(@PathVariable int id) {
		Intake intake;
		try {
			intake = service.getIntake(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(intake, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/intake", method = RequestMethod.POST)
	public ResponseEntity<Void> addIntake(@RequestBody Intake intake) {
		try {
			service.addIntake(intake);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "/api/intake/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteIntake(@PathVariable int id) {
		try {
			service.deleteIntake(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "/api/intake", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateIntake(@RequestBody Intake intake) {
		//try {
			service.updateIntake(intake);
		//} catch (Exception ex) {
			// new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		//}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

}
