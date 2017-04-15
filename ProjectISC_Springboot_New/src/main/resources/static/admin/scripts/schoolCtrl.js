app.controller('schoolCtrl', function($scope, $http, $filter) {
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
	    });
	    }
	    getAllSchools();
	    $scope.sortType = 'schoolName';
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
    	$scope.updatePageIndexes = function () {
    		var totalPages = Math.ceil($scope.list.length / $scope.maxPaginationSize);
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
    	
    	$scope.showList=function(school,index){
    		return ((index >= $scope.firstIndex) && (index < $scope.lastIndex));
    	}
    	
    	
	    // add school
        $scope.save = function () {
           
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
			
//        	  $("#myModal").modal("hide");
        	  getAllSchools();
        	  addAlert();
        	  $scope.ResetForm_Add();
          } 
    
            }, function(response) {
    			alertFailMessage("Oops! Duplicate ID is not allowed.");
    	    });
	    }
        
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
        }
        // edit school
        $scope.update = function () {
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
					alertFailMessage("Oops! Duplicate ID is not allowed.");
					setTimeout(function() {
						location.reload();
					}, alertDuration);
             });
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
          });
        };
        // delete school
         $scope.delete=function()
        {
            $http({
               method: "DELETE",
              url: "/api/school/" + $scope.school_delete.id,
              dataType: "json",
            })
               .then(function (result) {
                  if (result.status == 202) {
                      
                       // location.reload();
                       
                	  $("#myModal_xoa").modal("hide");
                	  getAllSchools();
                	  deleteAlert();
                  } 
             });
        }
        // get data for delete
        $scope.school_delete = [];
        $scope.deleteSchool = function (data) {
            $scope.school_delete = data;
        }; 
        
     // Sort and filter
		$scope.sortType = 'schoolName';
		$scope.sortReverse = false;
		$scope.searchName = '';        
        
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