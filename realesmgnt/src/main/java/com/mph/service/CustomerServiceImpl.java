package com.mph.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mph.dao.BuyerDao;
import com.mph.dao.SellerDao;
import com.mph.entity.Buyer;
import com.mph.entity.Property;
import com.mph.entity.Seller;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{
	@Autowired
	SellerDao sellerDao;
	
	@Autowired
	BuyerDao buyerDao;
	
	@Override
	public List<Seller> getSellerList() {
		return sellerDao.getSellerList();
	}

	@Override
	public String updateSeller(Seller seller) {
		return sellerDao.updateSeller(seller);
	}

	@Override
	public String deleteSeller(int sellerId) {
		return sellerDao.deleteSeller(sellerId);
	}

	@Override
	public String createSeller(Seller seller) {
		return sellerDao.createSeller(seller);
	}

	@Override
	public Seller getSellerById(int sellerId) {
		return sellerDao.getSellerById(sellerId);
	}

	@Override
	public List<Buyer> getBuyerList() {
		return buyerDao.getBuyerList();
	}

	@Override
	public String updateBuyer(Buyer buyer) {
		return buyerDao.updateBuyer(buyer);
	}

	@Override
	public String deleteBuyer(int buyerId) {
		return buyerDao.deleteBuyer(buyerId);
	}

	@Override
	public String createBuyer(Buyer buyer) {
		return buyerDao.createBuyer(buyer);
	}

	@Override
	public Buyer getBuyerById(int buyerId) {
		return buyerDao.getBuyerById(buyerId);
	}
	
//	login
	
	@Override
	public Seller getSellerByEmailandPassword(String email, String password) {
		return sellerDao.getSellerByEmailandPassword(email,password);
	}
	
	@Override
	public Buyer getBuyerByEmailandPassword(String email, String password) {
		return buyerDao.getBuyerByEmailandPassword(email,password);
	}

	@Override
	public List<Property> reomveFromWishlist(int buyerId, int propertyId) {
		return buyerDao.reomveFromWishlist(buyerId,propertyId);
		
	}

	@Override
	public List<Property> addFromWishlist(int buyerId, int propertyId) {
		return buyerDao.addFromWishlist(buyerId,propertyId);		
	}

	@Override
	public Seller getSellerByEmail(String email) {
		return sellerDao.getSellerByEmail(email);
	}

	@Override
	public Buyer getBuyerByEmail(String email) {
		return buyerDao.getBuyerByEmail(email);
	}
	
	



}
