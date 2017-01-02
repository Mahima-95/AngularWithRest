<%@ page import="java.util.List" %>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/css//getStudent.css">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<script type="text/javascript" src="/js//getStudent.js"></script>
<title>Angular JS Includes</title>
</head>
<body>
	<h2>getStudentDetails</h2>
	<div ng-app="myApp" ng-controller="studentCtrl">

		<table>
			<tr>
				<th>ID</th>
				<th>Name</th>
				<th>Student Field</th>
				<th>Student Course</th>
				<th>Student Address</th>
			</tr>

			<tr ng-repeat="student in students">
				<td>{{ student.studentId }}</td>
				<td>{{ student.studentName }}</td>
				<td>{{ student.studentField }}</td>
				<td>{{ student.studentCourse }}</td>
				<td>{{ student.studentAddress }}</td>
			</tr>
		</table>
	</div>
</body>
</html>