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
		return sessionFactory.getCurrentSession().createQuery("from Rooom").list();
	}

	@Override
	public Room getRoom(int id) {
		// TODO Auto-generated method stub
		return sessionFactory.getCurrentSession().load(Room.class, id);
	}

	@Override
	public void addRoom(Room room) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().save(room);
	}

	@Override
	public void updateRoom(Room room) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().update(room);
	}

	@Override
	public void deleteRoom(int roomId) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().delete(getRoom(roomId));
	}
}
