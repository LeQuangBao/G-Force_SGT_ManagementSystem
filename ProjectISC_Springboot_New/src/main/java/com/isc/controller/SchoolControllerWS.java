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

import com.isc.model.Intake;
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
	public ResponseEntity<School> getSchool(@PathVariable int id) {
		School school;
		try {
			school = service.getSchool(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(school, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/school", method = RequestMethod.POST)
	public ResponseEntity<Void> addSchool(@RequestBody School school) {
		try {
			service.addSchool(school);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "/api/school/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteSchool(@PathVariable int id) {
		try {
			service.deleteSchool(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "/api/school", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateSchool(@RequestBody School school) {
		try {
			service.updateSchool(school);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	@RequestMapping(value = "admin/api/school/export", method = RequestMethod.GET)
	public ModelAndView getMyData(HttpServletRequest request, HttpServletResponse response) throws SQLException {
		Map<String, Object> model = new HashMap<String, Object>();
		// get data from student
		List<School> school = service.getAllSchools();
		// Sheet Name
		model.put("sheetname", "TestSheetName");
		// Headers List
		List<String> headers = new ArrayList<String>();
		headers.add("School ID");
		headers.add("School Name");
		headers.add("Address");
		headers.add("Contact");
		
		model.put("headers", headers);
		// Results Table (List<Object[]>)
		List<List<String>> results = new ArrayList<List<String>>();
		// for loop each student
		for (School s : school ) {
			List<String> elements = new ArrayList<>();
			elements.add(s.getSchoolId());
			elements.add(s.getSchoolName());
			elements.add(s.getAddress());
			elements.add(s.getContact());
			results.add(elements);
		}

		model.put("results", results);
		response.setContentType("application/ms-excel");
		response.setHeader("Content-disposition", "attachment; filename=SchoolList.xls");
		return new ModelAndView(new MyExcelView(), model);
	}

}
