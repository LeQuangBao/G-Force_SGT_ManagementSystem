package com.isc.dao;

import java.util.List;
import com.isc.model.Iclass;

public interface ClassDAO {
	public List<Iclass> getAllClass();

	public Iclass getIClass(int id);
	
	public List<Iclass> getIClassByTimetableID(int timetableId);

	public void addIClass(Iclass iclass);

	public void deleteIClass(int id);

	public void updateIClass(Iclass iclass);

}
