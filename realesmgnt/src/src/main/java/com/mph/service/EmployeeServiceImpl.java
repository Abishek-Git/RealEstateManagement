package com.mph.service;

import java.util.List;

import org.hibernate.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mph.dao.EmployeeDao;
import com.mph.entity.Employee;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	EmployeeDao employeeDao;

	@Override
	public List<Employee> getEmployeeList() {
		return employeeDao.getEmployeeList();
	}

	@Override
	public Employee getEmployee(Employee employee) {
		return employeeDao.getEmployee(employee);
	}

	@Override
	public void createEmployee(Employee employee) {
		employeeDao.createEmployee(employee);
	}

	@Override
	public List<Employee> updateEmployee(Employee employee) {
		return employeeDao.updateEmployee(employee);
	}

	@Override
	public List<Employee> deleteEmployee(int eid) {
		return employeeDao.deleteEmployee(eid);
	}

	@Override
	public Employee getEmployeeId(int eid) {
		return employeeDao.getEmployeeId(eid);
	}

	@Override
	public Employee searchEmployeeList(int eid) {
		return employeeDao.searchEmployeeList(eid);
	}
}
