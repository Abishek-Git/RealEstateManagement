package com.mph.dao;

import java.util.List;

import com.mph.entity.Employee;

public interface EmployeeDao {
	public List<Employee> getEmployeeList();
	public Employee getEmployee(Employee employee);
	public void createEmployee(Employee employee);
	public List<Employee> updateEmployee(Employee employee);
	public List<Employee> deleteEmployee(int eid);
	public Employee getEmployeeId(int eid);
	public Employee searchEmployeeList(int eid);

	
}
