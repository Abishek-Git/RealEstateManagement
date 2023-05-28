package com.mph.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mph.entity.Buyer;
import com.mph.entity.Property;
/**
 * @author Arun, Akash, Abisheak, Ankita, Aman, Kajal
 *	@version 1.0.0
 */
@Repository
public class PropertyDaoImpl implements PropertyDao {
	Property property;
	
	/*@Autowired enables you to inject the object 
	    dependency implicitly. 
	 * It internally uses setter or constructor injection.
	 * @return report information about this specific operation 
	 * */
	@Autowired
	private SessionFactory sessionFactory;
	@Autowired
	private BuyerDao buyerDao;
	
	protected Session getSession()
	{
		return sessionFactory.getCurrentSession();
	}
	
	
	/* This method is  used to add property using getSession
	 * @getSession:
	 * The main function of the Session is to offer 
	 * create, read and delete operations for 
	 * instances of mapped entity classes
	 *  @override: informs the compiler that the element is meant to 
	 *  override an element declared in a superclass
	 *  @return report information about this specific operation 
	 * */
	@Override
	public String addProperty(Property property) {
		getSession().save(property);
		return "Property added succesfully";
	}
	
	
	/* This method is used get the property list
	 * @return report information about this specific operation 
	 * 
	 * */

	@Override
	public List<Property> getAllProperty() {
		Query qry = getSession().createQuery("from Property");
		@SuppressWarnings("unchecked")
		List<Property> proplist = qry.list();
		System.out.println(proplist);
		return proplist;
	}
	/* This method is get the property by id present in the request path*
	 * @return report information about this specific operation 
	 */

	@Override
	public Property getPropertyById(int property_Id) {
		Query query = getSession().createQuery("from Property where property_Id=:sid").setParameter("sid", property_Id);
		Property prop = (Property)query.uniqueResult();
		System.out.println(prop);
		return prop;
	}
	
/* this method will update the property 
 * 
 * @executeUpdate:
 * If executing a stored procedure results in an 
 * update count that is greater than one, or that generates more than one result set, use the 
 * execute method to execute the stored procedure.
 * 
 * @return report information about this specific operation 
 * */
	@Override
	public String updateProperty(Property property) {
		System.out.println(property);
		Query query =getSession().createQuery("update Property set property_Type=:type,price=:lpri,status=:sta,contact=:cont,description=:descp, latitude=:lat,longitude=:lng,place=:pce, floor=:flr, bhk=:bhk  where property_Id=:num");
		
		query.setParameter("type", property.getProperty_Type()).setParameter("lpri",property.getPrice()).setParameter("sta",property.isStatus()).setParameter("cont",property.getContact());
		query.setParameter("descp",property.getDescription()).setParameter("num", property.getProperty_Id()).setParameter("lat", property.getLatitude()).setParameter("lng", property.getLongitude()).setParameter("pce", property.getPlace());
		query.setParameter("flr", property.getFloor()).setParameter("bhk", property.getBhk());
		int p = query.executeUpdate();
		System.out.println(p + "records Updated.....:)");
		return property.getProperty_Id()+ "Updated Succesfully";
		
	}
	
	
	/* This method perform operation to delete the property based 
	 * on their property id present
	 *  in the request path*/
    @Override
	public String deleteProperty(int property_Id) {
		Query query = getSession().createQuery("delete from Property where property_Id=:id").setParameter("id", property_Id);
		int p = query.executeUpdate();
		if(p>0) {
			return "Property with Id "+ property_Id +" deleted Succesfully";
		}else {
			return "Property not found";
		}
	}
	
	
	
	/* This method is to get the property by sellerId present in the request path.
	 * @param sellerId presents in the request path which is used 
	 * to get property from the database
	 * @return report information about this specific operation 
	 */

	@Override
	public List<Property> getPropertyBySellerId(int sellerId) {
		Query qry = getSession().createQuery("from Property where sellerId=:sid").setParameter("sid", sellerId);
		@SuppressWarnings("unchecked")
		List<Property> proplist = qry.list();
		System.out.println(proplist);
		return proplist;
	}
	
	
	/* This method is to get WishList by buyer id present in the request path.
	 * @return report information about this specific operation 
	 * 
	 * */

	@Override
	public List<Property> getWishListByBuyerId(int buyerId) {
		List<Property> proplist = new ArrayList<Property>(); 
		Buyer buyer = buyerDao.getBuyerById(buyerId);
		if(buyer.getWishlist() == null) {
			return proplist;

		}
		String wishstr = buyer.getWishlist();
		List<String> wishList = Arrays.asList(wishstr.split(","));
		Set<String> myset = wishList.stream().collect(Collectors.toSet());
		
		for(String wstr : myset) {
			int property_Id = Integer.parseInt(wstr);
			Query qry = getSession().createQuery("from Property where property_Id=:id").setParameter("id", property_Id);
			Property prop = (Property)qry.uniqueResult();
			proplist.add(prop);
		}
		return proplist;
	}
	

}