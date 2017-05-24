package com.isc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.isc.service.RoomService;

@RestController
public class RoomControllerWS {
	
	@Autowired
	RoomService service;

}
