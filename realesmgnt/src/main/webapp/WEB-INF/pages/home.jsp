<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>EMS</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
	integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
	crossorigin="anonymous"></script>

</head>
<body>
	<nav class="navbar navbar-light bg-light">
		<form action="search" method="get" class="form-inline">
			<input class="form-control mr-sm-2" type="search" name="txteid"
				placeholder="Search by Employee ID" aria-label="Search">
			<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form>
		<a href="getBack">Back</a>
	</nav>

	Home Page ${NOTIFICATION}
	<table border="1">
		<tr>
			<th>Emp Number</th>
			<th>Emp Name</th>
			<th>Email</th>
			<th>Password</th>
			<th>Gender</th>
			<th colspan="2">Action</th>
		</tr>
		<c:forEach var="emp" items="${allemp}">
			<tr>
				<td><c:out value="${emp.eid}"></c:out></td>
				<td><c:out value="${emp.ename}"></c:out></td>
				<td><c:out value="${emp.email}"></c:out></td>
				<td><c:out value="${emp.password}"></c:out></td>
				<td><c:out value="${emp.gender}"></c:out></td>
				<td><a href="edit?eid=${emp.eid}">EDIT</a></td>
				<td><a href="delete?eid=${emp.eid}">DELETE</a></td>
			</tr>

		</c:forEach>

	</table>
</body>
</html>