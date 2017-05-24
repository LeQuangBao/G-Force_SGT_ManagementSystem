package com.isc.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isc.model.Room;

@Repository
public class RoomDaoImpl implements RoomDao {

	@Autowired
	private SessionFactory sessionFactory;

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
