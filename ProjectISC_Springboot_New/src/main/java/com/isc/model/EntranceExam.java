package com.isc.model;
// Generated Apr 13, 2017 3:18:32 PM by Hibernate Tools 4.3.5.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.Proxy;

/**
 * EntranceExam generated by hbm2java
 */
@Entity
@Proxy(lazy = false)
@Table(name = "entrance_exam", catalog = "my_db")
public class EntranceExam implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer id;
	private Intake intake;
	private String entranceExamName;
	private Date dateStart;
	private String description;
	private Set<Student> students = new HashSet<Student>(0);

	public EntranceExam() {
	}

	public EntranceExam(Intake intake, String entranceExamName, Date dateStart) {
		this.intake = intake;
		this.entranceExamName = entranceExamName;
		this.dateStart = dateStart;
	}

	public EntranceExam(Intake intake, String entranceExamName, Date dateStart, String description,
			Set<Student> students) {
		this.intake = intake;
		this.entranceExamName = entranceExamName;
		this.dateStart = dateStart;
		this.description = description;
		this.students = students;
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
	@JoinColumn(name = "intake", nullable = false)
	public Intake getIntake() {
		return this.intake;
	}

	public void setIntake(Intake intake) {
		this.intake = intake;
	}

	@Column(name = "entrance_exam_name", nullable = false, length = 50)
	public String getEntranceExamName() {
		return this.entranceExamName;
	}

	public void setEntranceExamName(String entranceExamName) {
		this.entranceExamName = entranceExamName;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "date_start", nullable = false, length = 10)
	public Date getDateStart() {
		return this.dateStart;
	}

	public void setDateStart(Date dateStart) {
		this.dateStart = dateStart;
	}

	@Column(name = "description", length = 500)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "entranceExam")
	public Set<Student> getStudents() {
		return this.students;
	}

	public void setStudents(Set<Student> students) {
		this.students = students;
	}

}
