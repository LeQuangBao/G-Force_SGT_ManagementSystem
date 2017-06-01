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

import com.isc.model.EntranceExam;
import com.isc.model.Instructor;
import com.isc.model.Student;
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

	@RequestMapping(value = "admin/api/entrance-exam/get-students/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<Student>> getStudents(@PathVariable int id) {
		return new ResponseEntity<>(service.getStudents(id), HttpStatus.OK);
	}
	@RequestMapping(value = "admin/api/entranceExam/export", method = RequestMethod.GET)
	public ModelAndView getMyData(HttpServletRequest request, HttpServletResponse response) throws SQLException {
		Map<String, Object> model = new HashMap<String, Object>();
		// get data from student
		List<EntranceExam> enctr = service.getAllEntranceExams();
		// Sheet Name
		model.put("sheetname", "TestSheetName");
		// Headers List
		List<String> headers = new ArrayList<String>();
		headers.add("Entrance Exam Id");
		headers.add("Entrance Exam Name");
		headers.add("Description");
		headers.add("Start Date");
		headers.add("Intake Name");
		model.put("headers", headers);
		// Results Table (List<Object[]>)
		List<List<String>> results = new ArrayList<List<String>>();
		// for loop each student
		for (EntranceExam s : enctr) {
			List<String> elements = new ArrayList<>();
			elements.add(s.getId().toString());
			elements.add(s.getEntranceExamName());
			elements.add(s.getDescription());
			elements.add(s.getStartDate().toString());
			elements.add(s.getIntake().getIntakeName());
			results.add(elements);
		}

		model.put("results", results);
		response.setContentType("application/ms-excel");
		response.setHeader("Content-disposition", "attachment; filename=EntranceExamList.xls");
		return new ModelAndView(new MyExcelView(), model);
	}

}
