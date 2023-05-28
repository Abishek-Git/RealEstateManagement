package com.mph.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mph.dao.PropertyDao;
import com.mph.dao.SellerDao;
import com.mph.entity.Buyer;
import com.mph.entity.Property;
import com.mph.entity.Seller;

@Service
@Transactional
public class PropertyServiceImpl implements PropertyService {
	@Autowired
	PropertyDao propertyDao;
	@Autowired
	SellerDao sellerDao;
	
	@Override
	public String addProperty(Property property) {
		Seller seller = sellerDao.getSellerById(property.getSeller().getSellerId());
		System.out.println(seller);
		property.setSeller(seller);
		return propertyDao.addProperty(property);
	}

	@Override
	public List<Property> getAllProperty() {
		
		return propertyDao.getAllProperty();
	}

	@Override
	public Property getPropertyById(int property_Id) {
		return propertyDao.getPropertyById(property_Id) ;
	}

	@Override
	public String updateProperty(Property property) {
		return propertyDao.updateProperty(property) ;
		
	}

	@Override
	public String deleteProperty(int property_Id) {
		return propertyDao.deleteProperty(property_Id);
	}

	@Override
	public List<Property> getPropertyBySellerId(int sellerId) {
		return propertyDao.getPropertyBySellerId(sellerId);
	}

	@Override
	public List<Property> getWishListByBuyerId(int buyerId) {
		// TODO Auto-generated method stub
		return propertyDao.getWishListByBuyerId(buyerId);
	}

	

}
