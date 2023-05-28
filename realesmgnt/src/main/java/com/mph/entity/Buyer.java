package com.mph.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author abish
 *
 */
@Entity
@Table(name = "AABUYER")
public class Buyer extends Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int buyerId;

	private String wishlist;
	private String address;
	private String country;
	private String zipcode;

	public Buyer() {
		super();
	}

	public Buyer(int buyerId, String wishlist, String address, String country, String zipcode) {
		super();
		this.buyerId = buyerId;
		this.wishlist = wishlist;
		this.address = address;
		this.country = country;
		this.zipcode = zipcode;
	}


	
	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public int getBuyerId() {
		return buyerId;
	}

	public void setBuyerId(int buyerId) {
		this.buyerId = buyerId;
	}

	public String getWishlist() {
		return wishlist;
	}

	public void setWishlist(String wishlist) {
		this.wishlist = wishlist;
	}

}
