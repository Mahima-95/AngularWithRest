angular.module('myApp', ["ui.bootstrap.modal"]).controller('studentCtrl', function($scope, $http) {
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

angular.module([]).controller('studentCtrl', function($scope, $dilog) {
	var dialogOptions = {
		    controller: 'EditCtrl',
		    templateUrl: 'jsp/Modal.jsp'
		  };
	$scope.addStudent = function(student){
	    
	    var itemToEdit = student;
	    
	    $dialog.dialog(angular.extend(dialogOptions, {resolve: {student: angular.copy(itemToEdit)}}))
	      .open()
	      .then(function(result) {
	        if(result) {
	          angular.copy(result, itemToEdit);                
	        }
	        itemToEdit = undefined;
	    });
	  };
});

function EditCtrl($scope, student, dialog){
	  
	  $scope.student = student;
	  
	  $scope.save = function() {
	    dialog.close($scope.student);
	  };
	  
	  $scope.close = function(){
	    dialog.close(undefined);
	  };
	}


/*
 * angular.module('myApp', ['ngDialog']).controller('InsideCtrl', function
 * ($scope, ngDialog) { alert("abx"); $scope.dialogModel = { message : 'message
 * from passed scope' }; $scope.openSecond = function () { ngDialog.open({
 * template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
 * plain: true, closeByEscape: false, controller: 'SecondModalCtrl' }); }; });
 */

/*
 * var app = angular.module('myApp', []); app.controller('studentController',
 * function($scope) { $scope.firstName = "Mahima";
 * 
 * });
 */



