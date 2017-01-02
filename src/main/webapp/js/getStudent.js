 angular.module('myApp', []).controller('studentCtrl', function ($scope,$http) {
	// alert("fkhgvjhv");
            var url = "http://localhost:8080/getStudentDetails";
         
            $http.get(url).success( function(response) {
            //	alert(response);
               $scope.students = response;
            });
         });

/*var app = angular.module('myApp', []);
app.controller('studentController', function($scope) {
	$scope.firstName = "Mahima";

});*/