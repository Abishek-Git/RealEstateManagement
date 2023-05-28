<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Register Page</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</head>
<body>
	Register Here Employees
	<a href="loginpage">Login Here</a>

	<div class="container">
		<form action="register" method="post">
			
			<div class="form-group">
				<label for="txtempname">Employee Name</label> <input type="text"
					class="form-control" id="txtempname" name="txtename"
					placeholder="Enter EName">
			</div>
			<div class="form-group">
				<label for="lblemail" class="form-label">Email address</label> <input
					type="email" name="txtemail" class="form-control" name="txtemail" id="lblemail"
					placeholder="name@example.com">
			</div>
			<div class="form-group">
				<label for="lblPassword1" class="form-label">Password</label>
				<input type="password" class="form-control" id="lblPassword1" name="txtpassword">
			</div>
			<div class="form-group">
				Gender
				<div class="form-check">
					<label class="form-check-label" for="flexRadioMale">Male</label>
					<input class="form-check-input" type="radio" name="txtgender"
						id="flexRadioMale" value="Male" checked="checked">
				</div>
				<div class="form-check">
					<label class="form-check-label" for="flexRadioFemale">Female</label>
					<input class="form-check-input" type="radio" name="txtgender"
						id="flexRadioFemale" value="Female">
				</div>
			</div>
			<button type="submit" class="btn btn-primary">Add Employee</button>
		</form>
	</div>
</body>
</html>