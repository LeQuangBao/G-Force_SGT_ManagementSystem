package com.isc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isc.dao.RoomDao;
import com.isc.model.Room;

@Service
public class RoomServiceImpl implements RoomService {

	@Autowired
	private RoomDao roomDao;

	@Transactional
	public List<Room> getAllRooms() {
		// TODO Auto-generated method stub
		return roomDao.getAllRooms();
	}

	@Transactional
	public Room getRoom(int id) {
		// TODO Auto-generated method stub
		return roomDao.getRoom(id);
	}

	@Transactional
	public void addRoom(Room room) {
		// TODO Auto-generated method stub
		roomDao.addRoom(room);
	}

	@Transactional
	public void updateRoom(Room room) {
		// TODO Auto-generated method stub
		roomDao.updateRoom(room);
	}

	@Transactional
	public void deleteRoom(int roomId) {
		// TODO Auto-generated method stub
		roomDao.deleteRoom(roomId);
	}
}
