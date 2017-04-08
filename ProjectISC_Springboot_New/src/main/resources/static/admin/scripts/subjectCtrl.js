app.controller('subjectCtrl',
		function($scope, $http) {
			// get list subjects
			function getListsubjects() {
				$http.get("http://localhost:8080/api/subject").then(
						function(response) {
							$scope.list = response.data;
						});
			}
			getListsubjects();

			$scope.addsubject = function() {
				var subjectId = document
						.getElementById("subjectId_add").value;
				var subjectName = document
						.getElementById("subjectName_add").value;
				var activeElement = document.getElementById("active_add");
				var credit = document
						.getElementById("credit_add").value;
				var hour = document
				.getElementById("hour_add").value;
				var description = document
				.getElementById("description_add").value;
				var active = 0;
				if (activeElement.checked == true) {
					active = 1;
				}
				$http({
					method : "POST",
					url : "/api/subject",
					data : {
						Id : Id,
						subjectId : subjectId,
						subjectName : subjectName,
						credit : credit,
						hour : hour,
						description : description,
						active : active
					},
					dataType : "json",
				}).then(function(response) {
					alert(response.status);
					if (response.status == "201") {

					}
				})
			}

			$scope.callEditsubject = function(data) {
				$scope.info = data;
			}

			$scope.editsubject = function() {
				$http({
					method : "PUT",
					url : "/api/subject",
					data : JSON.stringify($scope.info),
					dataType : "json",
				}).then(function(response) {
					
				}, function(response) {
					
				})
			}
		});