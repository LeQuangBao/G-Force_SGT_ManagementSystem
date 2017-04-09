app.controller('specializationCtrl',
		function($scope, $http) {
			// get list specializations
			function getListSpecializations() {
				$http.get("http://localhost:8080/api/specialization").then(
						function(response) {
							$scope.list = response.data;
						})
			}
			getListSpecializations();

			$scope.addSpecialization = function() {
				var specializationId = document
						.getElementById("specializationId_add").value;
				var specializationName = document
						.getElementById("specializationName_add").value;
				var activeElement = document.getElementById("active_add");
				var active = "";
				if (activeElement.checked == true) {
					active = 1;
				}
				else
	            	active=0;
				$http({
					method : "POST",
					url : "/api/specialization",
					data : {
						specializationId : specializationId,
						specializationName : specializationName,
						active : active
					},
					dataType : "json",
				}).then(function(response) {
					
					if (response.status == "201") {
						$("#myModal_them").modal("hide");
						getListSpecializations();
						addAlert();
					}
				})
			}

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
					editAlert();
				}, function(response) {
					
				});
			}
			// delete school
	         $scope.deleteS=function()
	        {
	            $http({
	               method: "DELETE",
	              url: "/api/specialization/" + $scope.specialization_delete.id,
	              dataType: "json",
	            })
	               .then(function (result) {
	                  if (result.status == 202) {
	                      
	                       //location.reload();
	                       
	                	  $("#myModal_xoa").modal("hide");
	                	  getListSpecializations();
	                	  deleteAlert();
	                  } 
	             });
	        }
	        // get data for delete
	        $scope.specialization_delete = [];
	        $scope.deleteSpecialization = function (data) {
	            $scope.specialization_delete = data;
	        }; 
	        
	        function deleteAlert(){
	    	  	swal({
	    	  	  title:"",
	    	  	  text: "Delete Successfully",
	    	  	  type: "success",
	    	  	  timer: 2000,
	    	  	  showConfirmButton: false
	    	  	});
	    	  }
	    	  function editAlert(){
	    		  swal({
	    		  	  title:"",
	    		  	  text: "Edit Successfully",
	    		  	  type: "success",
	    		  	  timer: 2000,
	    		  	  showConfirmButton: false
	    		  	});
	      	  }
	    	  function addAlert(){
	    		  swal({
	    		  	  title:"",
	    		  	  text: "Add Successfully",
	    		  	  type: "success",
	    		  	  timer: 2000,
	    		  	  showConfirmButton: false
	    		  	});
	    	  }
		});