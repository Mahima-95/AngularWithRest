angular.module('myApp', []).controller('studentCtrl', function($scope, $http) {
	// alert("fkhgvjhv");
	var url = "http://localhost:8080/getStudentDetails";

	$http.get(url).success(function(response) {
		// alert(response);
		$scope.students = response;
	});
	$scope.addStudent = function() {
		var studentVar = {
			/*studentId : 0,
			studentName : '',
			studentField : '',
			studentCourse : '',
			studentAddress : '',*/
		};
		$scope.students.push(studentVar);
	};
	$scope.editStudent = function(student){
		var stud = angular.copy(student);
		console.log(stud);
	}
	
});


angular.module('newApp', ['ngDialog']).controller('InsideCtrl', function ($scope, ngDialog) {
	alert("abx");
	$scope.dialogModel = {
		message : 'message from passed scope'
	};
	$scope.openSecond = function () {
		ngDialog.open({
			template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
			plain: true,
			closeByEscape: false,
			controller: 'SecondModalCtrl'
		});
	};
});

/*
 * var app = angular.module('myApp', []); app.controller('studentController',
 * function($scope) { $scope.firstName = "Mahima";
 * 
 * });
 */



