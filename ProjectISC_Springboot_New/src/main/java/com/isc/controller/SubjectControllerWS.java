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

import com.isc.model.Student;
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
	@RequestMapping(value = "admin/api/subject/export", method = RequestMethod.GET)
	public ModelAndView getMyData(HttpServletRequest request, HttpServletResponse response) throws SQLException {
		Map<String, Object> model = new HashMap<String, Object>();
		// get data from student
		List<Subject> subject = service.getAllSubjects();
		// Sheet Name
		model.put("sheetname", "TestSheetName");
		// Headers List
		List<String> headers = new ArrayList<String>();
		headers.add("Id");
		headers.add("Subject Name");
		headers.add("Credit");
		headers.add("Hour");
		
		headers.add("Description");
		
		
		model.put("headers", headers);
		// Results Table (List<Object[]>)
		List<List<String>> results = new ArrayList<List<String>>();
		// for loop each student
		for (Subject s : subject) {
			List<String> elements = new ArrayList<>();
			elements.add(s.getSubjectId());
			elements.add(s.getSubjectName());
			elements.add(String.valueOf(s.getCredit()));
			elements.add(String.valueOf(s.getHour()));
			elements.add(s.getDescription());
			
			results.add(elements);
		}

		model.put("results", results);
		response.setContentType("application/ms-excel");
		response.setHeader("Content-disposition", "attachment; filename=SubjectList.xls");
		return new ModelAndView(new MyExcelView(), model);
	}
}

