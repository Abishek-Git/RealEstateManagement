package com.mph.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mph.entity.Buyer;
import com.mph.entity.Property;
import com.mph.entity.Seller;

/**
 * @author Arun, Akash, Abisheak, Ankitha, Aman, Kajal
 *	@version 1.0.0
 */

@Repository
public class CustomerDaoImpl implements BuyerDao, SellerDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	@Autowired
	private PropertyDao propertyDao;
	
	protected Session getSession() {
		return sessionFactory.getCurrentSession();
	}
 
	/**
	 *This is the Dao method to get list of all sellers
	 *@return after fetching the data from the database it returns it in the form of list
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Seller> getSellerList() {
		Query query = getSession().createQuery("from Seller");
		List<Seller> sellerList = query.list();
		System.out.println("seller list");
		System.out.println(sellerList);
		return sellerList;
	}

	/**
	 *This method in Dao is used to update an already existing sellers details
	 *@param seller of the type class Seller 
	 *@return returns a string statment to pass the status message
	 */
	@Override
	public String updateSeller(Seller seller) {
		System.out.println("from update seler");
		Query query = getSession().createQuery("update Seller set fName=:fnam, lName=:lnam,phoneNumber=:pn, email=:mail, pan=:pan, adhar=:adr, password=:pass where sellerId=:sid");
		query.setParameter("fnam", seller.getfName()).setParameter("lnam", seller.getlName()).setParameter("pn", seller.getPhoneNumber()).setParameter("mail", seller.getEmail());
		query.setParameter("pan", seller.getPan()).setParameter("adr", seller.getAdhar()).setParameter("pass", seller.getPassword()).setParameter("sid", seller.getSellerId());
		int p = query.executeUpdate();
		System.out.println(p + " records updated");
		return seller.getSellerId() + "Updated Succesfully";
	}

	/**
	 *This method is used to delete an existing seller from the database
	 *@param sellerId is taken in to get the row of the specific seller id
	 *@return a string message is returned to ensure the deletion of the particular user
	 */
	@Override
	public String deleteSeller(int sellerId) {
		Query query = getSession().createQuery("delete from Seller where sellerId=:id").setParameter("id", sellerId);
		int p = query.executeUpdate();
		if(p>0) {
			return "Seller with Id "+ sellerId +" deleted Succesfully";
		}else {
			return "Seller not found";
		}
	}

	/**
	 *This method is used to create a new seller in the database
	 *@param seller is taken in as parameter which is of type Seller class
	 *@return a string statment to ensure the status message 
	 */
	@Override
	public String createSeller(Seller seller) {
		getSession().save(seller);
		return "Seller added succesfully";
	}

	/**
	 *This method is used to get a specific seller data using its Id
	 *@param sellerId taken in a parameter of integer type as a reference to the seller in database
	 *@return Seller object which is set with the particular seller's data 
	 */
	@Override
	public Seller getSellerById(int sellerId) {
		Query query = getSession().createQuery("from Seller where sellerid=:sid").setParameter("sid", sellerId);
		Seller seller = (Seller)query.uniqueResult();
		System.out.println(seller);
		return seller;
	}

	/**
	 *This is the Dao method to get list of all buyers
	 *@return after fetching the data from the database it returns it in the form of list
	 */
	@Override
	public List<Buyer> getBuyerList() {
		Query query = getSession().createQuery("from Buyer");
		@SuppressWarnings("unchecked")
		List<Buyer> buyerList = query.list();
		System.out.println("buyer list");
		System.out.println(buyerList);
		return buyerList;
	}

	
	/**
	 *This method in Dao is used to update an already existing buyer details
	 *@param buyer of the type class Buyer 
	 *@return returns a string statment to pass the status message
	 */
	@Override
	public String updateBuyer(Buyer buyer) {
		Query query = getSession().createQuery("update Buyer set fname=:fnam, lname=:lnam,phoneNumber=:pn, email=:mail, pan=:pan, adhar=:adr, password=:pass, wishlist=:wl, address=:ad, country=:con,zipcode=:zip where buyerid=:sid");
		query.setParameter("fnam", buyer.getfName()).setParameter("lnam", buyer.getlName()).setParameter("pn", buyer.getPhoneNumber()).setParameter("mail", buyer.getEmail());
		query.setParameter("pan", buyer.getPan()).setParameter("adr", buyer.getAdhar()).setParameter("pass", buyer.getPassword()).setParameter("sid", buyer.getBuyerId());
		query.setParameter("wl", buyer.getWishlist()).setParameter("ad", buyer.getAddress()).setParameter("con", buyer.getCountry()).setParameter("zip", buyer.getZipcode());
		int p = query.executeUpdate();
		System.out.println(p + " records updated");
		return buyer.getBuyerId() + "Updated Succesfully";
	}

	
	
	/**
	 *This method is used to delete an existing buyer from the database
	 *@param buyerId is taken in to get the row of the specific buyer id
	 *@return a string message is returned to ensure the deletion of the particular user
	 */
	@Override
	public String deleteBuyer(int buyerId) {
		Query query = getSession().createQuery("delete from Buyer where buyerId=:id").setParameter("id", buyerId);
		int p = query.executeUpdate();
		if(p>0) {
			return "Buyer with Id "+ buyerId +" deleted Succesfully";
		}else {
			return "Buyer not found";
		}
	}

	
	/**
	 *This method is used to create a new buyer in the database
	 *@param buyer is taken in as parameter which is of type Buyer class
	 *@return a string statment to ensure the status message 
	 */
	@Override
	public String createBuyer(Buyer buyer) {
		getSession().saveOrUpdate(buyer);
		return "Buyer added succesfully";
	}


	
	/**
	 *This method is used to get a specific seller data using its Id
	 *@param buyerId taken in a parameter of integer type as a reference to the buyer in database
	 *@return Buyer object which is set with the particular buyer's data 
	 */
	@Override
	public Buyer getBuyerById(int buyerId) {
		Query query = getSession().createQuery("from Buyer where buyerId=:sid").setParameter("sid", buyerId);
		Buyer buyer = (Buyer)query.uniqueResult();
		System.out.println(buyer);
		return buyer;
	}
	
//	-------------------------login---------------------------
	
	/**
	 *This method is used to get a specific Buyer information by taking email and password
	 *@param email Buyer's email id is taken in for referencing that row 
	 *@param password is also taken in as reference to get the users data
	 *@return buyer object of type Buyer is returned at the end
	 */
	@Override
	public Buyer getBuyerByEmailandPassword(String email, String password) {
		Query query = getSession().createQuery("from Buyer where email=:mail and password=:pass").setParameter("mail", email).setParameter("pass", password);
		Buyer buyer = (Buyer) query.uniqueResult();
		return buyer;
	}
	
	/**
	 *This method is sued to get a specific buyers information with email as reference
	 *@param email string is taken in as parameter
	 *@return buyer object of type Buyer is returned at the end which has the users details set 
	 */
	@Override
	public Buyer getBuyerByEmail(String email) {
		Query query = getSession().createQuery("from Buyer where email=:mail").setParameter("mail", email);
		Buyer buyer = (Buyer) query.uniqueResult();
		return buyer;
	}
	
	/**
	 *This method is used to get a specific Seller information by taking email and password
	 *@param email Seller's email id is taken in for referencing that row 
	 *@param password is also taken in as reference to get the users data
	 *@return seller object of type Seller is returned at the end
	 */
	@Override
	public Seller getSellerByEmailandPassword(String email, String password) {
		Query query = getSession().createQuery("from Seller where email=:mail and password=:pass").setParameter("mail", email).setParameter("pass", password);
		Seller seller = (Seller) query.uniqueResult();
		return seller;
	}
	
	
	/**
	 *This method is sued to get a specific sellers information with email as reference
	 *@param email string is taken in as parameter
	 *@return seller object of type Seller is returned at the end which has the users details set 
	 */
	@Override
	public Seller getSellerByEmail(String email) {
		Query query = getSession().createQuery("from Seller where email=:mail").setParameter("mail", email);
		Seller seller = (Seller) query.uniqueResult();
		return seller;
	}

	/**
	 *This method is used to remove a property which is added to a specific buyer's wish list
	 *@param buyerId an integer value used to reference the specific buyer who's wish list is to be edited
	 *@param propertyId an integer value used to reference the property which is to be deleted
	 *@return Property list is returned of the specific users wish list to confirm that the property specified was deleted from the list
	 */
	@Override
	public List<Property> reomveFromWishlist(int buyerId,int propertyId) {
		Buyer buyer = getBuyerById(buyerId);
		String wishstr = buyer.getWishlist();
		List<String> wishList = Arrays.asList(wishstr.split(","));
		Set<String> myset = wishList.stream().collect(Collectors.toSet());
		myset.remove(propertyId+"");
		String finalStr = "" ;
		for(String fstr : myset) {
			finalStr = finalStr+fstr+",";
		}
		if(finalStr.equals("")) {
			finalStr = null;
		}
		buyer.setWishlist(finalStr);
		updateBuyer(buyer);
		return propertyDao.getWishListByBuyerId(buyerId);

	}

	
	/**
	 *This method is used to add a property to a specific buyer's wish list
	 *@param buyerId an integer value used to reference the specific buyer who's wish list is to be edited
	 *@param propertyId an integer value used to reference the property which is to be added to thier list
	 *@return Property list is returned of the specific users wish list to confirm that the property specified was added to the list
	 */
	@Override
	public List<Property> addFromWishlist(int buyerId, int propertyId) {
		Buyer buyer = getBuyerById(buyerId);
		String wishstr = buyer.getWishlist();
		List<String> wishList = new ArrayList<String>();
		if(wishstr !=null) {
			 wishList = Arrays.asList(wishstr.split(","));
		}else {
			buyer.setWishlist(propertyId+"");
			updateBuyer(buyer);
			return propertyDao.getWishListByBuyerId(buyerId);
		}
		Set<String> myset = wishList.stream().collect(Collectors.toSet());
		myset.add(propertyId+"");
		String finalStr = "" ;
		for(String fstr : myset) {
			finalStr = finalStr+fstr+",";
		}
		buyer.setWishlist(finalStr);
		updateBuyer(buyer);
		return propertyDao.getWishListByBuyerId(buyerId);
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
