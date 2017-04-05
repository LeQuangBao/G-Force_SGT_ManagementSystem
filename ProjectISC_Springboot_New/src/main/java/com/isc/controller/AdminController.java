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
}
