var app = angular.module("calcApp", []);

app.controller ('clcCtrl', function($scope){
      
          	  $scope.amount = "200";
			  $scope.duration="3";
			  $scope.interest="12";
			  
			  $scope.payment = function(){
				  
				  return( ($scope.interest/1200.0*$scope.amount)/(1.0-Math.pow(1.0+$scope.interest/1200.00, -1.0*$scope.duration*12.0)) ).toFixed(2);
				  
			  };
 	
});

