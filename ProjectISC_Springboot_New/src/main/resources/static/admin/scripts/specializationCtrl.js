app.controller('specializationCtrl', function($scope, $http) {
	$http.get("http://localhost:8080/api/specialization").then(function(response) {
		$scope.list = response.data;
	});
});