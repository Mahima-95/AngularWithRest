 angular.module('myApp', []).controller('studentController', function ($scope,$http) {
	 alert("fkhgvjhv");
            var url = "http://localhost:8080/data.txt";
         
            $http.get(url).success( function(response) {
            	alert(response);
               $scope.students = response;
            });
         });

/*var app = angular.module('myApp', []);
app.controller('studentController', function($scope) {
	$scope.firstName = "Mahima";

});*/