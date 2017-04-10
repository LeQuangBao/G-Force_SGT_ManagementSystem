app.controller('subjectCtrl', function($scope, $http) {
		var alertDuration = 1800;
	    function getAllsubjects(){ $http.get("/api/subject")
	    .then(function(response) {	
	       $scope.list = response.data;
	    });
	    }
	    getAllsubjects();
	    $scope.sortType = 'subjectName';
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
    	
	    // add subject
        $scope.save = function () {
           
            var subject_id = document.getElementById("subjectID").value;        
            var subject_name = document.getElementById("subjectName").value;
            var credit=document.getElementById("credit").value;
            var hour = document.getElementById("hour").value;
            var description = document.getElementById("description").value;
            var active1=document.getElementById("actived");
            var active="";
            if(active1.checked==true)
            	{
            		active=1;
            	}
            else
            	active=0;
          
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
			
        	  $("#myModal").modal("hide");
        	  getAllsubjects();
        	  addAlert();
          } 
    
            }, function(response) {
            	if(response.status == 406) {            		
            		alertFailMessage("Oops! Duplicate ID is not allowed.");
            	}
			});
	    };  
        // edit subject
        $scope.update = function () {
        	var subjectObj={id:$scope.subject_edit.id,subjectId:$scope.subject_edit.subjectId, subjectName: $scope.subject_edit.subjectName, credit:$scope.subject_edit.credit, hour:$scope.subject_edit.hour,description:$scope.subject_edit.description ,active:($scope.subject_edit.active==null?false:($scope.subject_edit.active==false?false:true))};
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