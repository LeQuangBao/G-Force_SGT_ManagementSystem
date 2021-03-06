app.controller('instructorCtrl', function($scope, $http,$filter, uiGridConstants) {
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
			$scope.gridOptions.data = response.data;
	    });
	    }
	    getAllinstructors();
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
	    		      { name: 'username',displayName:'User Name' },
	    		      { name: 'lastname', displayName : 'Last Name' },
	    		      { name: 'firstname', displayName : 'First Name'},
	    		      { name: 'birthday', visible : false, cellFilter: 'date:"MM/dd/yyyy"' },
	    		      { name: 'email', visible : false },
	    		      { name: 'phone', visible : false },
	    		      { name: 'address', visible : false },
	    		      { name: 'degree', visible : false, 
	    		    	filter:{
	    		    		type: uiGridConstants.filter.SELECT,
	    		    		selectOptions:[
	    		    			{value:'Doctor', label:'Doctor'},
	    		    			{value:'Master', label:'Master'},
	    		    			{value:'University', label:'University'},
	    		    			]
	    		    	}},
	    		      { name: 'status', cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.status == 0 ? "Inactive" : "Active"}}</div>', filter: {
	    		          type: uiGridConstants.filter.SELECT,
	    		          selectOptions: [
	    		              { value: 'true', label: 'Active' },
	    		              { value: 'false', label: 'Inactive' }
	    		          ]
	    		      }},
	    		      { name: 'Action',enableSorting: false,enableFiltering: false,
	    		             cellTemplate:'<button ng-click="grid.appScope.viewInstructor(row.entity)" data-toggle="modal" class="btn btn-success btn-sm" data-tooltip ="tooltip" title="View detail informations" data-target="#myModal_detail"><span class="glyphicon glyphicon-eye-open"></span></button>' 
	    		            	 			+'<button class="btn btn-primary btn-sm" ng-click="grid.appScope.getInstructor(row.entity)" data-tooltip ="tooltip" title="Edit"	data-toggle="modal" data-target="#myModal_sua"><span class="glyphicon glyphicon-edit"></span></button>'
	    		            	 			+'<button ng-click="grid.appScope.getInstructor(row.entity)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete" data-target="#myModal_xoa"><span class="glyphicon glyphicon-remove"></span></button>'
	    		      }
	    		    ]
	    	  };
	    // lọc dữ toàn bộ dữ liệu
	    $scope.refreshData = function (termObj) {
	        $scope.gridOptions.data = $scope.list;

	        while (termObj) {
	            var oSearchArray = termObj.split(' ');
	            $scope.gridOptions.data = $filter('filter')($scope.gridOptions.data, oSearchArray[0], undefined);
	            oSearchArray.shift();
	            termObj = (oSearchArray.length !== 0) ? oSearchArray.join(' ') : '';
	        }
	    };
	    
	    $scope.sortType = 'firstName';
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
	                formatted = 'first name';
	                break;
	            case 'lastName':
	                formatted = 'last name';
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
//    	// Phân trang
//    	$scope.currentPage = 1;
//    	// max size of the pagination bar
//    	$scope.maxPaginationSize = 10;
//    	$scope.itemsPerPage = 15;
//    	$scope.updatePageIndexes = function () {
//    		var totalPages = Math.ceil($scope.list.length / $scope.maxPaginationSize);
//    		if (totalPages <= 10) {
//                // less than 10 total pages so show all
//    			$scope.firstIndex = 1;
//    			$scope.lastIndex = totalPages;
//            } else {
//                // more than 10 total pages so calculate start and end pages
//                if ($scope.currentPage <= 6) {
//                	$scope.firstIndex = 1;
//                	$scope.lastIndex = 10;
//                } else if ($scope.currentPage + 4 >= totalPages) {
//                	$scope.firstIndex = totalPages - 9;
//                	$scope.lastIndex = totalPages;
//                } else {
//                	$scope.firstIndex = $scope.currentPage - 5;
//                	$scope.lastIndex = $scope.currentPage + 4;
//                }
//            }
//    		$scope.firstIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
//    		$scope.lastIndex = $scope.currentPage * $scope.itemsPerPage;
//    	};
//    	$scope.updatePageIndexes();
//    	
//    	$scope.showList=function(index){
//    		return ((index >= $scope.firstIndex) && (index < $scope.lastIndex));
//    	}
    	$scope.getImage = function(element) {
    		photofile = element.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                $scope.$apply(function() {
                    $scope.prev_img = e.target.result;
                });
            };
            reader.readAsDataURL(photofile);
            //$scope.image=photofile.name;
    	};
    	function uploadFile() {
            $.ajax({
              url: "instructor/uploadFile",
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
        	  if(close==true){
        		  $('#myModal').modal('hide');
        	  }
        	  getAllinstructors();
        	  addAlert();
        	  $scope.ResetForm_Add();
        	  
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
              url: "instructor/uploadFile",
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
        //Reset form Reset Password
        $scope.ResetFormReset = function()
        {
        	$scope.newPassword ="";
    		 $scope.re_newPassword="";
    		 $scope.frmResetPassword.newPassword.$setUntouched();
    		 $scope.frmResetPassword.re_newPassword.$setUntouched();
        }
        //Reset form Add
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
        	 $scope.image="";
        	 $scope.frmInstructor.username.$setUntouched();
        	 $scope.frmInstructor.lastName.$setUntouched();
        	 $scope.frmInstructor.firstName.$setUntouched();
        	 $scope.frmInstructor.password.$setUntouched();
        	 $scope.frmInstructor.re_password.$setUntouched();
        	 $scope.frmInstructor.email.$setUntouched();
        	 $scope.frmInstructor.phone.$setUntouched();
        	 $scope.frmInstructor.address.$setUntouched();
        	 document.getElementById("image").value="";
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
//Chu thich cua nut phan action
$(document).ready(function() {
    $('body').tooltip({
        selector: "[data-tooltip=tooltip]",
        container: "body"
    });
});

