app.controller('intakeCtrl', function($scope, $http) {
	$http.get("http://localhost:8080/api/intake").then(function(response) {
		$scope.list = response.data;
	});
});