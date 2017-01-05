<%@ page import="java.util.List"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/css/getStudent.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>

<script
	src="http://angular-ui.github.com/bootstrap/ui-bootstrap-tpls-0.1.0.js"></script>
<script type="text/javascript" src="/js/getStudent.js"></script>
<title>Angular JS Includes</title>
</head>
<body ng-app="myApp">
	<h2>getStudentDetails</h2>
	<div ng-controller="studentCtrl">

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
					<button type="button" name="update" ng-model="update" value="update" ng-click="editStudent(student)">Update</button>
				</td>
			</tr>
		</table>
		<button type="button" ng-click="ShowHide()">Add Student</button>
		<!-- </div>
	<div ng-controller="formCtrl"> -->
		<div class="formCtrl" ng-show="IsVisible">
			<table>
				<tr>
					<td><label>Id</label></td>
					<td><input type="text" ng-model="id" name="id" contenteditable="false"></td>
				</tr>
				<tr>
					<td><label>Name</label></td>
					<td><input type="text" ng-model="name" name="name"></td>
				</tr>
				<tr>
					<td><label>Student Field</label></td>
					<td><input type="text" ng-model="field"></td>
				</tr>
				<tr>
					<td><label>Student Course</label></td>
					<td><input type="text" ng-model="course"></td>
				</tr>
				<tr>
					<td><label>Student Address</label></td>
					<td><input type="text" ng-model="address"></td>
				</tr>
				<tr>
					<td></td>
					<td><input type="submit" name="submit" ng-click="studentAdd()"></td>
				</tr>
			</table>
		</div>
	</div>
	<!-- <div>
		<button type="button" ng-dialog="firstDialogId"
			ng-dialog-controller="InsideCtrl"
			ng-dialog-data="{&quot;foo&quot;: &quot;bar&quot;}"
			ng-dialog-class="ngdialog-theme-default" ng-dialog-scope="this"
			ng-dialog-show-close="false" class="ng-isolate-scope">Open
			via directive</button>
	</div> -->
</body>
</html>