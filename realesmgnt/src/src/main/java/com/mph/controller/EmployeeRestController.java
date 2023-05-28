package com.mph.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
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

import com.mph.entity.Employee;
import com.mph.service.EmployeeService;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@RestController
@RequestMapping("employee")
@EnableSwagger2
@CrossOrigin(origins = "http://localhost:4200",methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE},
allowCredentials = "true", allowedHeaders = "*")
public class EmployeeRestController {
	@Autowired
	EmployeeService employeeService;
	private static final Logger logger = Logger.getLogger("EmployeeRestController.class");
		
	@GetMapping("allemp")
	public ResponseEntity<List<Employee>> getEmployee() {
		logger.info("Request From Angular to list Empl List");
		System.out.println(logger.getName()+ "                   " + logger.getLevel());
		PropertyConfigurator.configure(EmployeeRestController.class.getClassLoader().getResource("log4j.properties"));
		System.out.println("logging succesful");
		
		
		List<Employee> elist = employeeService.getEmployeeList();
		if (elist.isEmpty()) {
			return new ResponseEntity<List<Employee>>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<List<Employee>>(elist, HttpStatus.OK);
		}
	}

	@PostMapping("createemp")
	public void createEmployee(@RequestBody Employee employee) {
		employeeService.createEmployee(employee);
		System.out.println("employee addes by rest");
	}

	@PutMapping("updateemp")
	public Employee updateEmployee(@RequestBody Employee employee) {
		employeeService.updateEmployee(employee);
		System.out.println("employee updated by rest");
		return employee;
	}

	@DeleteMapping("/deleteemp/{eid}")
	public String deleteEmployee(@PathVariable int eid) {
		employeeService.deleteEmployee(eid);
		System.out.println("employee deleted of id " + eid + "rest");
		return "employee deleted of id " + eid + "rest";

	}

	@GetMapping("getempbyid/{eid}")
	public ResponseEntity<Employee> serachEmployeeById(@PathVariable int eid) {
		Employee emp = employeeService.searchEmployeeList(eid);
		
			return new ResponseEntity<Employee>(emp, HttpStatus.OK);
		
	}
	
	
	
}
