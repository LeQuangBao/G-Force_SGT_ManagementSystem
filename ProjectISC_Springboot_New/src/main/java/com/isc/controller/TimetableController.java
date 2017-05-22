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

import com.isc.model.Timetable;
//import com.isc.service.TimetableService;

@RestController
public class TimetableController {
//	@Autowired
//	private TimetableService service;
//
//	@RequestMapping(value = "/api/timetable", method = RequestMethod.GET)
//	public ResponseEntity<List<Timetable>> Timetables() {
//		return new ResponseEntity<>(service.getAllTimetables(), HttpStatus.OK);
//	}
//
//	@RequestMapping(value = "/api/timetable/{id}", method = RequestMethod.GET)
//	public ResponseEntity<Timetable> getTimetable(@PathVariable int id) {
//		Timetable timetable;
//		try {
//			timetable = service.getTimetable(id);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//		return new ResponseEntity<>(timetable, HttpStatus.OK);
//	}
//
//	@RequestMapping(value = "api/timetable", method = RequestMethod.POST)
//	public ResponseEntity<Void> addTimetable(@RequestBody Timetable timetable) {
//		try {
//			service.addTimetable(timetable);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
//		}
//		return new ResponseEntity<>(HttpStatus.CREATED);
//	}
//
//	
//	@RequestMapping(value = "api/timetable/{id}", method = RequestMethod.DELETE)
//	public ResponseEntity<Void> deleteTimetable(@PathVariable int id) {
//		try{
//			service.deleteTimetable(id);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//		return new ResponseEntity<>(HttpStatus.ACCEPTED);
//	}
//	
//	@RequestMapping(value = "/api/timetable", method = RequestMethod.PUT)
//	public ResponseEntity<Void> updateTimetable(@RequestBody Timetable timetable){
//		try {
//			service.updateTimetable(timetable);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
//		}
//		return new ResponseEntity<>(HttpStatus.ACCEPTED);
//	}

}
