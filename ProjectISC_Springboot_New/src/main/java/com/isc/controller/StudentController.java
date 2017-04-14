package com.isc.controller;

//import java.io.BufferedOutputStream;
//import java.io.File;
//import java.io.FileOutputStream;
//import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.transaction.annotation.Transactional;
//import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.isc.model.Student;
import com.isc.model.EntranceExam;
import com.isc.model.Intake;
import com.isc.model.MyUploadForm;
import com.isc.model.School;
import com.isc.model.Specialization;
import com.isc.service.StudentService;

@RestController
public class StudentController {
	@Autowired
	private StudentService service;

	@RequestMapping(value = "admin/api/Student", method = RequestMethod.GET)
	public ResponseEntity<List<Student>> getAllStudents() {
		return new ResponseEntity<>(service.getAllStudents(), HttpStatus.OK);
	}

	@RequestMapping(value = "admin/api/Student/{id}", method = RequestMethod.GET)
	public ResponseEntity<Student> getStudent(@PathVariable int id) {
		Student Student;
		try {
			Student = service.getStudent(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(Student, HttpStatus.OK);
	}

	@RequestMapping(value = "admin/api/Student", method = RequestMethod.POST)
	public ResponseEntity<Void> addStudent(HttpServletRequest request,@RequestBody Student Student,
			  @ModelAttribute("myUploadForm") MyUploadForm myUploadForm) {
		try {
			
			service.addStudent(Student);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "admin/api/Student", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateStudent(@RequestBody Student Student) {
		try {
			service.updateStudent(Student);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "admin/api/Student/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteStudent(@PathVariable int id) {
		try {
			service.deleteStudent(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	@RequestMapping(value = "admin/api/StudentIntake", method = RequestMethod.GET)
	public ResponseEntity<List<Intake>> getAllIntake() {
		return new ResponseEntity<>(service.getallintake(), HttpStatus.OK);
	}
	@RequestMapping(value = "admin/api/StudentSchool", method = RequestMethod.GET)
	public ResponseEntity<List<School>> getAllSchool() {
		return new ResponseEntity<>(service.getallSchool(), HttpStatus.OK);
	}
	@RequestMapping(value = "admin/api/StudentEntranceExam", method = RequestMethod.GET)
	public ResponseEntity<List<EntranceExam>> getAllEntranceExam() {
		return new ResponseEntity<>(service.getallentranceexam(), HttpStatus.OK);
	}
	@RequestMapping(value = "admin/api/StudentSpecialization", method = RequestMethod.GET)
	public ResponseEntity<List<Specialization>> getAllSpecilization() {
		return new ResponseEntity<>(service.getallspecialization(), HttpStatus.OK);
	}

	

	
}
