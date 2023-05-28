package com.mph.controller;

import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.mph.entity.Customer;
import com.mph.entity.LoginUser;
import com.mph.entity.Property;
import com.mph.entity.Seller;
import com.mph.exception.CustomerNotFoundException;
import com.mph.service.CustomerService;

import springfox.documentation.swagger2.annotations.EnableSwagger2;


@RestController
@RequestMapping("/home")
@EnableSwagger2
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
RequestMethod.DELETE }, allowCredentials = "true", allowedHeaders = "*")
/**
 * @author Arun, Akash, Abisheak, Ankitha, Aman, Kajal
 *	@version 1.0.0
 */
public class CustomerRestController {

	@Autowired
	CustomerService customerService;
	
	
	/**
	 * This returns the list of sellers from database to the API in the from of ResponseEntity
	 * @return sellerlist List of all sellers available in the databse 
	 */
	@GetMapping("/getseller")
	public ResponseEntity<List<Seller>> getSeller() {
		

		PropertyConfigurator.configure(CustomerRestController.class.getClassLoader().getResource("log4j.properties"));
		List<Seller> sellerlist = customerService.getSellerList();
		return ResponseEntity.ok().body(sellerlist);
		
	}

	/**
	 * It gets seller data from request body and update this data into the database based on the seller Id
	 * @param seller object which contains all the details about seller which got from request body
	 */
	@PutMapping("/updateseller")
	public void updateSeller(@RequestBody Seller seller) {
		String report = customerService.updateSeller(seller);
		System.out.println(report);
	}

	/**
	 * This method used to create new seller in the data using customer service using seller data from Request Body
	 * @param seller object which contains all the details about seller which needs to be added in database
	 * @throws Exception user defined Exception if the seller data is already in the databse
	 */
	@PostMapping("/createseller")
	public void createSeller(@RequestBody Seller seller) throws Exception {
		String tempmail = seller.getEmail();
		if((tempmail == null) || (tempmail == "")) {
			throw new Exception();
		}
		Seller newSeller = customerService.getSellerByEmail(tempmail);
		if(newSeller != null) {
			throw new Exception();
		}
		String report = customerService.createSeller(seller);
		System.out.println(report);
	}

	/**
	 * It gets the seller data from the database using seller id which is came from  HTTP request
	 * @param sellerId gets from the path variable, which is unique Id of the seller,
	 * @return unique seller object contains all the details of the seller
	 * @throws CustomerNotFoundException raise exception if seller is not found
	 */
	@GetMapping("/sellerbyid/{sellerid}")
	public ResponseEntity<?> SearchSellerById(@PathVariable("sellerid") int sellerId) throws CustomerNotFoundException {
		System.out.println("seller by id");
		Seller seller = customerService.getSellerById(sellerId);
		return ResponseEntity.ok().body(seller);
	}

	/**
	 * Delete seller from the database based on their unique sellerId
	 * @param sellerId from the path variable used to identify the seller in databse
	 */
	@DeleteMapping("/deleteseller/{sellerid}")
	public void deleteSeller(@PathVariable("sellerid") int sellerId) {
		String report = customerService.deleteSeller(sellerId);
		System.out.println(report);
	}

	// ------------------------------BUYER PART-------------------------------

	/**
	 * This used to return the list of buyers from the database in the form of response Entity
	 * @return buyerList contains all 
	 */
	@GetMapping("allcustomer")
	public ResponseEntity<List<Buyer>> showBuyer() {
		List<Buyer> buyerList = customerService.getBuyerList();
		return new ResponseEntity<List<Buyer>>(buyerList, HttpStatus.OK);
	}

	@PostMapping("/registerBuyer")
	public void createBuyer(@RequestBody Buyer buyer) throws Exception {
		String tempmail = buyer.getEmail();
		if((tempmail == null) || (tempmail == "")) {
			throw new Exception();
		}
		Buyer newBuyer = customerService.getBuyerByEmail(tempmail);
		if(newBuyer != null) {
			throw new Exception("Email is Already registered");
		}
		String report = customerService.createBuyer(buyer);
		System.out.println("from register buyrer " + report);
	}

	@PutMapping("/updateBuyer")
	public ResponseEntity<Buyer> updateBuyer(@RequestBody Buyer buyer) {
		System.out.println("Update Rest () " + buyer);
		customerService.updateBuyer(buyer);
		return new ResponseEntity<Buyer>(buyer, HttpStatus.OK);
	}

	@DeleteMapping("/deleteBuyer/{id}")
	public ResponseEntity<?> deleteBuyer(@PathVariable("id") int bid) {
		String report = customerService.deleteBuyer(bid);
		return new ResponseEntity<String>(report, HttpStatus.OK);
	}

	@GetMapping("/buyerbyid/{buyerid}")
	public ResponseEntity<?> SearchBuyerById(@PathVariable("buyerid") int buyerId) {
		System.out.println("Buyer by id");
		Buyer buyer = customerService.getBuyerById(buyerId);
		return ResponseEntity.ok().body(buyer);
	}
	
	
	@GetMapping("/wishlistremove/{buyerid}/{propertyId}")
	public List<Property> reomveFromWishlist(@PathVariable("propertyId") int propertyId,@PathVariable("buyerid") int buyerId) {
		System.out.println("Buyer by id");
		List<Property> proplist = customerService.reomveFromWishlist(buyerId,propertyId);
		return proplist;
	}
	
	@GetMapping("/wishlistadd/{buyerid}/{propertyId}")
	public List<Property> addFromWishlist(@PathVariable("propertyId") int propertyId,@PathVariable("buyerid") int buyerId) {
		System.out.println("Buyer by id");
		List<Property> proplist = customerService.addFromWishlist(buyerId,propertyId);
		return proplist;
	}
	
	
	
//	-------------------------LOGIN---------------------------------------------------
	
	
	@PostMapping("/blogin")
	public LoginUser loginByBuyer(@RequestBody  LoginUser user) throws Exception {
		System.out.println("customer request by  " + user.getEmail());
		String tempEmail = user.getEmail();
		String tempPass = user.getPassword();
		Buyer buyer = new Buyer();
		LoginUser loginUser = new LoginUser();
		if(tempEmail != null && tempPass !=null) {
			buyer = customerService.getBuyerByEmailandPassword(user.getEmail(), user.getPassword());
		}else {
			throw new Exception("Bad Credentials");
		}
		if(buyer != null) {
			loginUser.setId(buyer.getBuyerId());
			loginUser.setEmail(buyer.getEmail());
			loginUser.setPassword(buyer.getPassword());
			loginUser.setUser("buyer");
			return loginUser;
		}else {
			throw new Exception("Bad Credentials");
		}
		
		
		
	}
	
	@PostMapping("/slogin")
	public LoginUser loginBySeller(@RequestBody LoginUser user) throws Exception {
		System.out.println("customer request by  " + user.getEmail());
		String tempEmail = user.getEmail();
		String tempPass = user.getPassword();
		Seller seller = new Seller();
		LoginUser loginUser = new LoginUser();
		if(tempEmail != null && tempPass !=null) {
			seller = customerService.getSellerByEmailandPassword(user.getEmail(), user.getPassword());
		}
		if(seller != null) {
			loginUser.setId(seller.getSellerId());
			loginUser.setEmail(seller.getEmail());
			loginUser.setPassword(seller.getPassword());
			loginUser.setUser("seller");
			return loginUser;
		}else {
			throw new Exception("Bad Credentials");
		}
		
	}
	
	@PostMapping("/adminlogin")
	public LoginUser adminLogin(@RequestBody LoginUser user) throws Exception {
		System.out.println("Admin Login request by  " + user.getEmail());
		if((user.getEmail() == null) || (user.getPassword() ==null)) {
			throw new Exception("Enter valid password and mail");
		}
		else if((user.getEmail().equals("admin@mail.com")) && (user.getPassword().equals("admin"))) {
			LoginUser loginUser = new LoginUser(101, "admin@mail.com", "admin", "admin");
			return loginUser;
		}else {
			throw new Exception("Bad Credentials");
		}
		
	}
	
	
	

}