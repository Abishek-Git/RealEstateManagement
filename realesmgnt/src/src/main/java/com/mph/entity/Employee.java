package com.mph.entity;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "EMPTABLE")
public class Employee {

	@Id
	@GeneratedValue
	private int eid;

	@Column
	private String ename;
	@Column
	private String email;
	@Column
	private String password;
	@Column
	private String gender;
	
	@Column
	private String fileName;
	
	@Column()
	@Lob
	private byte[] EPicture;

	public Employee(int eid, String ename, String email, String password, String gender, String fileName,
			byte[] ePicture) {
		super();
		this.eid = eid;
		this.ename = ename;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.fileName = fileName;
		EPicture = ePicture;
	}

	public Employee() {
		super();
	}

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public byte[] getEPicture() {
		return EPicture;
	}

	public void setEPicture(byte[] ePicture) {
		EPicture = ePicture;
	}

	@Override
	public String toString() {
		return "Employee [eid=" + eid + ", ename=" + ename + ", email=" + email + ", password=" + password + ", gender="
				+ gender + ", fileName=" + fileName + ", EPicture=" + Arrays.toString(EPicture) + "]";
	}
	
	
	

}
