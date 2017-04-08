app.controller('schoolCtrl', function($scope, $http) {
	    function getAllSchools(){ $http.get("/api/school")
	    .then(function(response) {	
	       $scope.list = response.data;
	    });
	    }
	    getAllSchools();
	    //add school
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
               
               dataType: "json"
            })
       .then(function (result) {	
          if (result.status == 201) {
			
        	  $("#myModal").modal("hide");
        	  getAllSchools();
              
          } 
    
            });
	    };  
        //edit school
        $scope.update = function () {
        	
            $http({
               method: "put",
              url: "/api/school",
               data: JSON.stringify($scope.school_edit),
               contentType: "application/json; charset=utf-8",
               dataType: "json"
            })
               .then(function (result) {
                  if (result.status == 202) {
                	  $("#myModal_sua").modal("hide");
                	  getAllSchools();
                  } 
             });
       }
        
        $scope.school_edit = [];
        $scope.editSchool = function (data) {
            $scope.school_edit = {"id" : data.id, 	"schoolId" :data.schoolId, "schoolName" : data.schoolName, "address" : data.address, "contact" : data.contact, "active" : data.active};
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
                      
                       //location.reload();
                       
                	  $("#myModal_xoa").modal("hide");
                	  getAllSchools();
                  } 
             });
        }
        // get data for delete
        $scope.school_delete = [];
        $scope.deleteSchool = function (data) {
            $scope.school_delete = data;
        }; 

	});