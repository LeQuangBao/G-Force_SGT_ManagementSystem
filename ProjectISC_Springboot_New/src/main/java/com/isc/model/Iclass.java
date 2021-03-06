package com.isc.model;
// Generated May 25, 2017 9:10:17 AM by Hibernate Tools 5.2.1.Final

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
/**
 * Iclass generated by hbm2java
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
@Table(name = "iclass", catalog = "my_db")
public class Iclass implements java.io.Serializable {

	private Integer id;
	private Instructor instructor;
	private Room room;
	private Subject subject;
	private Timetable timetable;
	private String iclassName;
	private Set<Time> times = new HashSet<Time>(0);

	public Iclass() {
	}

	public Iclass(Instructor instructor, Room room, Subject subject, Timetable timetable, String iclassName) {
		this.instructor = instructor;
		this.room = room;
		this.subject = subject;
		this.timetable = timetable;
		this.iclassName = iclassName;
	}

	public Iclass(Instructor instructor, Room room, Subject subject, Timetable timetable, String iclassName,
			Set<Time> times) {
		this.instructor = instructor;
		this.room = room;
		this.subject = subject;
		this.timetable = timetable;
		this.iclassName = iclassName;
		this.times = times;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "instructor", nullable = false)
	public Instructor getInstructor() {
		return this.instructor;
	}

	public void setInstructor(Instructor instructor) {
		this.instructor = instructor;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "room", nullable = false)
	public Room getRoom() {
		return this.room;
	}

	public void setRoom(Room room) {
		this.room = room;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "subject", nullable = false)
	public Subject getSubject() {
		return this.subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "timetable", nullable = false)
	public Timetable getTimetable() {
		return this.timetable;
	}
	
	public void setTimetable(Timetable timetable) {
		this.timetable = timetable;
	}

	@Column(name = "iclass_name", nullable = false, length = 150)
	public String getIclassName() {
		return this.iclassName;
	}

	public void setIclassName(String iclassName) {
		this.iclassName = iclassName;
	}

	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "iclass")
	public Set<Time> getTimes() {
		return this.times;
	}

	public void setTimes(Set<Time> times) {
		this.times = times;
	}

}
