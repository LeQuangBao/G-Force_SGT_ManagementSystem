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

import com.isc.model.Session;
import com.isc.service.SessionDetailService;
import com.isc.service.SessionService;

@RestController
public class SessionController {
	@Autowired
	private SessionService service;
	@Autowired
	private SessionDetailService service1;

	@RequestMapping(value = "/api/session", method = RequestMethod.GET)
	public ResponseEntity<List<Session>> Sessions() {
		return new ResponseEntity<>(service.getAllSessions(), HttpStatus.OK);
	}

	@RequestMapping(value = "/api/session/{id}", method = RequestMethod.GET)
	public ResponseEntity<Session> getSession(@PathVariable int id) {
		Session session;
		try {
			session = service.getSession(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(session, HttpStatus.OK);
	}

	@RequestMapping(value = "api/session", method = RequestMethod.POST)
	public ResponseEntity<Void> addSession(@RequestBody Session session) {
		try {
			service.addSession(session);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	
	@RequestMapping(value = "api/session/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteSession(@PathVariable int id) {
		try{
			service.deleteSession(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "/api/session", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateSession(@RequestBody Session session){
		try {
			service.updateSession(session);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	@RequestMapping(value = "api/detailsession/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteDetailSession(@PathVariable int id) {
		try{
			service1.deleteSessionDetail(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	

}
