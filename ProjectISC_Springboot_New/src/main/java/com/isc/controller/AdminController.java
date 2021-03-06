package com.isc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdminController {
	@RequestMapping(value = "/admin/")
	public String index() {
		return "admin/index";
	}

	@RequestMapping(value = "/admin/intake")
	public String intake() {
		return "admin/intake";
	}

	@RequestMapping(value = "/admin/school")
	public String school() {
		return "admin/school";
	}

	@RequestMapping(value = "/admin/specialization")
	public String specialization() {
		return "admin/specialization";
	}

	@RequestMapping(value = "/admin/session")
	public String session() {
		return "admin/session";
	}
	@RequestMapping(value = "/admin/buildTimetable/{id}")
	public String buildTimetable(@PathVariable("id") int id) {
		return "admin/buildTimetable";
	}

	@RequestMapping(value = "/admin/timetable")
	public String Timetable() {
		return "admin/timetable";
	}

	@RequestMapping(value = "/admin/course")
	public String courses() {
		return "admin/subject";
	}

	@RequestMapping(value = "/admin/instructor")
	public String instructor() {
		return "admin/instructor";
	}

	@RequestMapping(value = "/admin/entrance-exam")
	public String entranceExam() {
		return "admin/entrance_exam";
	}

	@RequestMapping(value = "/admin/student")
	public String student() {
		return "admin/student";
	}

	@RequestMapping(value = "/admin/registrar")
	public String registrar() {
		return "admin/registrar";
	}

	@RequestMapping(value = "/admin/room")
	public String room() {
		return "admin/room";
	}
	
	@RequestMapping(value = "/admin/reportinstructor")
	public String reportInstructor() {
		return "admin/reportInstructor";
	}
	@RequestMapping(value = "/admin/reportintake")
	public String reportIntake() {
		return "admin/reportIntake";
	}
}
