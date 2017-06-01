package com.isc.model;
// Generated May 24, 2017 1:26:03 PM by Hibernate Tools 5.2.1.Final

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Room generated by hbm2java
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
@Table(name = "room", catalog = "my_db", uniqueConstraints = @UniqueConstraint(columnNames = "id"))
public class Room implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer id;
	private Integer roomId;
	private Set<Time> times = new HashSet<Time>(0);
	private Set<Iclass> iclasses = new HashSet<Iclass>(0);

	public Room() {
	}

	public Room(int roomId) {
		this.roomId = roomId;
	}

	public Room(int roomId, Set<Time> times, Set<Iclass> iclasses) {
		this.roomId = roomId;
		this.times = times;
		this.iclasses = iclasses;
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

	@Column(name = "room_id", nullable = false)
	public int getRoomId() {
		return this.roomId;
	}

	public void setRoomId(int roomId) {
		this.roomId = roomId;
	}
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "room")
	public Set<Time> getTimes() {
		return this.times;
	}

	public void setTimes(Set<Time> times) {
		this.times = times;
	}
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "room")
	public Set<Iclass> getIclasses() {
		return this.iclasses;
	}

	public void setIclasses(Set<Iclass> iclasses) {
		this.iclasses = iclasses;
	}

}