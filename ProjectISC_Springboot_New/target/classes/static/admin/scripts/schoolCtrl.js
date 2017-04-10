app.controller('schoolCtrl', function($scope, $http) {
	    function getAllSchools(){ $http.get("/api/school")
	    .then(function(response) {	
	       $scope.list = response.data;
	    });
	    }
	    getAllSchools();
	    // add school
        $scope.save = function () {
           
            var school_id = document.getElementById("schoolID").value;        
            var school_name = document.getElementById("schoolName").value;
            var address=document.getElementById("address").value;
            var contact = document.getElementById("contact").value;
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
               url: "/api/school",
               data: {
            	   schoolId: school_id,
            	   schoolName: school_name,
            	   address : address,
                  	contact:contact,
                  	active:active
                  	
               },
               
               contentType: "application/json; charset=utf-8",
               dataType: "json"
            })
       .then(function (result) {	
          if (result.status == 201) {
			
        	  $("#myModal").modal("hide");
        	  getAllSchools();
        	  addAlert();
          } 
    
            });
	    };  
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
       
	});