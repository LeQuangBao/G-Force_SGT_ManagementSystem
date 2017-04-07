app.controller('specializationCtrl', function($scope, $http) {
	// get list specializations
	function getListSpecializations() {
		$http.get("http://localhost:8080/api/specialization").
		then(function(response){
			$scope.list = response.data;
		})
	}
	getListSpecializations();
	
	$scope.addSpecialization = function() {
		var specializationId = document.getElementById("specializationId_add").value;
		var specializationName = document.getElementById("specializationName_add").value;
		var activeElement = document.getElementById("active_add");
		var active = 0;
		if (activeElement.checked == true) {
			active = 1;
		}
		$http({
			method: "POST",
			url: "/api/specialization",
			data: {
				specializationId: specializationId,
				specializationName: specializationName,
				active: active
			},
			dataType: "json",
		}).then(function(response) {
			if (response.status == "201") {
				
			}
		})
	}
	
	$scope.editSpecialization = function() {
		
	}
});