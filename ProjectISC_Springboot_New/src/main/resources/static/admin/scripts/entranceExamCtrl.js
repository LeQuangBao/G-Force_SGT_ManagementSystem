app.controller('entranceExamCtrl', function($scope, $http, $filter, $resource, uiGridConstants) {
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
			$scope.gridOptions.data = response.data;
			
			
		});
		
	}	
	
	//List json Intake object for dropdown 
	var list_intake=[];
	function getAllIntake(){
		$scope.listIntake=[];
		$http.get("/api/intake").then(function(response) {
			$scope.listIntake=response.data;
			$scope.listIntake.forEach(function(intake, index) {
				list_intake.push({'value':intake.intakeName,'label':intake.intakeName});
		    });
		});
	}
	getAllEntranceExam();
	getAllIntake();
	
	// tạo dữ liệu cho table
	$scope.gridOptions = {
    		noUnselect : true,
    		multiSelect: false,
    		enableRowSelection: true,
    		enableRowHeaderSelection: false,
    	    enableSelectAll: false,
    	    enableGridMenu: true,
    		enableFiltering: true,
    		enableColumnResize: true,
    		enableColumnMenus: false,
    	    paginationPageSizes: [15, 30, 50, 100],
    	    paginationPageSize: 15,
    	    columnDefs: [

    		      { name: 'entranceExamName', displayName : ' Name' },
    		      { name: 'startDate', visible : true, cellFilter: 'date:"MM/dd/yyyy"' },
    		      { name: 'description', visible : true },
    		      { name: 'intake.intakeName', displayName : 'Intake', visible : true, filter: {
    		          type: uiGridConstants.filter.SELECT,
    		          selectOptions: list_intake
    		      } },
    		      { name: 'Action',enableSorting: false,enableFiltering: false,
    		             cellTemplate:'<button ng-click="grid.appScope.getStudents(row.entity.id)" data-toggle="modal" class="btn btn-success btn-sm" data-tooltip ="tooltip" title="View detail informations" data-target="#studentModal"><span class="glyphicon glyphicon-eye-open"></span></button>' 
    		            	 			+'<button class="btn btn-primary btn-sm" ng-click="grid.appScope.getData(row.entity)" data-tooltip ="tooltip" title="Edit"	data-toggle="modal" data-target="#editModal"><span class="glyphicon glyphicon-edit"></span></button>'
    		            	 			+'<button ng-click="grid.appScope.getData(row.entity)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete" data-target="#deleteModal"><span class="glyphicon glyphicon-remove"></span></button>'
    		      }
    		    ]
    	  };
	  //Filter all data
    $scope.refreshData = function (termObj) {
        $scope.gridOptions.data = $scope.list;

        while (termObj) {
            var oSearchArray = termObj.split(' ');
            $scope.gridOptions.data = $filter('filter')($scope.gridOptions.data, oSearchArray[0], undefined);
            oSearchArray.shift();
            termObj = (oSearchArray.length !== 0) ? oSearchArray.join(' ') : '';
        }
    };
    
    $scope.sortType = 'firstName';
    $scope.filterTable = '';
    // filter list
    $scope.listfiltered = function(element) {
        return $filter('filter')(element, $scope.filterTable);
    };

    function matchFirstChar(c, string) {
        return (string.charAt(0) == c);
    }

    function removeFirstChar(string) {
        return string.slice(1);
    }

    function removeDash(label) {
        if (matchFirstChar('-', label)) {
            return removeFirstChar(label);
        }
        return label;
    }

    function addDash(label) {
        if (!matchFirstChar('-', label)) {
            return '-' + label;
        }
        return label;
    }

    // formatting functions
    // for displaying table headers and tooltips
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function makeReadableLabel(label) {
        var formatted = label;
        switch (label) {
            case 'firstName':
                formatted = 'first name';
                break;
            case 'lastName':
                formatted = 'last name';
        }
        return formatted;
    }

    // sort functions
    // add or remove '-' to sort up or down
    $scope.sortReverse = function(set) {
        set = set || false;
        if (set || !matchFirstChar('-', $scope.sortType)) {
            $scope.sortType = addDash($scope.sortType);
        } else {
            $scope.sortType = removeDash($scope.sortType);
        }
    };

    // sort a column with a single data attribute
    $scope.singleSort = function(label) {
        if ($scope.sortType == label) {
            $scope.sortReverse();
        } else {
            $scope.sortType = label;
        }
    };
    $scope.sortDescend = function(label1, label2) {
        label2 = label2 || '';
        return ($scope.sortType == label1 || $scope.sortType == label2);
    };

    $scope.sortAscend = function(label1, label2) {
        label2 = label2 || '';
        return ($scope.sortType == ('-' + label1) || $scope.sortType == ('-' + label2));
    };

    // show a tooltip displaying how a column is sorted
    $scope.sortTooltip = function(label1) {

        var order = 'descending';
        if (matchFirstChar('-', $scope.sortType)) {
            order = 'ascending';
        }

        var baseSortType = removeDash($scope.sortType);
        if (label1 == baseSortType) {
            return capitalizeFirstLetter((makeReadableLabel(baseSortType)) + ' ' + order);
        }
        return 'Sort by ' + makeReadableLabel(label1)
    };
    
	// Sort and filter
	$scope.sortType = 'entranceExamName';
	$scope.filterTable = '';
	  // Phân trang
    $scope.currentPage = 1;
    // max size of the pagination bar
    $scope.maxPaginationSize = 10;
    // calculate total pages

    $scope.itemsPerPage = $scope.rowdata.selectedOption.id;
    $scope.updatePageIndexes = function() {
        var totalPages = Math.ceil($scope.list.length / $scope.maxPaginationSize);
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            $scope.firstIndex = 1;
            $scope.lastIndex = totalPages;
        } else {
            // more than 10 total pages so calculate start and
            // end pages
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

    $scope.showList = function(index) {
        return ((index >= $scope.firstIndex) && (index < $scope.lastIndex));
    }
//	// Tìm kiếm theo tên
//	$scope.listfiltered = function(element) {
//		return $filter('filter')(element, $scope.filterTable);
//	};
//
//	// Phân trang
//	$scope.currentPage = 1;
//	// max size of the pagination bar
//	$scope.maxPaginationSize = 10;
//	$scope.itemsPerPage = 15;
//	$scope.updatePageIndexes = function() {
//		var totalPages = Math.ceil($scope.list.length
//				/ $scope.maxPaginationSize);
//		if (totalPages <= 10) {
//			// less than 10 total pages so show all
//			$scope.firstIndex = 1;
//			$scope.lastIndex = totalPages;
//		} else {
//			// more than 10 total pages so calculate start and end pages
//			if ($scope.currentPage <= 6) {
//				$scope.firstIndex = 1;
//				$scope.lastIndex = 10;
//			} else if ($scope.currentPage + 4 >= totalPages) {
//				$scope.firstIndex = totalPages - 9;
//				$scope.lastIndex = totalPages;
//			} else {
//				$scope.firstIndex = $scope.currentPage - 5;
//				$scope.lastIndex = $scope.currentPage + 4;
//			}
//		}
//		$scope.firstIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
//		$scope.lastIndex = $scope.currentPage * $scope.itemsPerPage;
//	};
//	$scope.updatePageIndexes();
//
//	$scope.showList = function(school, index) {
//		return ((index >= $scope.firstIndex) && (index < $scope.lastIndex));
//	}

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
//Chu thich cua nut phan action
$(document).ready(function() {
    $('body').tooltip({
        selector: "[data-tooltip=tooltip]",
        container: "body"
    });
});