var app = angular.module('myApp', []);
app.controller('studentCtrl', function($scope, $http) {
	var url = "http://localhost:8080/getStudentDetails";

	$http.get(url).success(function(response) {
		$scope.students = response;
	});

	$scope.studentAdd = function() {
		var id = $scope.id;
		var name = $scope.name;
		var field = $scope.field;
		var course = $scope.course;
		var address = $scope.address;

		var studentVar = {

			studentId : 0,
			studentName : name,
			studentField : field,
			studentCourse : course,
			studentAddress : address,
		};
		var res = $http.post('http://localhost:8080/addStudentDetails',
				studentVar);
		res.success(function(data, status, headers, config) {
			// $scope.message = data;
			// $scope.students.push(studentVar);
			$http.get(url).success(function(response) {
				$scope.students = response;
			});
			$scope.IsVisible = false;
		});
		res.error(function(data, status, headers, config) {
			alert("failure message: " + JSON.stringify({
				data : data
			}));
		});

	};

	$scope.IsVisible = false;
	$scope.ShowHide = function() {
		$scope.IsVisible = $scope.IsVisible ? false : true;
	}

	$scope.editStudent = function(stud) {

		$scope.IsVisible = true;
		var id = stud.studentId;
		var name = stud.studentName;
		var field = stud.studentField;
		var course = stud.studentCourse;
		var address = stud.studentAddress;
		
//		var c = document.getElementsByName('update').elements ;
		
		console.log(c);
		
		$scope.id = id;
		$scope.name = name;
		$scope.field = field;
		$scope.course = course;
		$scope.address = address;
	};
});
