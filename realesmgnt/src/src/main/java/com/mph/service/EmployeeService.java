package com.mph.service;

import java.util.List;

import com.mph.entity.Employee;

public interface EmployeeService {
	public List<Employee> getEmployeeList();
	public Employee getEmployee(Employee employee);
	public void createEmployee(Employee employee);
	public List<Employee> updateEmployee(Employee employee);
	public List<Employee> deleteEmployee(int eid);
	public Employee getEmployeeId(int eid);
	public Employee searchEmployeeList(int eid);


}
