app.controller('intakeCtrl', function($scope, $http) {
	$http.get("http://localhost:8080/api/school").then(function(response) {
		$scope.list = response.data;
	});
	$scope.filterTable = '';
});
