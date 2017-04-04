package com.isc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdminController {
	
		@RequestMapping(value = "/Admin")
		public String index() {
			return "Admin/_layout";
		}
		
}
