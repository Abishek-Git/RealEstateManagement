package com.mph.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mph.entity.Employee;
import com.mph.service.EmployeeService;

@Repository
public class EmployeeDaoImpl implements EmployeeDao {
	@Autowired
	private SessionFactory sessionFactory;

	protected Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	@Override
	public List<Employee> getEmployeeList() {
		Query query = getSession().createQuery("from Employee");
		List<Employee> emplist = query.list();
		return emplist;
	}

	@Override
	public Employee getEmployee(Employee employee) {
		Criteria c = getSession().createCriteria(Employee.class);
		c.add(Restrictions.eq("email", employee.getEmail()));
		Employee emp = (Employee) c.uniqueResult();
		return emp;
	}

	@Override
	public void createEmployee(Employee employee) {
		getSession().save(employee);
		System.out.println("Employee saved succesfully");
	}

	@Override
	public List<Employee> updateEmployee(Employee employee) {
		Query query = getSession().createQuery("update Employee set ename=:nam, email=:mail,gender=:gen , epicture=:ep where eid=:id");
		query.setParameter("nam", employee.getEname());
		query.setParameter("mail", employee.getEmail());
		query.setParameter("gen", employee.getGender());
		query.setParameter("id", employee.getEid());
		query.setParameter("ep", employee.getEPicture() );
		System.out.println(employee.getEPicture());
		int p = query.executeUpdate();
		System.out.println(p + "rows updated");
		return getEmployeeList();
	}

	@Override
	public List<Employee> deleteEmployee(int eid) {
		Query query = getSession().createQuery("delete from Employee where eid=:id").setParameter("id", eid);
		int p = query.executeUpdate();
		System.out.println(p + "row deleted successfully");
		return getEmployeeList();
	}

	@Override
	public Employee getEmployeeId(int eid) {
		Query query = getSession().createQuery("from Employee where eid=:id").setParameter("id", eid);
		Employee emp = (Employee) query.uniqueResult();
		System.out.println();
		return emp;
	}
//	@Override
//	public List<Employee> getEmployeeId(int eid) {
//		Query query = getSession().createQuery("from Employee where eid=:id").setParameter("id", eid);
//		List<Employee> emplist = query.list();
//		return emplist;
//	}

	@Override
	public Employee searchEmployeeList(int eid) {
		Query query = getSession().createQuery("from Employee where eid=:id").setParameter("id", eid);
		Employee emp = (Employee) query.uniqueResult();
		return emp;
	}

}
