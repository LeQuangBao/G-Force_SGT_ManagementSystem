package com.isc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isc.dao.RoomDao;
import com.isc.model.Room;

@Service
public class RoomServiceImpl implements RoomService {

	@Autowired
	private RoomDao roomDao;

	@Override
	public List<Room> getAllRooms() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Room getRoom(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addRoom(Room room) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void editRoom(Room room) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteRoom(Room room) {
		// TODO Auto-generated method stub
		
	}
}
