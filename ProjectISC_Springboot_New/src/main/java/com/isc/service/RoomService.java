package com.isc.service;

import java.util.List;
import com.isc.model.Room;

public interface RoomService {
	 public List<Room> getAllRooms();
	
	 public Room getRoom(int id);
	
	 public void addRoom(Room room);
	
	 public void updateRoom(Room room);
	
	 public void deleteRoom(int roomId);
}
