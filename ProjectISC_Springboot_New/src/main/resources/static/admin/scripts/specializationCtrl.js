app.controller('specializationCtrl', function($scope, $http) {
	// get list specializations
	function getListSpecializations() {
		$http.get("http://localhost:8080/api/specialization").
		then(function(response){
			$scope.list = response.data;
		})
	}
	getListSpecializations();
});