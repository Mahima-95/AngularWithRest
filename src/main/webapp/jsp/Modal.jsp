<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<div class="modal-header">
		<h1>Edit {{student.studentName}}</h1>
	</div>
	<div class="modal-body">
		<p>
			<input ng-model="student.studentId" />
		</p>
	</div>
	<div class="modal-footer">
		<button ng-click="save()" class="btn btn-primary">Save</button>
		<button ng-click="close()" class="btn">close</button>
	</div>

</body>
</html>