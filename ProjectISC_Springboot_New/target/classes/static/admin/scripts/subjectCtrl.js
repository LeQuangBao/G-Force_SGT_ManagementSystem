app.controller('subjectCtrl', function($scope, $http,$filter, uiGridConstants) {
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
	    function getAllsubjects(){
			$scope.list=[];
	    	$http.get("/api/subject")
	    .then(function(response) {	
	       $scope.list = response.data;
	   	$scope.gridOptions.data = response.data;
	    });
	    }
	    getAllsubjects();
	    // tạo dữ liệu cho table
		$scope.gridOptions = {
				noUnselect : true,
				multiSelect : false,
				enableRowSelection : true,
				enableRowHeaderSelection : false,
				enableSelectAll : false,
				enableGridMenu : true,
				enableFiltering : true,
				enableColumnResize : true,
				enableColumnMenus : false,
				paginationPageSizes : [ 15, 30, 50, 100 ],
				paginationPageSize : 15,
				columnDefs : [
						{
							name : 'subjectId',
							displayName : 'Subject Id'
						},
						{
							name : 'subjectName',
							displayName : 'Subject Name'
// <<<<<<< HEAD
// =======
						// },
						// {
							// name : 'credit',
							// displayName : 'Credit'
						// },
						// {
							// name : 'hour',
							// displayName : 'Hour'
						// },
						// {
							// name : 'description',
							// displayName : 'Description'
// >>>>>>> origin/master2
						},
						{
							name : 'credit',
							displayName : 'Credit'
						},
						{
							name : 'hour',
							displayName : 'Hour'
						},
						{
							name : 'description',
							displayName : 'Description'
						},
						{
							name : 'active', displayName:'Status', 
							visible : true, 
							cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.active == 0 ? "Inactive" : "Active"}}</div>',
							filter: {
			    		          type: uiGridConstants.filter.SELECT,
			    		          selectOptions: [
			    		              { value: 'true', label: 'Active' },
			    		              { value: 'false', label: 'Inactive' }
			    		          ]
			    		      }
						},
						{
							name : 'Action',
							enableSorting : false,
							enableFiltering : false,
							cellTemplate : '<button type="button" ng-click="grid.appScope.viewRelevantSpecialization(x)"class="btn btn-success btn-sm" data-toggle="modal"data-tooltip ="tooltip" title="View specializations"data-target="#myModal_viewRelevantSpecialization" ><span class="glyphicon glyphicon-th-list"></span></button>'
                                 +'<button type="button" ng-click="grid.appScope.editsubject(x)"class="btn btn-primary btn-sm" data-toggle="modal" data-tooltip ="tooltip" title="Edit"data-target="#myModal_sua"><span class="glyphicon glyphicon-edit"  ></span></button>'
                                 +'<button type="button" ng-click="grid.appScope.deletesubject(x)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete"data-target="#myModal_xoa"><span class="glyphicon glyphicon-remove"   ></span></button>'
						} ]
			};
			// lọc toàn bộ dữ liệu
			$scope.refreshData = function(termObj) {
				$scope.gridOptions.data = $scope.list;

				while (termObj) {
					var oSearchArray = termObj.split(' ');
					$scope.gridOptions.data = $filter('filter')(
							$scope.gridOptions.data, oSearchArray[0],
							undefined);
					oSearchArray.shift();
					termObj = (oSearchArray.length !== 0) ? oSearchArray
							.join(' ')
							: '';
				}
			};
	    $scope.sortType = 'subjectName';
    	$scope.filterTable = '';
	 // Tìm kiếm theo tên
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
	            case 'subjectName':
	                formatted = 'subject name';
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
	    
    	
	    // add subject
        $scope.save = function (close) {
        	if(id_duplicate_Add(document.getElementById("subjectID").value)){
            var subject_id = document.getElementById("subjectID").value;        
            var subject_name = $scope.subjectName;
            var credit=document.getElementById("credit").value;
            var hour = document.getElementById("hour").value;
            var description = document.getElementById("description").value;
            var active=$scope.active;
            
            $http({
               method: "POST",
               url: "/api/subject",
               data: {
            	   	subjectId: subject_id,
            	    subjectName: subject_name,
            	    credit : credit,
                  	hour:hour,
                  	description:description,
                  	active:active
                  	
               },
               
               dataType: "json"
            })
       .then(function (result) {	
          if (result.status == 201) {
        	  if(close==true){
        		  $("#myModal").modal("hide");
        	  }
        	  getAllsubjects();
        	  addAlert();
        	  $scope.ResetForm_Add();
          } 
    
            }, function(response) {
            	if(response.status == 406) {            		
            		alertFailMessage("Oops! Something went wrong, please check your input again.");
            	}
			});
        	}
        }
        /*$scope.saveAndClose = function () {
            var subject_id = document.getElementById("subjectID").value;        
            var subject_name = $scope.subjectName;
            var credit=document.getElementById("credit").value;
            var hour = document.getElementById("hour").value;
            var description = document.getElementById("description").value;
            var active=$scope.active;
            
            $http({
               method: "POST",
               url: "/api/subject",
               data: {
            	   	subjectId: subject_id,
            	    subjectName: subject_name,
            	    credit : credit,
                  	hour:hour,
                  	description:description,
                  	active:active
                  	
               },
               
               dataType: "json"
            })
       .then(function (result) {	
          if (result.status == 201) {
        	  $("#myModal").hide();
        	  getAllsubjects();
        	  addAlert();
        	  $scope.ResetForm_Add();
          } 
    
            }, function(response) {
            	if(response.status == 406) {            		
            		alertFailMessage("Oops! Something went wrong, please check your input again.");
            	}
			});
            
        }*/
	    $scope.ResetForm_Add=function(){
	    	 $scope.subjectId="";
        	 $scope.subjectName="";
        	 $scope.credit="";
        	 $scope.hour="";
        	 $scope.description="";
        	 $scope.active=true;
        	 $scope.frmsubjectAdd.subjectID.$setUntouched();
        	 $scope.frmsubjectAdd.subjectName.$setUntouched();
        	 $scope.frmsubjectAdd.credit.$setUntouched();
        	 $scope.frmsubjectAdd.hour.$setUntouched();
        	 $scope.frmsubjectAdd.description.$setUntouched();
        	 $scope.duplicateAlert="";
	    }
        // edit subject
        $scope.update = function () {
        	if(id_duplicate_Edit($scope.subject_edit.subjectId)){
        	var subjectObj={id:$scope.subject_edit.id,subjectId:$scope.subject_edit.subjectId, subjectName: $scope.subject_edit.subjectName, credit:$scope.subject_edit.credit, hour:$scope.subject_edit.hour,description:$scope.subject_edit.description ,active:$scope.subject_edit.active};
            $http({
               method: "put",
              url: "/api/subject",
               data: subjectObj,
               contentType: "application/json; charset=utf-8",
               dataType: "json"
            })
               .then(function (result) {
                  if (result.status == 202) {
                	  $("#myModal_sua").modal("hide");
                	  getAllsubjects();
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
        
        $scope.subject_edit = [];
        $scope.editsubject = function (data) {
        	$http.get("/api/subject/"+data.id)
            .then(function (response) {
            	$scope.subject_edit.id=data.id;	
            	$scope.subject_edit.subjectId=response.data.subjectId;
       			$scope.subject_edit.subjectName=response.data.subjectName;
       			$scope.subject_edit.credit=response.data.credit; 
       			$scope.subject_edit.hour=response.data.hour;
       			$scope.subject_edit.description=response.data.description;
       			$scope.subject_edit.active=response.data.active;
          });
        	SubID=data.subjectId;
        	$scope.duplicateAlert="";
        };
        // delete subject
         $scope.delete=function()
        {
            $http({
               method: "DELETE",
              url: "/api/subject/" +  $scope.subject_delete.id,
              dataType: "json",
            })
               .then(function (result) {
                  if (result.status == 202) {
                      
                       // location.reload();
                       
                	  $("#myModal_xoa").modal("hide");
                	  getAllsubjects();
                	  deleteAlert();
                  } 
             });
        }
         
         // view relevant specialization
         $scope.filterSpecialization = '';
         function getListSpecializations(subjectId) {
             $scope.listSpecialization = [];
             $http.get("http://localhost:8080/api/specialization")
                 .then(function(response) {
                     response.data.forEach(function(item, index){
                    	var flag = false;
                    	item.subjects.forEach(function(item2, index){
                    		if(item2.id === subjectId){
                    			flag = true;
                    		}
                    	});
                    	if (flag === true){
                    		$scope.listSpecialization.push(item);
                    	}
                     });
                 });
         }
         
         $scope.viewRelevantSpecialization = function(data){
        	 getListSpecializations(data.id);
        	 $scope.info_viewRelevantSpecialization = data;
         }
         
        // get data for delete
        $scope.subject_delete = [];
        $scope.deletesubject = function (data) {
            $scope.subject_delete = data;
        }; 
        
      //Kiểm tra trùng ID
    	function id_duplicate_Add(id) {
    		var flag=true;
              $scope.list.forEach(function(item, index) {
                  if (item.subjectId === id) {
                      $scope.duplicateAlert="Duplicate ID";
                      flag= false;
                  }
              });
              return flag;
         }
    	var SubID="";
    	function id_duplicate_Edit(id) {
    		var flag=true;
              $scope.list.forEach(function(item, index) {
            	  if (id != SubID) {
    	              if (item.subjectId === id) {
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


