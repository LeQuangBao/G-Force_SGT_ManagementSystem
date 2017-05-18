package com.isc.model;
// Generated Apr 15, 2017 8:46:24 PM by Hibernate Tools 4.3.5.Final

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.Proxy;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Specialization generated by hbm2java
 */
@Entity
@Proxy(lazy =false)
@Table(name = "specialization", catalog = "my_db", uniqueConstraints = @UniqueConstraint(columnNames = "specialization_id"))
public class Specialization implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String specializationId;
	private String specializationName;
	private boolean active;
	private Set<Student> students = new HashSet<Student>(0);
	private Set<Subject> subjects = new HashSet<Subject>(0);

	public Specialization() {
	}

	public Specialization(String specializationId, boolean active) {
		this.specializationId = specializationId;
		this.active = active;
	}

	public Specialization(String specializationId, String specializationName, boolean active, Set<Student> students,
			Set<Subject> subjects) {
		this.specializationId = specializationId;
		this.specializationName = specializationName;
		this.active = active;
		this.students = students;
		this.subjects = subjects;
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

	@Column(name = "specialization_id", unique = true, nullable = false, length = 30)
	public String getSpecializationId() {
		return this.specializationId;
	}

	public void setSpecializationId(String specializationId) {
		this.specializationId = specializationId;
	}

	@Column(name = "specialization_name", length = 50)
	public String getSpecializationName() {
		return this.specializationName;
	}

	public void setSpecializationName(String specializationName) {
		this.specializationName = specializationName;
	}

	@Column(name = "active", nullable = false)
	public boolean isActive() {
		return this.active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "specialization")
	public Set<Student> getStudents() {
		return this.students;
	}

	public void setStudents(Set<Student> students) {
		this.students = students;
	}

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "specialization_subject", catalog = "my_db", joinColumns = {
			@JoinColumn(name = "specialization", nullable = false, updatable = false) }, inverseJoinColumns = {
					@JoinColumn(name = "subject", nullable = false, updatable = false) })
	public Set<Subject> getSubjects() {
		return this.subjects;
	}

	public void setSubjects(Set<Subject> subjects) {
		this.subjects = subjects;
	}

}
