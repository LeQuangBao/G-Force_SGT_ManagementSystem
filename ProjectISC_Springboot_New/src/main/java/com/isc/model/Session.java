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

/**
 * Session generated by hbm2java
 */
@Entity
@Table(name = "session", catalog = "my_db")
public class Session implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String sessionName;
	private Set<SessionDetail> sessionDetails = new HashSet<SessionDetail>(0);
	private Set<Timetable> timetables = new HashSet<Timetable>(0);

	public Session() {
	}

	public Session(String sessionName) {
		this.sessionName = sessionName;
	}

	public Session(String sessionName, Set<SessionDetail> sessionDetails, Set<Timetable> timetables) {
		this.sessionName = sessionName;
		this.sessionDetails = sessionDetails;
		this.timetables = timetables;
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

	@Column(name = "session_name", nullable = false, length = 150)
	public String getSessionName() {
		return this.sessionName;
	}

	public void setSessionName(String sessionName) {
		this.sessionName = sessionName;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "session")
	public Set<SessionDetail> getSessionDetails() {
		return this.sessionDetails;
	}

	public void setSessionDetails(Set<SessionDetail> sessionDetails) {
		this.sessionDetails = sessionDetails;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "session")
	public Set<Timetable> getTimetables() {
		return this.timetables;
	}

	public void setTimetables(Set<Timetable> timetables) {
		this.timetables = timetables;
	}

}
