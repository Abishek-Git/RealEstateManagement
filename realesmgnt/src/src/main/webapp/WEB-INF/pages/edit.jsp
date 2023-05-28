<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
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

</head>
<body>
	<div class="container" style="margin-top: 40px">
		<form action="update" method="post" enctype="multipart/form-data">
		<div class="form-group">
				<label for="exampleInputEmail1">Emmployee Id</label> <input
					type="text" name="eid" class="form-control" value="${param.eid}" readonly="readonly"
					id="exampleInputEmail1" aria-describedby="emailHelp"
					placeholder="Enter email">
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Email address</label> <input
					type="email" name="email" class="form-control" value="${param.email}"
					id="exampleInputEmail1" aria-describedby="emailHelp"
					placeholder="Enter email">
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Name</label> <input
					type="text" name="ename" class="form-control"  value="${param.ename}"
					id="exampleInputEmail1" aria-describedby="emailHelp"
					placeholder="Enter email">
			</div>
			<div class="form-group">
			<input type="file" name="file" />
			
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
			<button type="submit" value="update" class="btn btn-primary">Update</button>
		</form>
	</div>
</body>
</html>