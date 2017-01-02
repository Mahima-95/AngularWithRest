 var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
$scope.actor = "Aamir khan";
$scope.actress = "Sakshi Tanwar";
$scope.actress1 = "Fatima Sana";
$scope.actor1 = "Girish Kulkarni";
$scope.actor2 = "Aparshakti Khurrana";
$scope.actor3 = "Sanya Malhotra";
$scope.artists = function(){
return $scope.actor + " , " + $scope.actress+ ", " + $scope.actress1 + ", " + $scope.actor1+ ", " + $scope.actor2+ ", " + $scope.actor3
};
$scope.director = "Nitesh Tiwari";
$scope.rating = 8;
});



app.controller('myCtrllr', function($scope){
	$scope.showme=false;
$scope.myFunc = function(){
$scope.showme = !$scope.showme;
}
	});
