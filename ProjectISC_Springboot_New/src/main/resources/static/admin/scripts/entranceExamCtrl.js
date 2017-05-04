app.controller('entranceExamCtrl', function($scope, $http, $filter, $resource) {
	$scope.rowdata = {
		availableOptions : [ {
			id : '15',
			name : '15'
		}, {
			id : '30',
			name : '30'
		}, {
			id : '50',
			name : '50'
		}, {
			id : '100',
			name : '100'
		} ],
		selectedOption : {
			id : '15',
			name : '15 rows'
		}
	};
	$scope.ChangeRow = function(index) {
		$scope.itemsPerPage = index;
		$scope.updatePageIndexes();
	}
	var alertDuration = 1800;
	function getAllEntranceExam() {
		$scope.list = [];
		$http.get("/admin/api/entrance-exam").then(function(response) {
			$scope.list = response.data;
		});
		
	}
	function getAllIntake(){
		$scope.listIntake = [];
		$http.get("/api/intake").then(function(response) {
			$scope.listIntake = response.data;
		});
	}
	getAllEntranceExam();
	getAllIntake();
	// Sort and filter
	$scope.sortType = 'entranceExamName';
	$scope.filterTable = '';

	// Tìm kiếm theo tên
	$scope.listfiltered = function(element) {
		return $filter('filter')(element, $scope.filterTable);
	};

	// Phân trang
	$scope.currentPage = 1;
	// max size of the pagination bar
	$scope.maxPaginationSize = 10;
	$scope.itemsPerPage = 15;
	$scope.updatePageIndexes = function() {
		var totalPages = Math.ceil($scope.list.length
				/ $scope.maxPaginationSize);
		if (totalPages <= 10) {
			// less than 10 total pages so show all
			$scope.firstIndex = 1;
			$scope.lastIndex = totalPages;
		} else {
			// more than 10 total pages so calculate start and end pages
			if ($scope.currentPage <= 6) {
				$scope.firstIndex = 1;
				$scope.lastIndex = 10;
			} else if ($scope.currentPage + 4 >= totalPages) {
				$scope.firstIndex = totalPages - 9;
				$scope.lastIndex = totalPages;
			} else {
				$scope.firstIndex = $scope.currentPage - 5;
				$scope.lastIndex = $scope.currentPage + 4;
			}
		}
		$scope.firstIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
		$scope.lastIndex = $scope.currentPage * $scope.itemsPerPage;
	};
	$scope.updatePageIndexes();

	$scope.showList = function(school, index) {
		return ((index >= $scope.firstIndex) && (index < $scope.lastIndex));
	}

	$scope.getData = function getData(object) {
		if (object == 0) {
			$scope.exam = {
				"entranceExamName" : "",
				"intake" : "",
				"startDate" : "",
				"description" : ""

			}
			$scope.duplicateAlert="";
		} else {
			$scope.exam = {
				"id" : object.id,
				"entranceExamName" : object.entranceExamName,
				"startDate" : new Date(object.startDate),
				"description" : object.description
			}
			entranceExamName=object.entranceExamName;
			for (i = 0; i < $scope.listIntake.length; i++) {
				if ($scope.listIntake[i].intakeId == object.intake.intakeId) {
					$scope.exam.intake = $scope.listIntake[i];
					break;
				}
			}
		}
		delInvalid();

	}
	$scope.add = function add(close) {
		if(nameduplicate_Add($scope.exam.entranceExamName)){
			$http({
				method : "POST",
				url : "/admin/api/entrance-exam",
				data : $scope.exam
			}).then(function mySucces(response) {
				if (close) {
					$("#addModal").modal("hide");
				}
				getAllEntranceExam();
				addAlert();
				$scope.getData(0);
	
			});
		}
	}
	$scope.edit = function edit() {
		if(nameduplicate_Edit($scope.exam.entranceExamName)){
			$http({
				method : "PUT",
				url : "/admin/api/entrance-exam",
				data : $scope.exam
			}).then(function mySucces(response) {
				$('#editModal').modal('hide');
				editAlert();
				getAllEntranceExam();
				$scope.updatePageIndexes();
	
				$scope.showList = function(school, index) {
					return ((index >= $scope.firstIndex) && (index < $scope.lastIndex));
				}
			});
		}
	}
	
	$scope.del = function del() {
		var Student = $resource('http://localhost:8080/admin/api/Student');
		var numberOfStudent=0;
		Student.query().$promise.then(function(listStudent) {

					listStudent.forEach(function(item, index) {
								if (item.entranceExam.id === $scope.exam.id) {
									numberOfStudent = numberOfStudent + 1;
								}
							});
					
					if(numberOfStudent!=0)
						{
						alertWithConfirm("Cannot delete intake that still has student");
						$('#deleteModal').modal('hide');
						getAllEntranceExam();
						}
					
		})
//				})
		$http({
			method : "DELETE",
			url : "/admin/api/entrance-exam/" + $scope.exam.id

		}).then(function mySucces(response) {
			$('#deleteModal').modal('hide');
			getAllEntranceExam();
			deleteAlert();
		});
	}

	function delInvalid() {
		$scope.addForm.$setUntouched();
	}

	$scope.getStudents = function getStudent(id) {
		$http({
			method : "GET",
			url : "/admin/api/entrance-exam/get-students/" + id

		}).then(function mySucces(response) {
			$scope.listStudent = response.data;

		});

	}
	//Kiểm tra trùng extranceExam name
	function nameduplicate_Add(name) {
		var flag=true;
          $scope.list.forEach(function(item, index) {
              if (item.entranceExamName === name) {
                  $scope.duplicateAlert="Duplicate name";
                  flag= false;
              }
          });
          return flag;
     }
	var entranceExamName="";
	function nameduplicate_Edit(name) {
		var flag=true;
          $scope.list.forEach(function(item, index) {
        	  if (name != entranceExamName) {
	              if (item.entranceExamName === name) {
	                  $scope.duplicateAlert="Duplicate name";
	                  flag= false;
	              }
        	  }
          });
          return flag;
     }
  
	  $scope.hideDuplicateAlert=function(){
	  	$scope.duplicateAlert="";
	  }
	
	function deleteAlert() {
		swal({
			title : "",
			text : "Delete successfully.",
			type : "success",
			timer : 2000,
			showConfirmButton : false
		});
	}
	function editAlert() {
		swal({
			title : "",
			text : "Edit successfully.",
			type : "success",
			timer : 2000,
			showConfirmButton : false
		});
	}
	function addAlert() {
		swal({
			title : "",
			text : "Add successfully.",
			type : "success",
			timer : 2000,
			showConfirmButton : false
		});
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
	
	function alertWithCongirm(message) {
		swal({
			title : "",
			text : message,
			type : "error",
			showConfirmButton : true
		})
	}
	
});