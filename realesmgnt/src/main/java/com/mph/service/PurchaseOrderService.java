package com.mph.service;

import java.util.List;

import com.mph.entity.PurchaseOrder;

public interface PurchaseOrderService {
	public List<PurchaseOrder> getPurchaseOrderList();
	public String updatePurchaseOrder(PurchaseOrder purchaseorder);
	public String deletePurchaseOrder(int sellerId);
	public String createPurchaseOrder(PurchaseOrder purchaseorder);
	public PurchaseOrder getPurchaseOrderById(int purchaseId);
	public List<PurchaseOrder> getOrderByBuyerId(int buyerId);

}