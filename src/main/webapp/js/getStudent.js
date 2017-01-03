angular.module('myApp', []).controller('studentCtrl', function($scope, $http) {
	// alert("fkhgvjhv");
	var url = "http://localhost:8080/getStudentDetails";

	$http.get(url).success(function(response) {
		// alert(response);
		$scope.students = response;
	});
});

$scope.addStudent = function() {

	var studentVar = {
			studentId : 0,
			studentName : 'abc',
			studentField : 'sss',
			studentCourse : 'ccc',
			studentAddress : 'Delhi',
		};
	$scope.student.push(studentVar);
};

/*
 * var app = angular.module('myApp', []); app.controller('studentController',
 * function($scope) { $scope.firstName = "Mahima";
 * 
 * });
 */