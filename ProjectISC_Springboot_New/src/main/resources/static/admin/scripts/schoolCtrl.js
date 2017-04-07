
app.controller('schoolCtrl', function($scope, $http) {

	var url = "http://localhost:8080/api/school";
	$http.get(url).then(function(response) {
		$scope.list= response.data;
	});
	$scope.modal = function(id){
		console.log(id);
		$("#myModal").modal('show');
	}
	$scope.deleteSchool = function(id){
		
		$("#myModal_xoa").modal('show');
	}



});
