package com.isc.controller;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.isc.model.Instructor;
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
		try{
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
	@RequestMapping(value = "admin/api/specialization/export", method = RequestMethod.GET)
	public ModelAndView getMyData(HttpServletRequest request, HttpServletResponse response) throws SQLException {
		Map<String, Object> model = new HashMap<String, Object>();
		// get data from student
		List<Specialization> spe = service.getAllSpecializations();
		// Sheet Name
		model.put("sheetname", "TestSheetName");
		// Headers List
		List<String> headers = new ArrayList<String>();
		headers.add("Specialization ID");
		headers.add("Specialization Name");
		
		model.put("headers", headers);
		// Results Table (List<Object[]>)
		List<List<String>> results = new ArrayList<List<String>>();
		// for loop each student
		for (Specialization s :spe ) {
			List<String> elements = new ArrayList<>();
			elements.add(s.getSpecializationId());
			elements.add(s.getSpecializationName());
			
			results.add(elements);
		}

		model.put("results", results);
		response.setContentType("application/ms-excel");
		response.setHeader("Content-disposition", "attachment; filename=SpecializationList.xls");
		return new ModelAndView(new MyExcelView(), model);
	}

}
