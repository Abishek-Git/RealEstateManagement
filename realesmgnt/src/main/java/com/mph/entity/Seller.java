package com.mph.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "AASELLER")
public class Seller extends Customer{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int sellerId;

	@OneToMany(mappedBy = "seller", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonIgnoreProperties("property")
	@JsonIgnore
	private List<Property> property;
	

	public Seller(int sellerId, List<Property> property) {
		super();
		this.sellerId = sellerId;
		this.property = property;
	}
	

	public Seller(int customerId, String fName, String lName, String phoneNumber, String email, String pan,
			String adhar, String password) {
		super(customerId, fName, lName, phoneNumber, email, pan, adhar, password);
	}


	public Seller() {
		super();
	}

	public int getSellerId() {
		return sellerId;
	}

	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}

	public List<Property> getProperty() {
		return property;
	}

	public void setProperty(List<Property> property) {
		this.property = property;
	}


	@Override
	public String toString() {
		return "Seller [sellerId=" + sellerId + ", property=" + property + "]";
	}


	

	
}
