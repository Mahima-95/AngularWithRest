<%@ page import="java.util.List"%>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/css//getStudent.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
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
				<th>Update</th>
			</tr>
			<tr ng-repeat="student in students">

				<td>{{ student.studentId }}</td>
				<td contenteditable="true">{{ student.studentName }}</td>
				<td contenteditable="true">{{ student.studentField }}</td>
				<td contenteditable="true">{{ student.studentCourse }}</td>
				<td contenteditable="true">{{ student.studentAddress }}</td>
				<td>
					<button type="button" ng-click="editStudent(student)">Update</button>
				</td>
			</tr>
		</table>
		<button type="button" ng-click="addStudent()">Add Student</button>
		</div ng-app="newApp">
		<div>
		<button type="button" ng-dialog="firstDialogId"
			ng-dialog-controller="InsideCtrl"
			ng-dialog-data="{&quot;foo&quot;: &quot;bar&quot;}"
			ng-dialog-class="ngdialog-theme-default" ng-dialog-scope="this"
			ng-dialog-show-close="false" class="ng-isolate-scope">Open
			via directive</button>
	</div>
</body>
</html>