
app.controller('schoolCtrl', function($scope, $http) {
	$http.get("http://localhost:8080/api/school").then(function(response) {
		$scope.list = response.data;
	});
	$scope.modal = function(id){
		console.log(id);
		$("#myModal").modal('show');
	}
	$scope.deleteSchool = function(id){
		
		$("#myModal_xoa").modal('show');
	}



});
