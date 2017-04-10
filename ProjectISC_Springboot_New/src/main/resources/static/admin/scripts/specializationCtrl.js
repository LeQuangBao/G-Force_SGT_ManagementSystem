app.controller('specializationCtrl',
		function($scope, $http) {
			var deleteSpecialization = "";
			var alertDuration = 1800;

			// get list specializations
			function getListSpecializations() {
				$http.get("http://localhost:8080/api/specialization").then(
						function(response) {
							$scope.list = response.data;
						})
			}
			getListSpecializations();

			// refresh list (call get list)
			$scope.refreshList = function() {
				getListSpecializations();
			}
			
//			 $scope.sortType = 'specializationName';
		    	$scope.filterTable = '';
		    	// Tìm kiếm theo tên
		    	$scope.filterSort = function(element) {
		    		if ($filter('filter')([element], $scope.filterTable).length > 0) {
		    			return 1;
		    		}
		    		return 2;
		    	};
		    	
		    	// Phân trang
		    	$scope.currentPage = 1;
		    	// max size of the pagination bar
		    	$scope.maxPaginationSize = 50;
		    	$scope.itemsPerPage = 5;
		    	$scope.updatePageIndexes = function () {
		    		$scope.firstIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
		    		$scope.lastIndex = $scope.currentPage * $scope.itemsPerPage;
		    	};
		    	$scope.updatePageIndexes();
		    	
		    	$scope.showList=function(name,index){
		    		return (($scope.filterSort(name) == 1) && (index >= $scope.firstIndex) && (index < $scope.lastIndex));
		    	}
		    	
			// add specialization
			$scope.addSpecialization = function() {
				var specializationId = document
						.getElementById("specializationId_add").value;
				var specializationName = document
						.getElementById("specializationName_add").value;
				var activeElement = document.getElementById("active_add");
				var active = "";
				if (activeElement.checked == true) {
					active = 1;
				} else
					active = 0;
				$http({
					method : "POST",
					url : "/api/specialization",
					data : {
						specializationId : specializationId,
						specializationName : specializationName,
						active : active
					},
					dataType : "json"
				}).then(function(response) {
					// $("#myModal_them").modal("hide");
					getListSpecializations();
					alertAddSucess();
					$scope.ResetForm_Add();
				}, function(response) {
					alertFailMessage("Oops! Duplicate ID is not allowed.");
				});
				 
			}

			// update specialization
			$scope.callEditSpecialization = function(data) {
				$scope.info = data;
			}

			$scope.editSpecialization = function() {
				$http({
					method : "PUT",
					url : "/api/specialization",
					data : JSON.stringify($scope.info),
					dataType : "json",
				}).then(function(response) {
					alertEditSucess();
				}, function(response) {
					alertFailMessage("Oops! Duplicate ID is not allowed.");
					setTimeout(function() {
						location.reload();
					}, alertDuration);
				});
			}

			// call for data first, then delete specialization
			$scope.callDeleteSpecialization = function(data) {
				deleteSpecialization = data;
			}
			// delete specialization
			$scope.deleteSpecialization = function() {
				$http({
					method : "DELETE",
					url : "/api/specialization/" + deleteSpecialization.id,
					dataType : "json",
				}).then(function(result) {
					if (result.status == 202) {
						$("#myModal_xoa").modal("hide");
						getListSpecializations();
						alertDeleteSucess();
					}
				}, function(response) {
					alertFail();
				});
			}

			// Sort and filter
			$scope.sortType = 'specializationName';
			$scope.sortReverse = false;
			$scope.searchName = '';

			function alertDeleteSucess() {
				swal({
					title : "",
					text : "Delete Successfully",
					type : "success",
					timer : alertDuration,
					showConfirmButton : false
				});
			}
			function alertEditSucess() {
				swal({
					title : "",
					text : "Edit Successfully",
					type : "success",
					timer : alertDuration,
					showConfirmButton : false
				});
			}
			function alertAddSucess() {
				swal({
					title : "",
					text : "Add Successfully",
					type : "success",
					timer : alertDuration,
					showConfirmButton : false
				});
			}
			function alertFail() {
				swal({
					title : "",
					text : "Opps! Something went wrong.",
					type : "error",
					timer : alertDuration,
					showConfirmButton : false
				})
				setTimeout(function() {
					location.reload();
				}, alertDuration);
			}
			function alertFailMessage(message) {
				swal({
					title : "",
					text : message,
					type : "error",
					timer : alertDuration,
					showConfirmButton : false
				})
			}
			//reset form add
			$scope.ResetForm_Add=function(){
				 $scope.specializationId_add="";
	        	 $scope.specializationName_add="";
	        	 $scope.formAdd.specializationId_add.$setUntouched();
	        	 $scope.formAdd.specializationName_add.$setUntouched();
	        	
			}
		});