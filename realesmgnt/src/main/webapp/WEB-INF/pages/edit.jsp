<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit Employee</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</head>
<body>
	Edit here
	
	<div class="container">
		<form action="update" method="POST">
			 <div class="form-group">
    		<label for="txtempid">Employee ID</label>
    		<input type="text" class="form-control" id="txtempid" name="eid" value="${param.eid}" readonly="readonly">
    		</div>
			<div class="form-group">
				<label for="txtempname">Employee Name</label> <input type="text"
					class="form-control" id="txtempname" name="ename" value="${param.ename}"
					placeholder="Edit Ename">
			</div>
			<div class="form-group">
				<label for="lblemail" class="form-label">Email address</label> <input
					type="email" name="email" class="form-control"  id="lblemail"
					placeholder="name@example.com" value="${param.email}" readonly="readonly">
			</div>
			<div class="form-group">
				<label for="lblPassword1" class="form-label">Password</label>
				<input type="password" class="form-control" id="lblPassword1" value="${param.password}" name="password">
			</div>
			<div class="form-group">
				Gender
				<div class="form-check">
					<label class="form-check-label" for="flexRadioMale">Male</label>
					<input class="form-check-input" type="radio" name="gender"
						id="flexRadioMale" value="Male" checked="checked">
				</div>
				<div class="form-check">
					<label class="form-check-label" for="flexRadioFemale">Female</label>
					<input class="form-check-input" type="radio" name="gender"
						id="flexRadioFemale" value="Female">
				</div>
			</div>
			<button type="submit" value="update" class="btn btn-primary">Update Employee</button>
		</form>
	</div>
</body>
</html>