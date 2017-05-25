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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Subject generated by hbm2java
 */
@Entity
@Table(name = "subject", catalog = "my_db", uniqueConstraints = @UniqueConstraint(columnNames = "subject_id"))
public class Subject implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String subjectId;
	private String subjectName;
	private float credit;
	private int hour;
	private String description;
	private boolean active;
	private Set<Specialization> specializations = new HashSet<Specialization>(0);
	private Set<Iclass> iclasses = new HashSet<Iclass>(0);

	public Subject() {
	}

	public Subject(String subjectId, float credit, int hour, String description, boolean active) {
		this.subjectId = subjectId;
		this.credit = credit;
		this.hour = hour;
		this.description = description;
		this.active = active;
	}

	public Subject(String subjectId, String subjectName, float credit, int hour, String description, boolean active,
			Set<Specialization> specializations, Set<Iclass> iclasses) {
		this.subjectId = subjectId;
		this.subjectName = subjectName;
		this.credit = credit;
		this.hour = hour;
		this.description = description;
		this.active = active;
		this.specializations = specializations;
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

	@Column(name = "subject_id", unique = true, nullable = false, length = 30)
	public String getSubjectId() {
		return this.subjectId;
	}

	public void setSubjectId(String subjectId) {
		this.subjectId = subjectId;
	}

	@Column(name = "subject_name", length = 50)
	public String getSubjectName() {
		return this.subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	@Column(name = "credit", nullable = false, precision = 12, scale = 0)
	public float getCredit() {
		return this.credit;
	}

	public void setCredit(float credit) {
		this.credit = credit;
	}

	@Column(name = "hour", nullable = false)
	public int getHour() {
		return this.hour;
	}

	public void setHour(int hour) {
		this.hour = hour;
	}

	@Column(name = "description", nullable = false, length = 65535)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name = "active", nullable = false)
	public boolean isActive() {
		return this.active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@JsonIgnore
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "specialization_subject", catalog = "my_db", joinColumns = {
			@JoinColumn(name = "subject", nullable = false, updatable = false) }, inverseJoinColumns = {
					@JoinColumn(name = "specialization", nullable = false, updatable = false) })
	public Set<Specialization> getSpecializations() {
		return this.specializations;
	}

	public void setSpecializations(Set<Specialization> specializations) {
		this.specializations = specializations;
	}

	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "subject")
	public Set<Iclass> getIclasses() {
		return this.iclasses;
	}

	public void setIclasses(Set<Iclass> iclasses) {
		this.iclasses = iclasses;
	}

}
