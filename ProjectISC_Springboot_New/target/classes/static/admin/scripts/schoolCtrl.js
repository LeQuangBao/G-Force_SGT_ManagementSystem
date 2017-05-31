app.controller('schoolCtrl', function($scope, $http, $filter, uiGridConstants) {
		$scope.rowdata = {
			     availableOptions: [
			    	 {id: '15', name: '15'},
				       {id: '30', name: '30'},
				       {id: '50', name: '50'},
				       {id: '100', name: '100'}
			     ],
			     selectedOption: {id: '15', name: '15 rows'}
			    };
		$scope.ChangeRow=function(index){
			$scope.itemsPerPage = index;
			$scope.updatePageIndexes();
		}
		var alertDuration = 1800;
	    function getAllSchools(){
	    	$scope.list=[];
	    	$http.get("/api/school")
	    .then(function(response) {	
	       $scope.list = response.data;
	       $scope.gridOptions.data = response.data;
	       
	    });
	    }
	    getAllSchools();
	    
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
	    		      { name: 'schoolId',displayName:'School Id' },
	    		      { name: 'schoolName', displayName : 'School Name' },
	    		      { name: 'address', displayName : 'Address '},
	    		      { name: 'contact', visible : true },
	    		      { name: 'active', displayName:'Status', visible : true, cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.active == 0 ? "Inactive" : "Active"}}</div>',
	    		    	  filter: {
		    		          type: uiGridConstants.filter.SELECT,
		    		          selectOptions: [
		    		              { value: 'true', label: 'Active' },
		    		              { value: 'false', label: 'Inactive' }
		    		          ]
	    		      } },
	    		      { name: 'Action',enableSorting: false,enableFiltering: false,
	    		             cellTemplate:'<button class="btn btn-primary btn-sm" ng-click="grid.appScope.editSchool(row.entity)" data-tooltip ="tooltip" title="Edit"	data-toggle="modal" data-target="#myModal_sua"><span class="glyphicon glyphicon-edit"></span></button>'
	    		            	 			+'<button ng-click="grid.appScope.deleteSchool(row.entity)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete" data-target="#myModal_xoa"><span class="glyphicon glyphicon-remove"></span></button>'
	    		      }
	    		    ]
	    	  };
	 // lọc toàn bộ dữ liệu
	 $scope.refreshData = function (termObj) {
	        $scope.gridOptions.data = $scope.list;

	        while (termObj) {
	            var oSearchArray = termObj.split(' ');
	            $scope.gridOptions.data = $filter('filter')($scope.gridOptions.data, oSearchArray[0], undefined);
	            oSearchArray.shift();
	            termObj = (oSearchArray.length !== 0) ? oSearchArray.join(' ') : '';
	        }
	    };
	    $scope.sortType = 'schoolName';
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
	                formatted = 'school name';
	                break;
//	            case 'lastName':
//	                formatted = 'last name';
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
	    
	    // add school
        $scope.save = function (close) {
        	if(id_duplicate_Add(document.getElementById("schoolID").value)){
            var school_id = document.getElementById("schoolID").value;        
            var school_name = document.getElementById("schoolName").value;
            var address=document.getElementById("address").value;
            var contact = document.getElementById("contact").value;
            var active1=document.getElementById("actived");
            var active=$scope.active;
          
            $http({
                method: "POST",
               url: "/api/school",
               data: {
            	   schoolId: school_id,
            	   schoolName: school_name,
            	   address : address,
                  	contact:contact,
                  	active:active
                  	
               },
               
               dataType: "json"
            })
       .then(function (result) {	
          if (result.status == 201) {
			
        	  getAllSchools();
        	  addAlert();
        	  $scope.ResetForm_Add();
        	  if(close==true){
        		  $("#myModal").modal("hide");
        	  }
          } 
    
            }, function(response) {
    			alertFailMessage("Oops! Something went wrong, please check your input again.");
    	    });
        	}
	    }
        
        /*$scope.saveAndClose = function () {
            
            var school_id = document.getElementById("schoolID").value;        
            var school_name = document.getElementById("schoolName").value;
            var address=document.getElementById("address").value;
            var contact = document.getElementById("contact").value;
            var active1=document.getElementById("actived");
            var active=$scope.active;
          
            $http({
                method: "POST",
               url: "/api/school",
               data: {
            	   schoolId: school_id,
            	   schoolName: school_name,
            	   address : address,
                  	contact:contact,
                  	active:active
                  	
               },
               
               dataType: "json"
            })
       .then(function (result) {	
          if (result.status == 201) {
			
        	  $("#myModal").modal("hide");
        	  getAllSchools();
        	  addAlert();
        	  $scope.ResetForm_Add();
          } 
    
            }, function(response) {
    			alertFailMessage("Oops! Something went wrong, please check your input again.");
    	    });
	    }*/
        
        //reset form add
        $scope.ResetForm_Add=function(){
        	 $scope.schoolId="";
       	  $scope.schoolName="";
       	  $scope.contact="";
       	  $scope.address="";
       	  $scope.active=true;
       	  $scope.frmSchoolAdd.schoolID.$setUntouched();
     		$scope.frmSchoolAdd.schoolName.$setUntouched();
     		$scope.frmSchoolAdd.address.$setUntouched();
     		$scope.frmSchoolAdd.contact.$setUntouched();
     		$scope.duplicateAlert="";
        }
        // edit school
        $scope.update = function () {
        	if(id_duplicate_Edit($scope.school_edit.schoolId)){
        	var schoolObj={id:$scope.school_edit.id,schoolId:$scope.school_edit.schoolId, schoolName: $scope.school_edit.schoolName, address:$scope.school_edit.address, contact:$scope.school_edit.contact, active:($scope.school_edit.active==null?false:($scope.school_edit.active==false?false:true))};
            $http({
               method: "put",
              url: "/api/school",
               data: schoolObj,
               contentType: "application/json; charset=utf-8",
               dataType: "json"
            })
               .then(function (result) {
                  if (result.status == 202) {
                	  $("#myModal_sua").modal("hide");
                	  getAllSchools();
                	  editAlert();
                  } 
             }, function(response) {
					alertFailMessage("Oops! Something went wrong, please check your input again.");
//					setTimeout(function() {
//						location.reload();
//					}, alertDuration);
             });
        	}
       }
        
        $scope.school_edit = [];
        $scope.editSchool = function (data) {
        	$http.get("/api/school/"+data.id)
            .then(function (response) {
            	$scope.school_edit.schoolId=response.data.schoolId;
       			$scope.school_edit.schoolName=response.data.schoolName;
       			$scope.school_edit.address=response.data.address; 
       			$scope.school_edit.contact=response.data.contact;
       			$scope.school_edit.active=response.data.active;
	       		$scope.school_edit.id=data.id;	
	       		SchoolID=data.schoolId;
          });
        	$scope.duplicateAlert="";
        };
        // get data for delete
        $scope.schooldelete = [];
        $scope.school_delete = function (data) {
            $scope.schooldelete = data;
        }; 
        // delete school
         $scope.delete=function()
        {
            $http({
               method: "DELETE",
              url: "/api/school/" + $scope.schooldelete.id,
              dataType: "json",
            })
               .then(function (result) {
                  if (result.status == 202) {
                      
                       // location.reload();
                       
                	  $("#myModal_xoa").modal("hide");
                	  getAllSchools();
                	  deleteAlert();
                  }
                  }, function(response) {
						alertFail();
             });
        
        }
       
        
     // Sort and filter
		$scope.sortType = 'schoolName';
		$scope.sortReverse = false;
		$scope.searchName = '';        
        
		//Kiểm tra trùng ID
		function id_duplicate_Add(id) {
			var flag=true;
	          $scope.list.forEach(function(item, index) {
	              if (item.schoolId === id) {
	                  $scope.duplicateAlert="Duplicate ID";
	                  flag= false;
	              }
	          });
	          return flag;
	     }
		var SchoolID="";
		function id_duplicate_Edit(id) {
			var flag=true;
	          $scope.list.forEach(function(item, index) {
	        	  if (id != SchoolID) {
		              if (item.schoolId === id) {
		                  $scope.duplicateAlert="Duplicate ID";
		                  flag= false;
		              }
	        	  }
	          });
	          return flag;
	     }
		 $scope.hideDuplicateAlert=function(){
			  	$scope.duplicateAlert="";
			  }
        function deleteAlert(){
    	  	swal({
    	  	  title:"",
    	  	  text: "Delete successfully.",
    	  	  type: "success",
    	  	  timer: 2000,
    	  	  showConfirmButton: false
    	  	});
    	  }
    	  function editAlert(){
    		  swal({
    		  	  title:"",
    		  	  text: "Edit successfully.",
    		  	  type: "success",
    		  	  timer: 2000,
    		  	  showConfirmButton: false
    		  	});
      	  }
    	  function addAlert(){
    		  swal({
    		  	  title:"",
    		  	  text: "Add successfully.",
    		  	  type: "success",
    		  	  timer: 2000,
    		  	  showConfirmButton: false
    		  	});
    	  }
    	  function alertFail() {
				swal({
					title : "",
					text : "Opps! Your request cannot be processed.",
					type : "error",
					timer : alertDuration,
					showConfirmButton : false
				})
			}
    	  function alertFailMessage(message) {
				swal({
					title : "",
					text : message,
					type : "error",
					timer : alertDuration,
					showConfirmButton : false
				});
			}
    	  
       
	});
//Chu thich cua nut phan action
$(document).ready(function() {
    $('body').tooltip({
        selector: "[data-tooltip=tooltip]",
        container: "body"
    });
});
