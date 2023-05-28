package com.mph.dao;

import java.util.List;

import com.mph.entity.Property;

public interface PropertyDao {
	public List<Property> getAllProperty();
	public String addProperty(Property property);
	public String updateProperty(Property property);
	public String deleteProperty(int property_Id);
	public Property getPropertyById(int property_id);
	public List<Property> getPropertyBySellerId(int sellerId);
	public List<Property> getWishListByBuyerId(int buyerId);


}
