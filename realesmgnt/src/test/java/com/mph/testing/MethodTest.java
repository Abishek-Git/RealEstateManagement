package com.mph.testing;

import static org.junit.Assert.assertTrue;

//=============
import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.mph.controller.CustomerRestController;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import com.mph.controller.CustomerRestController;
import com.mph.entity.Buyer;
import com.mph.service.CustomerService;

//=============
@WebMvcTest(value=CustomerRestController.class)
@ContextConfiguration(classes= {CustomerRestController.class})
@AutoConfigureMockMvc
public class MethodTest {
	


	@Test
	public void testSetAdminId() {
		Buyer buyer = new Buyer();
		buyer.setBuyerId(1);
		assertTrue(buyer.getBuyerId() == 1);
	}

	@Test
	public void testSetAdminName() {
		Buyer buyer = new Buyer();
		buyer.setfName("Arun");
		assertTrue(buyer.getfName() == "Arun");
	}

	@Test
	public void testSetAdminEmail() {
		Buyer buyer = new Buyer();
		buyer.setEmail("ak@g.com");
		assertTrue(buyer.getEmail() == "ak@g.com");
	}

	@Test
	public void testSetAdminPassword() {
		Buyer buyer = new Buyer();
		buyer.setPassword("pwd");
		assertTrue(buyer.getPassword() == "pwd");
	}

		private MockMvc mockMvc;
	    @InjectMocks
	    CustomerRestController customer;
	    
	    @Mock
	    CustomerService customerService;
	    
	    @Before
	    public void setUp(){
	    	MockitoAnnotations.initMocks(this);
	        mockMvc = MockMvcBuilders.standaloneSetup(customerService).build();
	    }
	    
	  
	    

	@Test
	 public void testgetOrderById() throws Exception{
		
		  
		Buyer buyer = new Buyer(1,"1,2","25 main","india","aaa");
		Mockito.when(customerService.getBuyerById(1)).thenReturn(buyer);
		mockMvc.perform(MockMvcRequestBuilders.get("/home/buyerbyid/1")
		        .accept(MediaType.APPLICATION_JSON))
		                .andExpect(MockMvcResultMatchers.status().isOk())
		                .andExpect(MockMvcResultMatchers.jsonPath("$.buyerId", Matchers.is(1)))
		                .andExpect(MockMvcResultMatchers.jsonPath("$.wishlist",Matchers.is("1,2")))
		                .andExpect(MockMvcResultMatchers.jsonPath("$.address",Matchers.is("25 main")))
		                .andExpect(MockMvcResultMatchers.jsonPath("$.country",Matchers.is("india")))
		                .andExpect(MockMvcResultMatchers.jsonPath("$.zipcode",Matchers.is("123")));
		                 Mockito.verify(customerService).getBuyerById(1);
		
	}


	

}