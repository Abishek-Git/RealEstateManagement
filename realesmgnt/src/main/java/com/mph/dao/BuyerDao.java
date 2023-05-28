package com.mph.dao;

import java.util.List;

import com.mph.entity.Buyer;
import com.mph.entity.Property;
import com.mph.entity.Seller;

public interface BuyerDao {
	public List<Buyer> getBuyerList();
	public String updateBuyer(Buyer buyer);
	public String deleteBuyer(int buyerId);
	public String createBuyer(Buyer buyer);
	public Buyer getBuyerById(int buyerId);
	
	//LOGIN
	public Buyer getBuyerByEmailandPassword(String email, String password);
	public List<Property> reomveFromWishlist(int buyerId,int propertyId);
	public List<Property> addFromWishlist(int buyerId, int propertyId);
	public Buyer getBuyerByEmail(String email);
}
