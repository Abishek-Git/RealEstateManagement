package com.mph.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mph.entity.Property;
import com.mph.entity.PurchaseOrder;


/**
 * @author Arun, Akash, Abisheak, Ankita, Aman, Kajal
 *	@version 1.0.0
 */




@Repository
public class PurchaseOrderDaoImpl implements PurchaseOrderDao {
    
	/**
	 *  @param enables to inject the object dependency implicitly. 
	 *  It internally uses setter or constructor injection.
	 *
	 */
	@Autowired
	private SessionFactory sessionFactory;
	@Autowired
	PropertyDao propertyDao;
	
	protected Session getSession() {
		return sessionFactory.getCurrentSession();
	}
	
	/**
	 * This method is used to return details of orders stored in the database
	 * @return purchaseOrderList contains the list of orders 
	 */
	@Override
	public List<PurchaseOrder> getPurchaseOrderList() {
		Query query = getSession().createQuery("from PurchaseOrder");
		
		
		/**
		 *  
		 *  @param the compiler will ignore warnings 
		 *  if any for that piece of code
		 *
		 */
		@SuppressWarnings("unchecked")
		List<PurchaseOrder> PurchaseOrderList = query.list();
		System.out.println("PurchaseOrder list");
		System.out.println(PurchaseOrderList);
		return PurchaseOrderList;
	}

	
	
	/**
	 * updates information of created orders
	 * @param purchaseorder object about the order which present in request body of the HTTP request 
	 * @return information of specific operation 
	 */
	@Override
	public String updatePurchaseOrder(PurchaseOrder purchaseorder) {
		Query query = getSession().createQuery("update PurchaseOrder set maxAcceptedPrice=:maxAcceptedPric, date=:dat, property=:propert where purhcaseId=:pid");
		query.setParameter("maxAcceptedPric", purchaseorder.getMaxAcceptedPrice()).setParameter("dat", purchaseorder.getDate()).setParameter("propert", purchaseorder.getProperty()).setParameter("pid", purchaseorder.getPurhcaseId());
		
		int p = query.executeUpdate();
		System.out.println(p + " records updated");
		return purchaseorder.getPurhcaseId() + "Updated Succesfully";
	}

	
	/**
	 *  deletes the purchase order according to purchase id
	 * @param purchaseid is used to delete order in the database
	 */
	@Override
	public String deletePurchaseOrder(int purchaseId) {
		PurchaseOrder purchaseorder = getPurchaseOrderById(purchaseId);
		Property property = propertyDao.getPropertyById(purchaseorder.getProperty().getProperty_Id());
		property.setStatus(true);
		propertyDao.updateProperty(property);
		Query query = getSession().createQuery("delete from PurchaseOrder where purhcaseId=:id").setParameter("id", purchaseId);
		int p = query.executeUpdate();
		if(p>0) {
			return "PurchaseOrder with Id "+ purchaseId +" deleted Succesfully";
		}else {
			return "PurchaseOrder not found";
		}
	}

    
	/**
	 * creates new order 
	 * @param propertyId id of property 
	 * @param buyerId is information about buyer to place the order
	 *
	 */
	@Override
	public String createPurchaseOrder(PurchaseOrder purchaseorder) {
		Property property = propertyDao.getPropertyById(purchaseorder.getProperty().getProperty_Id());
		property.setStatus(false);
		propertyDao.updateProperty(property);
		purchaseorder.setDate(new java.util.Date(System.currentTimeMillis()));
		getSession().save(purchaseorder);
		return "PurchaseOrder added succesfully";
	}

	
	/**
	 * gets all the orders 
	 * @param  get orders from the database by purchaseId
	 * @return purchaseorder
	 */
	@Override
	public PurchaseOrder getPurchaseOrderById(int purchaseId) {
		Query query = getSession().createQuery("from PurchaseOrder where purhcaseId=:poid").setParameter("poid", purchaseId);
		PurchaseOrder purchaseorder = (PurchaseOrder)query.uniqueResult();
		System.out.println(purchaseorder);
		return purchaseorder;
	}

	
	/**
	 * gets all the orders done by buyer
	 * @param  get orders from the database
	 * @return list of orders 
	 */
	@Override
	public List<PurchaseOrder> getOrderByBuyerId(int buyerId) {
		Query query = getSession().createQuery("from PurchaseOrder where buyerId=:poid").setParameter("poid", buyerId);
		@SuppressWarnings("unchecked")
		List<PurchaseOrder> PurchaseOrderList = query.list();
		return PurchaseOrderList;
	}

}