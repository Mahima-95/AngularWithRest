<%@ page import="java.util.List"%>
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
				<th>Address</th>
			</tr>

			<tr ng-repeat="student in students">
				<td>{{ student.ID }}</td>
				<td>{{ student.Name }}</td>
				<td>{{ student.Address }}</td>
			</tr>
		</table>
	</div>
</body>
</html>