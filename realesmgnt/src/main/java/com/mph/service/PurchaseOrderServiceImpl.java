package com.mph.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mph.dao.PurchaseOrderDao;
import com.mph.entity.PurchaseOrder;

@Service
@Transactional
public class PurchaseOrderServiceImpl implements PurchaseOrderService {
	@Autowired
	PurchaseOrderDao purchaseOrderDao;

	@Override
	public List<PurchaseOrder> getPurchaseOrderList() {
		return purchaseOrderDao.getPurchaseOrderList();
	}

	@Override
	public String updatePurchaseOrder(PurchaseOrder purchaseorder) {
		return purchaseOrderDao.updatePurchaseOrder(purchaseorder);
	}

	@Override
	public String deletePurchaseOrder(int purchaseId) {
		return purchaseOrderDao.deletePurchaseOrder(purchaseId);
	}

	@Override
	public String createPurchaseOrder(PurchaseOrder purchaseorder) {
		return purchaseOrderDao.createPurchaseOrder(purchaseorder);
	}

	@Override
	public PurchaseOrder getPurchaseOrderById(int purchaseId) {
		return purchaseOrderDao.getPurchaseOrderById(purchaseId);
	}

	@Override
	public List<PurchaseOrder> getOrderByBuyerId(int buyerId) {
		return purchaseOrderDao.getOrderByBuyerId(buyerId);
	}

}