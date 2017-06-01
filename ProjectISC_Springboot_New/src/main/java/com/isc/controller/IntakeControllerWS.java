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
	@RequestMapping(value = "admin/api/intake/export", method = RequestMethod.GET)
	public ModelAndView getMyData(HttpServletRequest request, HttpServletResponse response) throws SQLException {
		Map<String, Object> model = new HashMap<String, Object>();
		// get data from student
		List<Intake> intake = service.getAllIntakes();
		// Sheet Name
		model.put("sheetname", "TestSheetName");
		// Headers List
		List<String> headers = new ArrayList<String>();
		headers.add("Intake ID");
		headers.add("Intake Name");
		headers.add("Start Date");
		headers.add("End Date");
		model.put("headers", headers);
		// Results Table (List<Object[]>)
		List<List<String>> results = new ArrayList<List<String>>();
		// for loop each student
		for (Intake s : intake) {
			List<String> elements = new ArrayList<>();
			elements.add(s.getIntakeId());
			elements.add(s.getIntakeName());
			elements.add((s.getStartDate().toString()));
			elements.add(s.getEndDate().toString());
			results.add(elements);
		}

		model.put("results", results);
		response.setContentType("application/ms-excel");
		response.setHeader("Content-disposition", "attachment; filename=IntakeList.xls");
		return new ModelAndView(new MyExcelView(), model);
	}

}
