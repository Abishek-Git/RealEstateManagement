package com.mph.dao;

import java.util.List;

import com.mph.entity.PurchaseOrder;

public interface PurchaseOrderDao {
	public List<PurchaseOrder> getPurchaseOrderList();
	public String updatePurchaseOrder(PurchaseOrder purchaseorder);
	public String deletePurchaseOrder(int purchaseId);
	public String createPurchaseOrder(PurchaseOrder purchaseorder);
	public PurchaseOrder getPurchaseOrderById(int purchaseId);
	public List<PurchaseOrder> getOrderByBuyerId(int buyerId);

}