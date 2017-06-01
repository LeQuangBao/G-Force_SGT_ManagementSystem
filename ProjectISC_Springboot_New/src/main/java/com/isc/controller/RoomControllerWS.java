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
import com.isc.model.Room;
import com.isc.service.RoomService;

@RestController
public class RoomControllerWS {

	@Autowired
	RoomService service;

	@RequestMapping(value = "/api/room", method = RequestMethod.GET)
	public ResponseEntity<List<Room>> findAll() {
		return new ResponseEntity<>(service.getAllRooms(), HttpStatus.OK);
	}

	@RequestMapping(value = "/api/room/{id}", method = RequestMethod.GET)
	public ResponseEntity<Room> find(@PathVariable("id") int id) {
		Room room;
		try {
			room = service.getRoom(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(room, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/room", method = RequestMethod.POST)
	public ResponseEntity<Void> add(@RequestBody Room room) {
		try {
			service.addRoom(room);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "/api/room", method = RequestMethod.PUT)
	public ResponseEntity<Void> update(@RequestBody Room room) {
		try {
			service.updateRoom(room);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<Void>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "/api/room/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable int id) {
		try {
			service.deleteRoom(id);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
	}
	
}
