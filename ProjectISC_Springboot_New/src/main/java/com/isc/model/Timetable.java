package com.isc.model;

import static javax.persistence.GenerationType.IDENTITY;

// default package
// Generated May 25, 2017 9:50:27 AM by Hibernate Tools 5.2.1.Final

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Timetable generated by hbm2java
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
@Table(name = "timetable", catalog = "my_db")
public class Timetable implements java.io.Serializable {

	private Integer id;
	private Intake intake;
	private Session session;
	private String timetableName;
	private Set<Iclass> iclasses = new HashSet<Iclass>(0);

	public Timetable() {
	}

	public Timetable(String timetableName) {
		this.timetableName = timetableName;
	}

	public Timetable(Intake intake, Session session, String timetableName, Set<Iclass> iclasses) {
		this.intake = intake;
		this.session = session;
		this.timetableName = timetableName;
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
	@JsonIgnoreProperties
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "intake")
	public Intake getIntake() {
		return this.intake;
	}

	public void setIntake(Intake intake) {
		this.intake = intake;
	}
	@JsonIgnoreProperties
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "session")
	public Session getSession() {
		return this.session;
	}

	public void setSession(Session session) {
		this.session = session;
	}

	@Column(name = "timetable_name", nullable = false, length = 150)
	public String getTimetableName() {
		return this.timetableName;
	}

	public void setTimetableName(String timetableName) {
		this.timetableName = timetableName;
	}
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "timetable")
	public Set<Iclass> getIclasses() {
		return this.iclasses;
	}

	public void setIclasses(Set<Iclass> iclasses) {
		this.iclasses = iclasses;
	}

}
