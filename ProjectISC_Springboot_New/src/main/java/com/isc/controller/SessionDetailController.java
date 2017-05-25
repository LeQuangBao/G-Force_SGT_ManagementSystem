package com.isc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.isc.model.SessionDetail;
import com.isc.service.SessionDetailService;

@RestController
public class SessionDetailController {
	@Autowired
	private SessionDetailService service;


	@RequestMapping(value = "/api/sessiondetail/{id}", method = RequestMethod.GET)
	public ResponseEntity<SessionDetail> getSessionDetail(@PathVariable int id) {
		SessionDetail sessiondetail;
		try {
			sessiondetail = service.getSessionDetail(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(sessiondetail, HttpStatus.OK);
	}

	
	@RequestMapping(value = "api/sessiondetail/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteSessionDetail(@PathVariable int id) {
		try{
			service.deleteSessionDetail(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

}
