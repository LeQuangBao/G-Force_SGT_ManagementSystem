app.controller('instructorCtrl', function($scope, $http,$filter) {
		$scope.rowdata = {
			     availableOptions: [
			       {id: '15', name: '15'},
			       {id: '30', name: '30'},
			       {id: '50', name: '50'},
			       {id: '100', name: '100'}
			     ],
			     selectedOption: {id: '15', name: '15'}
			    };
		$scope.ChangeRow=function(index){
			$scope.itemsPerPage = index;
			$scope.updatePageIndexes();
		}
		
		var alertDuration = 1800;
	    function getAllinstructors(){
			$scope.list=[];
	    	$http.get("api/instructor")
	    .then(function(response) {
			$scope.list=response.data;
	    });
	    }
	    getAllinstructors();
	    $scope.sortType = 'lastName';
    	$scope.filterTable = '';
	 // Tìm kiếm theo tên
    	$scope.listfiltered = function(element) {
            return $filter('filter')(element, $scope.filterTable); 
        };
    	$scope.prev_img='';
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
    	
    	$scope.showList=function(index){
    		return ((index >= $scope.firstIndex) && (index < $scope.lastIndex));
    	}
    	$scope.getImage = function(element) {
    		photofile = element.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                $scope.$apply(function() {
                    $scope.prev_img = e.target.result;
                });
            };
            reader.readAsDataURL(photofile);
            $scope.image=photofile.name;
    	};
	    // add instructor
        $scope.save = function () {
            $http({
                method: "POST",
               url: "api/instructor",
               data: {
            	   	username: $scope.username,
            	    password: $scope.password,
            	    firstname : $scope.firstName,
                  	lastname: $scope.lastName,
                  	birthday: $scope.birthday,
                  	email: $scope.email,
                  	phone: $scope.phone,
                  	address: $scope.address,
                  	image: $scope.image,
                  	degree: $scope.degree,
                  	status: $scope.active                 	
               },
               
               dataType: "json"
            })
       .then(function (result) {	
          if (result.status == 201) {
        	  getAllinstructors();
        	  addAlert();
        	  $scope.ResetForm_Add();
          } 
    
            }, function(response) {
            	if(response.status == 406) {            		
            		alertFailMessage("Oops! Duplicate Username is not allowed.");
            	}
			});
            
        }
	    $scope.ResetForm_Add=function(){
	    	 $scope.username="";
        	 $scope.password="";
        	 $scope.firstName="";
        	 $scope.lastName="";
        	 $scope.re_password="";
        	 $scope.email="";
        	 $scope.phone="";
        	 $scope.address="";
        	 $scope.birthday="";
        	 $scope.active=true;
        	 $scope.frmInstructor.username.$setUntouched();
        	 $scope.frmInstructor.lastName.$setUntouched();
        	 $scope.frmInstructor.firstName.$setUntouched();
        	 /*$scope.frmInstructor.password.$setUntouched();
        	 $scope.frmInstructor.re_password.$setUntouched();
        	 $scope.frmInstructor.email.$setUntouched();
        	 $scope.frmInstructor.phone.$setUntouched();
        	 $scope.frmInstructor.address.$setUntouched();*/
	    }
	    $scope.instructor_edit = [];
	  //edit instructor
        $scope.update = function () {
        	var dataInstructor={id:instructorID,username:$scope.instructor_edit.username,lastname:$scope.instructor_edit.lastname,
        			firstname:$scope.instructor_edit.firstname,birthday:$scope.instructor_edit.birthday,email:$scope.instructor_edit.email,
        			phone:$scope.instructor_edit.phone,address:$scope.instructor_edit.address,image:$scope.instructor_edit.image,
        			degree:$scope.instructor_edit.degree,status:$scope.instructor_edit.status};
        	
            $http({
               method: "PUT",
               url: "api/instructor",
               data: dataInstructor,
               dataType: "json"
            })
               .then(function (result) {
                	  $("#myModal_sua").modal("hide");
                	  getAllinstructors();
                	  editAlert();
             }, function(response) {
					alertFailMessage("Oops! Duplicate Username is not allowed.");
					setTimeout(function() {
					});
             });
       }      
        $scope.view=[];
        $scope.viewInstructor=function(data){
        	$scope.view.username=data.username;
   			$scope.view.password=data.password;
   			$scope.view.firstname=data.firstname; 
   			$scope.view.lastname=data.lastname;
   			$scope.view.phone=data.phone;
   			$scope.view.birthday=new Date(data.birthday);
   			$scope.view.email=data.email;
   			$scope.view.address=data.address;
   			$scope.view.image=data.image;
   			$scope.view.degree=data.degree;
   			$scope.view.active=data.status;
        }
        
        var instructorID;
        $scope.getInstructorID=function(data){
        	instructorID=data.id;
        }
        
        $scope.getImage_Edit = function(element) {
    		photofile = element.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                $scope.$apply(function() {
                    $scope.prev_img_edit = e.target.result;
                });
            };
            reader.readAsDataURL(photofile);
            $scope.image=photofile.name;
    	};
        $scope.getInstructor = function (data) {
        	$scope.getInstructorID(data);
        	$http.get("api/instructor/"+data.id)
            .then(function (response) {
            	$scope.instructor_edit.username=response.data.username;
       			$scope.instructor_edit.password=response.data.password;
       			$scope.instructor_edit.firstname=response.data.firstname; 
       			$scope.instructor_edit.lastname=response.data.lastname;
       			$scope.instructor_edit.birthday=new Date(response.data.birthday);
       			$scope.instructor_edit.email=response.data.email;
       			$scope.instructor_edit.phone=response.data.phone;
       			$scope.instructor_edit.address=response.data.address;
       			$scope.instructor_edit.image=response.data.image;
       			$scope.instructor_edit.degree=response.data.degree;
       			$scope.instructor_edit.status=response.data.status;
          });
        };
        //Reset password
        $scope.ResetPassword = function () {
        	var dataInstructor={id:instructorID,password:$scope.newPassword};
            $http({
               method: "PUT",
               url: "api/instructor/reset",
               data: dataInstructor,
               dataType: "json"
            })
               .then(function (result) {
                	  resetAlert();
             });
       }      
        
        // delete instructor
         $scope.deleteInstructor=function()
        {
            $http({
               method: "DELETE",
              url: "api/instructor/" +  instructorID,
              dataType: "json"
            })
               .then(function (result) {
                  if (result.status == 202) {
                	  $("#myModal_xoa").modal("hide");
                	  getAllinstructors();
                	  deleteAlert();
                  } 
             });
        }
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
    	  function resetAlert(){
    		  swal({
    		  	  title:"",
    		  	  text: "Reset Successfully",
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