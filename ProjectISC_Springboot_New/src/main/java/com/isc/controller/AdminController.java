package com.isc.controller;

import org.springframework.stereotype.Controller;
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
	@RequestMapping(value = "/admin/room")
	public String room() {
		return "admin/room";
	}
	
	@RequestMapping(value = "/admin/buildTimetable")
	public String buildTimetable() {
		return "admin/buildTimetable";
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

	
}
