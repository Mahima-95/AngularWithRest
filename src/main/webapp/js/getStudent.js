var app = angular.module('myApp', []);
	app.controller('studentCtrl', function($scope, $http) {
	// alert("fkhgvjhv");
	var url = "http://localhost:8080/getStudentDetails";

	$http.get(url).success(function(response) {
		// alert(response);
		$scope.students = response;
	});
	/*$scope.addStudent = function() {
		var studentVar = {
			
			 * studentId : 0, studentName : '', studentField : '', studentCourse :
			 * '', studentAddress : '',
			 
		};
		$scope.students.push(studentVar);
	};*/
	/*$scope.editStudent = function(student){
		var stud = angular.copy(student);
		console.log(stud);
	}*/
	
	
});

app.controller('formCtrl',function($scope){
	$scope.name='';
	$scope.field='';
	$scope.course='';
	$scope.address='';
	$scope.studentAdd = function(){
		
	/*	console.log(name);
		console.log(field);
		console.log(course);
		console.log(address);
		console.log($scope.name);*/
	
		return $scope.name + " " +$scope.field+ " " +$scope.course+ " " +$scope.address
	};
	
	//	$scope.field = fieldValue;
	//	$scope.course = courseValue;
	//	$scope.address = addressValue;
	//console.log(nameValue + fieldValue + courseValue + addressValue);
});








