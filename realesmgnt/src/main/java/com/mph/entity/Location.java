package com.mph.entity;

public class Location {
	private String place;
	private double longitude;
	private double latitude;
	public Location() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Location(String locationTitle, double longitude, double latitude) {
		super();
		this.place = locationTitle;
		this.longitude = longitude;
		this.latitude = latitude;
	}
	public String getLocationTitle() {
		return place;
	}
	public void setLocationTitle(String locationTitle) {
		this.place = locationTitle;
	}
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	@Override
	public String toString() {
		return "Location [locationTitle=" + place + ", longitude=" + longitude + ", latitude=" + latitude + "]";
	}
}
