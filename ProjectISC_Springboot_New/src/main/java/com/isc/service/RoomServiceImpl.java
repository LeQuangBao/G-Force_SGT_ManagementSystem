package com.isc.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.isc.dao.RoomDao;

public class RoomServiceImpl implements RoomService {

	@Autowired
	RoomDao roomDao;
}
