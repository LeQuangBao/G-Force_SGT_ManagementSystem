app.controller('entranceExamCtrl', function($scope, $http, $filter) {
	var failMessage = 'Oops! Something went wrong, please check your input again';
	var failMessage_violate_student_foreignKey = "Cannot delete intake that still has student";
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
			name : '15'
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
		$scope.listIntake = [];
		$http.get("/api/intake").then(function(response) {
			$scope.listIntake = response.data;
		});
	}
	getAllEntranceExam();
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

		} else {
			$scope.exam = {
				"id" : object.id,
				"entranceExamName" : object.entranceExamName,
				"startDate" : new Date(object.startDate),
				"description" : object.description
			}
			for (i = 0; i < $scope.listIntake.length; i++) {
				if ($scope.listIntake[i].intakeId == object.intake.intakeId) {
					$scope.exam.intake = $scope.listIntake[i];
					break;
				}
			}
		}
		delInvalid();

	}
	$scope.add = function add() {

		$http({
			method : "POST",
			url : "/admin/api/entrance-exam",
			data : $scope.exam
		}).then(function mySucces(response) {
			getAllEntranceExam();
			addAlert();
			$scope.getData(0);

		},function(response) {
            if (response.status == 406) {
                alertFailMessage(failMessage);
            }
        });
	}
	
	$scope.addAndClose = function() {

		$http({
			method : "POST",
			url : "/admin/api/entrance-exam",
			data : $scope.exam
		}).then(function mySucces(response) {
			$("#addModel").close();
			getAllEntranceExam();
			addAlert();
			$scope.getData(0);

		},function(response) {
            if (response.status == 406) {
                alertFailMessage(failMessage);
            }
        });
	}
	
	$scope.edit = function edit() {

		$http({
			method : "PUT",
			url : "/admin/api/entrance-exam",
			data : $scope.exam
		}).then(function mySucces(response) {
			$('#editModal').modal('hide');
			getAllEntranceExam();
			editAlert();
		},function(response) {
            if (response.status == 406) {
                alertFailMessage(failMessage);
            }
        });
	}
	$scope.del = function del() {

		$http({
			method : "DELETE",
			url : "/admin/api/entrance-exam/" + $scope.exam.id

		}).then(function mySucces(response) {
			$('#deleteModal').modal('hide');
			getAllEntranceExam();
			deleteAlert();
		},function(response) {
            if (response.status == 404) {
                alertFailWithConfirm(failMessage_violate_student_foreignKey);
            }
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

	function deleteAlert() {
		swal({
			title : "",
			text : "Delete Successfully",
			type : "success",
			timer : 2000,
			showConfirmButton : false
		});
	}
	function editAlert() {
		swal({
			title : "",
			text : "Edit Successfully",
			type : "success",
			timer : 2000,
			showConfirmButton : false
		});
	}
	function addAlert() {
		swal({
			title : "",
			text : "Add Successfully",
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
	function alertFailWithConfirm(message) {
		swal({
			title : "",
			text : message,
			type : "error",
			showConfirmButton : true
		})
	}
});