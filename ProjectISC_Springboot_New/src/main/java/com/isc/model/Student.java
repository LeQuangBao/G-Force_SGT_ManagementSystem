package com.isc.model;
// Generated Apr 15, 2017 8:46:24 PM by Hibernate Tools 4.3.5.Final

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.Proxy;
//import org.springframework.web.multipart.MultipartFile;

/**
 * Student generated by hbm2java
 */
@Entity
@Proxy(lazy =false)
@Table(name = "student", catalog = "my_db", uniqueConstraints = { @UniqueConstraint(columnNames = "student_id"),
		@UniqueConstraint(columnNames = "username") })
public class Student implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
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
	private Date birthday;
	private String email;
	private String phone;
	private String address;
	private String image;
//	private MultipartFile image1;
	private String status;

	public Student() {
	}

	public Student(String studentId, String username, String password, String firstname, String lastname, byte gender,
			Date birthday, String email, String phone, String address, String status) {
		this.studentId = studentId;
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.birthday = birthday;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.status = status;
	}

	public Student(EntranceExam entranceExam, Intake intake, School school, Specialization specialization,
			String studentId, String username, String password, String firstname, String lastname, byte gender,
			Date birthday, String email, String phone, String address, String image, String status) {
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
		this.birthday = birthday;
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

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "entrance_exam")
	public EntranceExam getEntranceExam() {
		return this.entranceExam;
	}

	public void setEntranceExam(EntranceExam entranceExam) {
		this.entranceExam = entranceExam;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "intake")
	public Intake getIntake() {
		return this.intake;
	}

	public void setIntake(Intake intake) {
		this.intake = intake;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "school")
	public School getSchool() {
		return this.school;
	}

	public void setSchool(School school) {
		this.school = school;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "specialization")
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

	@Temporal(TemporalType.DATE)
	@Column(name = "birthday", nullable = false, length = 10)
	public Date getBirthday() {
		return this.birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
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

//	public MultipartFile getImage1() {
//		return image1;
//	}
//
//	public void setImage1(MultipartFile image1) {
//		this.image1 = image1;
//	}
//	

}
