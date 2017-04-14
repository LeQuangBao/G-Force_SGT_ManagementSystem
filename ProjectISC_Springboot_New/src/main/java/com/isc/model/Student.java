package com.isc.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Student generated by hbm2java
 */
@Entity
@Table(name = "student", catalog = "my_db", uniqueConstraints = { @UniqueConstraint(columnNames = "student_id"),
		@UniqueConstraint(columnNames = "username") })
public class Student implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * 
	 */

	private Integer id;
	private EntranceExam entranceExam;
	private Intake intake;
	private School school;
	private Specialization specialization;
	private String studentId;
	private String username;
	private String password;
	private String firstname;
	private String lastname;
	private byte gender;
	private String email;
	private String phone;
	private String address;
	private String image;
	private String status;

	public Student() {
	}

	public Student(EntranceExam entranceExam, Intake intake, School school, Specialization specialization,
			String studentId, String username, String password, String firstname, String lastname, byte gender,
			String email, String phone, String address, String status) {
		this.entranceExam = entranceExam;
		this.intake = intake;
		this.school = school;
		this.specialization = specialization;
		this.studentId = studentId;
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.status = status;
	}

	public Student(EntranceExam entranceExam, Intake intake, School school, Specialization specialization,
			String studentId, String username, String password, String firstname, String lastname, byte gender,
			String email, String phone, String address, String image, String status) {
		this.entranceExam = entranceExam;
		this.intake = intake;
		this.school = school;
		this.specialization = specialization;
		this.studentId = studentId;
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.image = image;
		this.status = status;
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
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "entrance_exam", nullable = false)
	public EntranceExam getEntranceExam() {
		return this.entranceExam;
	}

	public void setEntranceExam(EntranceExam entranceExam) {
		this.entranceExam = entranceExam;
	}
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "intake", nullable = false)
	public Intake getIntake() {
		return this.intake;
	}

	public void setIntake(Intake intake) {
		this.intake = intake;
	}
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "school", nullable = false)
	public School getSchool() {
		return this.school;
	}

	public void setSchool(School school) {
		this.school = school;
	}
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "specialization", nullable = false)
	public Specialization getSpecialization() {
		return this.specialization;
	}

	public void setSpecialization(Specialization specialization) {
		this.specialization = specialization;
	}

	@Column(name = "student_id", unique = true, nullable = false, length = 50)
	public String getStudentId() {
		return this.studentId;
	}

	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}

	@Column(name = "username", unique = true, nullable = false, length = 50)
	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name = "password", nullable = false, length = 50)
	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name = "firstname", nullable = false, length = 50)
	public String getFirstname() {
		return this.firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	@Column(name = "lastname", nullable = false, length = 50)
	public String getLastname() {
		return this.lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	@Column(name = "gender", nullable = false)
	public byte getGender() {
		return this.gender;
	}

	public void setGender(byte gender) {
		this.gender = gender;
	}

	@Column(name = "email", nullable = false, length = 200)
	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "phone", nullable = false, length = 20)
	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Column(name = "address", nullable = false, length = 500)
	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Column(name = "image", length = 500)
	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Column(name = "status", nullable = false, length = 50)
	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
