package com.mph.dao;

import java.util.List;

import com.mph.entity.Seller;

public interface SellerDao {
	public List<Seller> getSellerList();
	public String updateSeller(Seller seller);
	public String deleteSeller(int sellerId);
	public String createSeller(Seller seller);
	public Seller getSellerById(int sellerId);
	public Seller getSellerByEmailandPassword(String email, String password);
	public Seller getSellerByEmail(String email);

}
