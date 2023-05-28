<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
	integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
	integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
	crossorigin="anonymous"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
	integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
	crossorigin="anonymous"></script>
	<script type="text/javascript">
	</script>

</head>
<body>
	                          
        
        
<img src="sample.jpeg" alt="A" />
	<div class="container">
	<nav class="navbar navbar-light bg-light" style="float: left">
  <form class="form-inline" action="search">
    <input class="form-control mr-sm-2" name="eid" type="search" placeholder="Search" aria-label="Search">
    
    <input class="btn btn-outline-success my-2 my-sm-0" type="submit" value="Search" > 
  </form>
</nav>
		<table class="table">
			<thead class="thead-dark">
				<tr>
					<th scope="col">Eid</th>
					<th scope="col">Name</th>
					<th scope="col">Email</th>
					<th scope="col">Gender</th>
					<th colspan="2" align="center" scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="emp" items="${allEmp}">
					<tr>
						<th scope="row"> <c:out value="${emp.eid}"></c:out> </th>
						<td><c:out value="${emp.ename}"></c:out></td>
						<td><c:out value="${emp.email}"></c:out></td>
						<td><c:out value="${emp.gender}"></c:out></td>
						<td><a href="edit?eid=${emp.eid}&ename=${emp.ename}&email=${emp.email}&gender=${emp.gender}"><button class="btn btn-secondary">Edit</button> </a></td>
						<td><a href="delete?eid=${emp.eid}"><button class="btn btn-warning">Delete</button> </a></td>
<td style="width:100px;height:100px"><img src="*/images/sample.jpeg" alt="A" /></td>

					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>