package com.mph.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mph.entity.Buyer;
import com.mph.entity.Property;
import com.mph.service.PropertyService;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping("/property")
@EnableSwagger2
@CrossOrigin(origins = "*",
methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE},
allowCredentials = "true",allowedHeaders = "*")

/**
 * @author Arun, Akash, Abisheak, Ankitha, Aman, Kajal
 *	@version 1.0.0
 */
public class PropertyRestController {
	
	@Autowired
	PropertyService propertyService;
	/**
	 * This returns the list of property from database to the API in the from of ResponseEntity
	 * @return the propertylist of all property available in the databse 
	 */
	@GetMapping("/getproperty")
	public ResponseEntity<List<Property>> getProperty(){
		List<Property> propertylist = propertyService.getAllProperty();
		return ResponseEntity.ok().body(propertylist);
	}
	/**
	 * It gets property data from request body and update this data into the database based on the property
	 * @param property object which contains all the details about property which got from request body
	 */
	@PutMapping("/updateproperty")
	public void  updateProperty(@RequestBody Property property){
		String p = propertyService.updateProperty(property);
	}
	/**
	 * This method used to create new property in the data using property service using property data from Request Body
	 * @param property object which contains all the details about property which needs to be added in database
	 */
	@PostMapping("/createproperty")
	public Property addProperty(@RequestBody Property property){
		System.out.println("from prop");
		System.out.println(property);
		propertyService.addProperty(property);
		return property;
	}
	/**
	 * Delete property from the database based on their unique property_Id
	 * @param property_Id from the path variable used to identify the property in databse
	 */
	@DeleteMapping("/deleteproperty/{property_Id}")
	public void deleteProperty(@PathVariable("property_Id") int property_Id){
		String p = propertyService.deleteProperty(property_Id);
	}
	/**
	 * It gets the property data from the database using property id which is came from  HTTP request
	 * @param property_Id gets from the path variable, which is unique Id of the property,
	 * @return the unique property object contains all the details of the property based on propertyid
	 */
	@GetMapping("/getpropertybyid/{propertyid}")
	public ResponseEntity<Property> getPropertyById(@PathVariable("propertyid") int propertyId){
		System.out.println(propertyId);
		Property property = propertyService.getPropertyById(propertyId);
		return ResponseEntity.ok().body(property);
	}
	/**
	 * It gets the property data from the database using seller id which is came from  HTTP request
	 * @param sellerid gets from the path variable, which is unique Id of the seller,
	 * @return the unique property detail based on the seller id
	 */
	
	@GetMapping("/propertybysellerid/{sellerid}")
	public ResponseEntity<List<Property>> getPropertyBySellerId(@PathVariable("sellerid") int sellerid){
		System.out.println(sellerid);
		List<Property> property = propertyService.getPropertyBySellerId(sellerid);
		return ResponseEntity.ok().body(property);
	}
	/**
	 * It gets the wishlist data from the database using buyer id which is came from  HTTP request
	 * @param buyerid gets from the path variable, which is unique Id of the buyer,
	 * @return list of property which is wishlisted by the buyer
	 */
	@GetMapping("/wishlistbyid/{buyerid}")
	public ResponseEntity<List<Property>> wishlistByBuyerId(@PathVariable("buyerid") int buyerId) {
		System.out.println("Buyer by id");
		List<Property> buyer = propertyService.getWishListByBuyerId(buyerId);
		return ResponseEntity.ok().body(buyer);
	}
	
	
	
	
	
	
}