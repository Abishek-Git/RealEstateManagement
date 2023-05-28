package com.mph.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mph.entity.Buyer;
import com.mph.entity.Property;
import com.mph.entity.PurchaseOrder;
import com.mph.entity.Seller;
import com.mph.service.CustomerService;
import com.mph.service.PropertyService;
import com.mph.service.PurchaseOrderService;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@RestController
@RequestMapping("/purchaseorder")
@EnableSwagger2
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE }, allowCredentials = "true", allowedHeaders = "*")

/**
 * @author Arun, Akash, Abisheak, Ankitha, Aman, Kajal
 *	@version 1.0.0
 */
public class PurchaseOrderRestController {

	@Autowired
	PurchaseOrderService purchaseOrderService;
	@Autowired
	PropertyService propertyService;
	@Autowired
	CustomerService customerService;

	/**
	 * This method used to return all the details about orders which is stored  in the database
	 * @return purchaseOrderList contains the list of orders 
	 */
	@GetMapping("/getpurchaseOrder")
	public ResponseEntity<List<PurchaseOrder>> getProperty() {
		List<PurchaseOrder> purchaseOrderList = purchaseOrderService.getPurchaseOrderList();
		return ResponseEntity.ok().body(purchaseOrderList);
	}

	/**
	 * This updates information about the previously created orders
	 * @param purchaseorder object about the order which present in request body of the HTTP request 
	 * @return report information about this specific operation 
	 */
	@PutMapping("/updatepurchaseOrder")
	public ResponseEntity<?> updatePurchaseOrder(@RequestBody PurchaseOrder purchaseorder) {
		String report = purchaseOrderService.updatePurchaseOrder(purchaseorder);
		return ResponseEntity.ok().body(report);
	}

	/**
	 * This method creates new order with respect to propertyId and buyerId present in the request path
	 * @param propertyId unique id of property for which the order needs to be created
	 * @param buyerId used to get information about buyer to place the order
	 * @throws Exception raise exception if property is not currently available
	 */
	@GetMapping("/createpurchaseOrder/{propertyId}/{buyerId}")
	public void createPurchaseOrder(@PathVariable("propertyId") int propertyId,@PathVariable("buyerId") int buyerId ) throws Exception {
		Property property = propertyService.getPropertyById(propertyId);
		Buyer buyer = customerService.getBuyerById(buyerId);
		Seller seller = customerService.getSellerById(property.getSeller().getSellerId());
		PurchaseOrder purchaseOrder = new PurchaseOrder();
		purchaseOrder.setBuyer(buyer);
		purchaseOrder.setProperty(property);
		purchaseOrder.setMaxAcceptedPrice(property.getPrice());
		purchaseOrder.setSeller(seller);
		if (!property.isStatus()) {
			throw new Exception("property is not available");
		}
		purchaseOrderService.createPurchaseOrder(purchaseOrder);
	}

	/**
	 * This method perform operation to delete the purchase order based on their purchase id present in the request path
	 * @param purchaseid unique id which is used to delete order in the database
	 */
	@DeleteMapping("/deletepurchaseOrder/{purchaseid}")
	public void deletePurchaseOrder(@PathVariable("purchaseid") int purchaseid) {
		purchaseOrderService.deletePurchaseOrder(purchaseid);
	}
	
	/**
	 * To get all the orders placed by buyer based on the buyer id 
	 * @param buyerId presents in the request path which is used to get orders from the database
	 * @return list of orders which is associated with the Buyer
	 */
	@GetMapping("/orderbybuyerid/{buyerid}")
	public ResponseEntity<List<PurchaseOrder>> getOrderByBuyerId(@PathVariable("buyerid") int buyerId) {
		List<PurchaseOrder> purchaseOrderList = purchaseOrderService.getOrderByBuyerId(buyerId);
		return ResponseEntity.ok().body(purchaseOrderList);
	}

}