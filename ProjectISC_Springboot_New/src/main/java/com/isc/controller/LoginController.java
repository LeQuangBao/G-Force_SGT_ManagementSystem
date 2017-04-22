package com.isc.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class LoginController {

	@RequestMapping(value = "admin/login")
	public String intake() {
		return "admin/login";
	}
}
