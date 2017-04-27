app.controller('registrarCtrl', function($scope, $http,$filter) {
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

	// Lấy danh sách Registrar
	 function getAllRegistrars(){
	    	$scope.list=[];
	    	$http.get("/admin/api/registrar")
	    .then(function(response) {	
	       $scope.list = response.data;
	    });
	    }
	 getAllRegistrars();
	 $scope.sortType = 'userName';
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
	
	function uploadFile() {
        $.ajax({
          url: "uploadFile",
          type: "POST",
          data: new FormData($("#upload-file-form")[0]),
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
	
 	// ADD REGISTRAR
	$scope.image="";
 	 $scope.save = function () {
 		uploadFile();
 	
 		if($scope.image==="")
 			{
 			$scope.image="noImage.png";
 			}
 		
       $http({
            method: "POST",
            url: "api/registrar",
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
               	status: $scope.active,
               
            },
           
            dataType: "json"
       })
   .then(function (result) {	
       if (result.status == 201) {
    	   getAllRegistrars();
     	  addAlert();
     	  $scope.ResetForm_Add();
       } 
 
        }, function(response) {
         	if(response.status == 406) {            		
         		alertFailMessage("Oops! Something went wrong, please check your input again.");
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
    	 $scope.frmRegistrarAdd.username.$setUntouched();
    	 $scope.frmRegistrarAdd.lastName.$setUntouched();
    	 $scope.frmRegistrarAdd.firstName.$setUntouched();
    	 $scope.frmRegistrarAdd.password.$setUntouched();
    	 $scope.frmRegistrarAdd.re_password.$setUntouched();
    	 $scope.frmRegistrarAdd.phone.$setUntouched();
    	 $scope.frmRegistrarAdd.email.$setUntouched();
    	 $scope.frmRegistrarAdd.address.$setUntouched();
    	 document.getElementById("image").value="";
    	 document.getElementById("prev_img").src="";
    	 $scope.prev_img="";
 	 }
 	// set current date for max date - birthday
 	$scope.currentDate={value: new Date()};
 	 
	// view detail
 	$scope.view=[];
	 $scope.viewRegistrar=function(data){
     	$scope.view.username=data.username;
			$scope.view.password=data.password;
			$scope.view.firstname=data.firstname; 
			$scope.view.lastname=data.lastname;
			$scope.view.phone=data.phone;
			$scope.view.birthday=new Date(data.birthday);
			$scope.view.email=data.email;
			$scope.view.address=data.address;
			$scope.view.image=data.image;
			$scope.view.status=data.status;
     }
	 var registrarID;
     $scope.getRegistrarID=function(data){
    	 registrarID=data.id;
     }
     
    
 	// Upload file trong modal Edit
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
    $scope.getImage_Edit = function(element) {
    	if(element.files[0]!=null){
			photofile = element.files[0];
	        var reader = new FileReader();
	        reader.onload = function(e) {
	            $scope.$apply(function() {
	                $scope.prev_img_edit = e.target.result;
	            });
	        };
	        reader.readAsDataURL(photofile);
	        $scope.edit.image=photofile.name;
    	}
	};
 	$scope.edit = [];
	 // edit registrar
	$scope.update = function () {
		uploadFile_Edit();
   	var dataRegistrar={id:registrarID,username:$scope.edit.username,lastname:$scope.edit.lastname,
   			firstname:$scope.edit.firstname,birthday:$scope.edit.birthday,email:$scope.edit.email,
   			phone:$scope.edit.phone,address:$scope.edit.address,image:$scope.edit.image,
   			status:$scope.edit.status};
   	
       $http({
          method: "PUT",
          url: "api/registrar",
          data: dataRegistrar,
          dataType: "json"
       })
          .then(function (result) {
           	  $("#myModal_sua").modal("hide");
           	  // getAllRegistrars();
           	  editAlert();
           	setTimeout(function() {
           		window.location.reload();
            }, 1000);
        }, function(response) {
				alertFailMessage("Oops! Something went wrong, please check your input again.");
				setTimeout(function() {
				});
        });
  }  
 	 
 	 $scope.editRegistrar = function (data) {
 		document.getElementById("image_edit").value="";
    	$scope.prev_img_edit='';
     	$http.get("api/registrar/"+data.id)
         .then(function (response) {
        	 registrarID=data.id;
         		$scope.edit.username=response.data.username;
    			$scope.edit.firstname=response.data.firstname; 
    			$scope.edit.lastname=response.data.lastname;
    			$scope.edit.password=response.data.password;
    			$scope.edit.birthday=new Date(response.data.birthday);
    			$scope.edit.email=response.data.email;
    			$scope.edit.phone=response.data.phone;
    			$scope.edit.address=response.data.address;
    			$scope.edit.image=response.data.image;
    			$scope.edit.status=response.data.status;
    			
       });
     };
     // get data for delete
     $scope.registrar_delete = [];
     $scope.deleteRegistrar = function (data) {
         $scope.registrar_delete = data;
     }; 
     // delete
     $scope.delete=function()
     {
         $http({
            method: "DELETE",
           url: "/admin/api/registrar/" +  $scope.registrar_delete.id,
           dataType: "json"
         })
            .then(function (result) {
               if (result.status == 202) {
             	  $("#myModal_xoa").modal("hide");
             	 getAllRegistrars();
             	  deleteAlert();
               } 
          });
     }
   // Reset password
     $scope.ResetPassword = function () {
    	
     	var dataRegistrar={id:registrarID,password:$scope.newPassword};
         $http({
            method: "PUT",
            url: "api/registrar/reset",
            data: dataRegistrar,
            dataType: "json"
         })
            .then(function (result) {
            	$("#myModal_confirmReset").modal("hide");
             	  resetAlert();
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
	        	
	        }
	  }
	  function getRandomInt (min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
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
 	  function resetAlert(){
 		  swal({
 		  	  title:"",
 		  	  text: "Reset successfully.",
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
// Compare password and retype password
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
app.directive('checkImage', function($http) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            attrs.$observe('ngSrc', function(ngSrc) {
                $http.get(ngSrc).success(function(){
                    alert('image exist');
                }).error(function(){
                    alert('image not exist');
                    element.attr('src', '/images/noImage.png'); // set default image
                });
            });
        }
    };
});