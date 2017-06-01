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

import com.isc.model.Time;
import com.isc.service.TimeService;

@RestController
public class TimeController {
	@Autowired
	private TimeService service;

	@RequestMapping(value = "/api/time", method = RequestMethod.GET)
	public ResponseEntity<List<Time>> Times() {
		return new ResponseEntity<>(service.getAllTimes(), HttpStatus.OK);
	}

	@RequestMapping(value = "/api/time/{id}", method = RequestMethod.GET)
	public ResponseEntity<Time> getTime(@PathVariable int id) {
		Time time;
		try {
			time = service.getTime(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(time, HttpStatus.OK);
	}

	@SuppressWarnings("unused")
	@RequestMapping(value = "api/time", method = RequestMethod.POST)
	public ResponseEntity<Void> addTime(@RequestBody Time time) {
		Time t = time;
		try {
			service.addTime(time);
		} catch (Exception e) {
			System.out.println("ERROR" + e.getMessage());
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	
	@RequestMapping(value = "api/time/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteTime(@PathVariable int id) {
		try{
			service.deleteTime(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "/api/time", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateTime(@RequestBody Time time){
		try {
			service.updateTime(time);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	}
