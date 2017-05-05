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
		
        
        $scope.hideDuplicateAlert=function(){
        	$scope.duplicateAlert="";
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
	    $scope.sortType = 'firstName';
    	$scope.filterTable = '';
	 // Tìm kiếm theo tên
    	$scope.listfiltered = function(element) {
            return $filter('filter')(element, $scope.filterTable); 
        };
     // kiểm tra trùng username
		$scope.list=[];
        function usernameduplicate(username) {
        	var flag=true;
//            var Student = $resource('http://localhost:8080/admin/api/Student');
//            Student.query().$promise.then(function(listStudent) {
        		console.log($scope.list);
                $scope.list.forEach(function(item, index) {
                    if (item.username === username) {
                        //alertduplicatestudent();
                        $scope.duplicateAlert="Duplicate username";
                    	flag=false;
                    }
                });
                // alert(numberOfStudent);
            //});
            return flag;
        }
        
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
    	function uploadFile() {
            $.ajax({
              url: "uploadFile",
              type: "POST",
              data: new FormData($("#fileUploadForm")[0]),
              enctype: 'multipart/form-data',
              processData: false,
              contentType: false,
              cache: false,
              success: function () {
                // Handle upload success
                $("#upload-file-message").text("File succesfully uploaded");
              },
              error: function () {
                // Handle upload error
                $("#upload-file-message").text(
                    "File not uploaded (perhaps it's too big)");
              }
            });
          }
    	$scope.image="";
	    // add instructor
        $scope.save = function (close) {
        	uploadFile();
        
        	if(usernameduplicate($scope.username)){
       	if($scope.image==="")
			{
			$scope.image="noImage.png";
 			}
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
        	  if(close==true){
        		  $('#myModal').modal('hide');
        	  }
         } 
    
            }, function(response) {
//            	if(response.status == 406) {            		
//            		alertFailMessage("Oops! Something went wrong, please check your input again.");
//            	}
			});
        	}
        }
        //Upload file trong modal Edit
        function uploadFile_Edit() {
            $.ajax({
              url: "uploadFile",
              type: "POST",
              data: new FormData($("#upload-file-form-edit")[0]),
              enctype: 'multipart/form-data',
              processData: false,
              contentType: false,
              cache: false,
              success: function () {
                // Handle upload success
                $("#upload-file-message").text("File succesfully uploaded");
              },
              error: function () {
                // Handle upload error
                $("#upload-file-message").text(
                    "File not uploaded (perhaps it's too big)");
              }
            });
          }
	    $scope.ResetForm_Add=function(){
	    	 document.getElementById("image").value="";
        	 $scope.prev_img='';
	    	 $scope.username="";
        	 $scope.password="";
        	 $scope.firstName="";
        	 $scope.lastName="";
        	 $scope.duplicateAlert="";
        	 $scope.re_password="";
        	 $scope.email="";
        	 $scope.phone="";
        	 $scope.address="";
        	 $scope.birthday="";
        	 $scope.active=true;
        	 $scope.degree="College";
        	 $scope.frmInstructor.username.$setUntouched();
        	 $scope.frmInstructor.lastName.$setUntouched();
        	 $scope.frmInstructor.firstName.$setUntouched();
        	 $scope.frmInstructor.password.$setUntouched();
        	 $scope.frmInstructor.re_password.$setUntouched();
        	 $scope.frmInstructor.email.$setUntouched();
        	 $scope.frmInstructor.phone.$setUntouched();
        	 $scope.frmInstructor.address.$setUntouched();
//        	 document.getElementById("image").value="";
        	 document.getElementById("prev_img").src="";
        	 $scope.prev_img="";
	    }
	    $scope.instructor_edit = [];
	  //edit instructor
        $scope.update = function () {
        	uploadFile_Edit();
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
                		setTimeout(function() {
                       		window.location.reload();
                        }, 1000);
             }, function(response) {
					alertFailMessage("Oops! Something went wrong, please check your input again");
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
            $scope.instructor_edit.image=photofile.name;
    	};
        $scope.getInstructor = function (data) {
        	$scope.re_newPassword='';
        	$scope.newPassword='';
        	document.getElementById("image_edit").value="";
        	$scope.prev_img_edit='';
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
            	   $("#myModal_confirmReset").modal("hide");
                	  resetAlert();
             });
       }
        $scope.hideDuplicateAlert=function(){
        	$scope.duplicateAlert="";
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
    	  	  text: "Delete successfully",
    	  	  type: "success",
    	  	  timer: 2000,
    	  	  showConfirmButton: false
    	  	});
    	  }
    	  function editAlert(){
    		  swal({
    		  	  title:"",
    		  	  text: "Edit successfully",
    		  	  type: "success",
    		  	  timer: 2000,
    		  	  showConfirmButton: false
    		  	});
      	  }
    	  function addAlert(){
    		  swal({
    		  	  title:"",
    		  	  text: "Add successfully",
    		  	  type: "success",
    		  	  timer: 2000,
    		  	  showConfirmButton: false
    		  	});
    	  }
    	  function resetAlert(){
    		  swal({
    		  	  title:"",
    		  	  text: "Reset successfully",
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
    	// Hàm tự động điền các text input trong form Add
          // Đặt con trỏ vào ô username, bấm Alt + Q
    	  $scope.autoAdd = function(keyEvent) {    		  
    	        if (keyEvent.keyCode == 81 && keyEvent.altKey) {
    	        	var random = getRandomInt(1, 10000);
    		    	 $scope.username="Billgate" + random;
    	        	 $scope.firstName="Bill " + random;
    	        	 $scope.lastName="Gate " + random;
    	        	 $scope.password=random;
    	        	 $scope.re_password=random;
    	        	 $scope.email="Billgate" + random + "@gmail.com";
    	        	 $scope.phone=random * 2;
    	        	 $scope.address=random;
    	        	 $scope.birthday=new Date("3/25/1997");
    	        	 $scope.active=true;
    	        	$scope.degree="College";
    	        }
    	  }
    	  function getRandomInt (min, max) {
    		    return Math.floor(Math.random() * (max - min + 1)) + min;
    		}
	});

//Compare password and retype password
app.directive("matchPassword", function(){
return {
    require: "ngModel",
    scope: {
      otherModelValue: "=matchPassword"
    },
    link: function(scope, element, attributes, ngModel) {

      ngModel.$validators.matchPassword = function(modelValue) {
        return modelValue == scope.otherModelValue;
      };

      scope.$watch("otherModelValue", function() {
        ngModel.$validate();
      });
    }
  };
});