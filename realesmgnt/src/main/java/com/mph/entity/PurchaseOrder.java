
package com.mph.entity;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name = "AAPURCHORD")
public class PurchaseOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int purhcaseId;
	
	@OneToOne
	@JoinColumn(name = "Property_Id")
	private Property property;
	
	@OneToOne
	@JoinColumn(name = "BuyerId")
	private Buyer buyer;
	
	@OneToOne
	@JoinColumn(name = "sellerId")
	@JsonIgnore
	private Seller seller;

	private long maxAcceptedPrice;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date time;

	

	public PurchaseOrder() {
		super();
	}

	

	public PurchaseOrder(int purhcaseId, Property property, Buyer buyer, Seller seller, long maxAcceptedPrice,
			Date date) {
		super();
		this.purhcaseId = purhcaseId;
		this.property = property;
		this.buyer = buyer;
		this.seller = seller;
		this.maxAcceptedPrice = maxAcceptedPrice;
		this.time = date;
	}



	public int getPurhcaseId() {
		return purhcaseId;
	}

	public void setPurhcaseId(int purhcaseId) {
		this.purhcaseId = purhcaseId;
	}

	public Buyer getBuyer() {
		return buyer;
	}

	public void setBuyer(Buyer buyer) {
		this.buyer = buyer;
	}

	public long getMaxAcceptedPrice() {
		return maxAcceptedPrice;
	}

	public void setMaxAcceptedPrice(long maxAcceptedPrice) {
		this.maxAcceptedPrice = maxAcceptedPrice;
	}

	public  Date getDate() {
		return time;
	}

	

	public void setDate(Date date) {
		this.time = date;
	}



	public Property getProperty() {
		return property;
	}

	public void setProperty(Property property) {
		this.property = property;
	}

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}

	@Override
	public String toString() {
		return "PurchaseOrder [purhcaseId=" + purhcaseId + ", buyer=" + buyer + ", maxAcceptedPrice=" + maxAcceptedPrice
				+ ", date=" + time+ "]";
	}

}