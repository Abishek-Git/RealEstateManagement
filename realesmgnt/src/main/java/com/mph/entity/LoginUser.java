package com.mph.entity;

public class LoginUser {
	public int id;
	public String email;
	public String password;
	public String user;
	public LoginUser(int id, String email, String password, String user) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.user = user;
	}
	public LoginUser() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "LoginUser [id=" + id + ", email=" + email + ", password=" + password + ", user=" + user + "]";
	}
	
	
}
