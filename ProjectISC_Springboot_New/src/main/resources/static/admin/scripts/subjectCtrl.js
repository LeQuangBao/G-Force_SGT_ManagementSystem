app.controller('subjectCtrl', function($scope, $http,$filter) {
		$scope.rowdata = {
			     availableOptions: [
			       {id: '15', name: '15 rows'},
			       {id: '30', name: '30 rows'},
			       {id: '50', name: '50 rows'},
			       {id: '100', name: '100 rows'}
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
	    });
	    }
	    getAllsubjects();
	    $scope.sortType = 'subjectName';
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
    	
    	$scope.showList=function(subject,index){
    		return ((index >= $scope.firstIndex) && (index < $scope.lastIndex));
    	}
    	
	    // add subject
        $scope.save = function () {
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
			
//        	  $("#myModal").modal("hide");
        	  getAllsubjects();
        	  addAlert();
        	  $scope.ResetForm_Add();
          } 
    
            }, function(response) {
            	if(response.status == 406) {            		
            		alertFailMessage("Oops! Duplicate ID is not allowed.");
            	}
			});
            
        }
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
	    }
        // edit subject
        $scope.update = function () {
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
					alertFailMessage("Oops! Duplicate ID is not allowed.");
					setTimeout(function() {
						location.reload();
					}, alertDuration);
             });
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
        // get data for delete
        $scope.subject_delete = [];
        $scope.deletesubject = function (data) {
            $scope.subject_delete = data;
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