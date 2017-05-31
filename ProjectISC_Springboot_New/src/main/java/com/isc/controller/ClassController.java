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

import com.isc.model.Iclass;
import com.isc.service.ClassService;

@RestController
public class ClassController {
	@Autowired
	private ClassService classService;

	@RequestMapping(value = "admin/api/class", method = RequestMethod.GET)
	public ResponseEntity<List<Iclass>> getAllClasses() {
		return new ResponseEntity<List<Iclass>>(classService.getAllClass(), HttpStatus.OK);
	}
	
	@RequestMapping(value = "admin/api/classByTimetableID/{timetableId}", method = RequestMethod.GET)
	public ResponseEntity<List<Iclass>> getAllClassesByTimetableID(@PathVariable int timetableId) {
		return new ResponseEntity<List<Iclass>>(classService.getIClassByTimetableID(timetableId), HttpStatus.OK);
	}

	@RequestMapping(value = "admin/api/class/{id}", method = RequestMethod.GET)
	public ResponseEntity<Iclass> getIClass(@PathVariable int id) {
		Iclass iclass;
		try {
			iclass = classService.getIClass(id);

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(iclass, HttpStatus.OK);
	}

	@RequestMapping(value = "admin/api/class", method = RequestMethod.POST)
	public ResponseEntity<Void> addClass(@RequestBody Iclass iclass) {
		try {
			classService.addIClass(iclass);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "admin/api/class", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateClass(@RequestBody Iclass iclass) {
		try {
			classService.updateIClass(iclass);
		} catch (Exception e) {
			System.out.print(e);
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "admin/api/class/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteEntranceExam(@PathVariable int id) {
		try {
			classService.deleteIClass(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

}
