package com.isc.model;
// Generated May 25, 2017 9:50:27 AM by Hibernate Tools 5.2.1.Final

import java.util.Date;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Instructor generated by hbm2java
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
@Table(name = "instructor", catalog = "my_db", uniqueConstraints = @UniqueConstraint(columnNames = "username"))
public class Instructor implements java.io.Serializable {

	private Integer id;
	private String username;
	private String password;
	private String firstname;
	private String lastname;
	private Date birthday;
	private String email;
	private String phone;
	private String address;
	private String image;
	private String degree;
	private boolean status;
	private Set<Time> times = new HashSet<Time>(0);
	private Set<Iclass> iclasses = new HashSet<Iclass>(0);

	public Instructor() {
	}

	public Instructor(String username, String password, String firstname, String lastname, Date birthday, String email,
			String phone, String address, String image, String degree, boolean status) {
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.birthday = birthday;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.image = image;
		this.degree = degree;
		this.status = status;
	}

	public Instructor(String username, String password, String firstname, String lastname, Date birthday, String email,
			String phone, String address, String image, String degree, boolean status, Set<Time> times,
			Set<Iclass> iclasses) {
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.birthday = birthday;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.image = image;
		this.degree = degree;
		this.status = status;
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

	@Column(name = "username", unique = true, nullable = false, length = 50)
	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name = "password", nullable = false, length = 150)
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

	@Column(name = "image", nullable = false, length = 500)
	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Column(name = "degree", nullable = false, length = 50)
	public String getDegree() {
		return this.degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	@Column(name = "status", nullable = false)
	public boolean isStatus() {
		return this.status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "instructor")
	public Set<Time> getTimes() {
		return this.times;
	}

	public void setTimes(Set<Time> times) {
		this.times = times;
	}

	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "instructor")
	public Set<Iclass> getIclasses() {
		return this.iclasses;
	}

	public void setIclasses(Set<Iclass> iclasses) {
		this.iclasses = iclasses;
	}

}
