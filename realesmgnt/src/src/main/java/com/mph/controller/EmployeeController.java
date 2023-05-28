package com.mph.controller;

import java.io.BufferedOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.fileupload.FileItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.mph.entity.Employee;
import com.mph.service.EmployeeService;

import oracle.sql.BLOB;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@Controller
@EnableSwagger2
public class EmployeeController {
	@Autowired
	EmployeeService employeeService;
	
	
	/**
	 * @return Returns the register page via ModelAndView
	 */
	@RequestMapping(value = "registerpage", method = RequestMethod.GET)
	public ModelAndView register() { 
		return new ModelAndView("register"); 
	}
	
	
	/**
	 * @param email getting from user and validate with database
	 * @param password getting from user and validate with database
	 * @return This returns the method allEmployee()
	 */
	@RequestMapping(value = "loginpage", method = RequestMethod.GET)
	public ModelAndView login(@RequestParam(name = "email") String email,
							  @RequestParam(name = "password") String password) {
		Employee employee = new Employee();
		employee.setEmail(email);
		employee.setPassword(password);
		Employee emp =  employeeService.getEmployee(employee);
		if(emp == null) {
			ModelAndView mv = new ModelAndView("login");
			mv.addObject("invalid", "Email or Password is incorrect");
			return mv;
		}else {
			if(emp.getPassword().equals(employee.getPassword())) {
				System.out.println("password match");
				return allEmployee();
			}else {
				ModelAndView mvp = new ModelAndView("login");
				mvp.addObject("invalid", "Password is incorrect");
				return mvp;
			}
		}
	}
	
	private ModelAndView allEmployee() {
			ModelAndView mv = new ModelAndView("home");
			List<Employee> allEmp = employeeService.getEmployeeList();
//			for(Employee A : allEmp ) {
//				if(A.getEPicture() != null) {
//					byte[] bits = A.getEPicture();
//					try {
//						FileOutputStream outputStream = new FileOutputStream(A.getEid()+A.getEname()+".jpeg");
//						outputStream.write(bits);
//						outputStream.close();
//						A.setFileName(A.getEid()+A.getEname()+".jpeg");
//					} catch (IOException e) {
//						e.printStackTrace();
//					}
//				}
//				
//			}
			System.out.println("mv home"+ allEmp );
			mv.addObject("allEmp", allEmp);
		return mv;
	}
	


	@RequestMapping(value = "register", method = RequestMethod.POST)
	public ModelAndView signup(@RequestParam(name ="ename" ) String ename,
			@RequestParam(name ="email" ) String email,
			@RequestParam(name ="password" ) String password,
			@RequestParam(name ="txtgender" ) String gender
			) { 
		Employee employee= new Employee();
		employee.setEname(ename);
		employee.setEmail(email);
		employee.setPassword(password);
		employee.setGender(gender);
		
		employeeService.createEmployee(employee);
		System.out.println(ename+"---"+email+"---"+password+"---"+gender);
		return new ModelAndView("login"); 
	}
	
	@RequestMapping(value = "edit", method = RequestMethod.GET)
	public ModelAndView edit(@ModelAttribute Employee emp) { 
		System.out.println("eeeeeo" +emp);
		return new ModelAndView("edit"); 
	}
	
	@RequestMapping(value = "update", method = RequestMethod.POST)
	public ModelAndView update(@ModelAttribute Employee emp, @RequestParam("file") MultipartFile file) { 
		System.out.println("from con");
		try {
			String fileName = StringUtils.cleanPath(file.getOriginalFilename());
			emp.setEPicture(file.getBytes());
			System.out.println(emp.getEPicture());
//			FileDB FileDB = new FileDB(fileName, file.getContentType(), file.getBytes());
		} catch (Exception e) {
			System.out.println("error");
		}
		System.out.println("helloooooo" + emp);
		employeeService.updateEmployee(emp);
		List<Employee> allEmp = employeeService.updateEmployee(emp);
		ModelAndView mv = new ModelAndView("home");
		mv.addObject("allEmp", allEmp);
		return mv;
	}
	
	@RequestMapping(value = "delete", method = RequestMethod.GET)
	public ModelAndView delete(@ModelAttribute Employee emp) { 
		System.out.println("eeeeeo" +emp.getEid());
		employeeService.deleteEmployee(emp.getEid());
		List<Employee> allEmp = employeeService.deleteEmployee(emp.getEid());
		ModelAndView mv = new ModelAndView("home");
		mv.addObject("allEmp", allEmp);
		return mv;
	}
	
	@RequestMapping(value = "search", method = RequestMethod.GET)
	public ModelAndView search(@RequestParam(name = "eid") int eid) { 
		return searchEmployee(eid); 
	}
	
	
	private ModelAndView searchEmployee(int eid) {
		ModelAndView mv = new ModelAndView("home");
		Employee emp = employeeService.searchEmployeeList(eid);
		List<Employee> elist = new ArrayList<Employee>();
		elist.add(emp);
		mv.addObject("allEmp", elist);
	return mv;
}
	
	
}
