app.controller('registrarCtrl', function($scope, $http,$filter) {
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
 	//ADD REGISTRAR
 	$scope.save= function()
 	{
 		var username= document.getElementById("username").value;
 		var lastname=document.getElementById("lastName").value;
 		var firstname=document.getElementById("firstName").value;
 		var password=document.getElementById("password").value;
 		var email=document.getElementById("email").value;
 		var phone=document.getElementById("phone").value;
 		var address=document.getElementById("address").value;
 		 var active1=document.getElementById("actived");
         var active=$scope.active;
 		
 	}
	 //edit registrar
	 $scope.update = function () {
		 var registrarObj={id:$scope.id,username:$scope.username,fistname:$scope.firstName,lastName:$scope.lastname,birthday:$scope.birthday,email:$scope.email,phone:$scope.phone,address:$scope.address,image:$scope.image,status:($scope.active==null?false:($scope.active==false?false:true))};
		 $http({
             method: "PUT",
            url: "/admin/api/registrar",
             data: registrarObj,
             contentType: "application/json; charset=utf-8",
             dataType: "json"
          })
          .then(function (result) {
              if (result.status == 202) {
            	  $("#myModal_sua").modal("hide");
            	  getAllRegistrars();
            	  editAlert();
              } 
         }, function(response) {
				alertFailMessage("Oops! Duplicate ID is not allowed.");
				setTimeout(function() {
					location.reload();
				}, alertDuration);
         });
		 
	 }
	 $scope.editRegistrar = function(data)
	 {
		 $http.get("/admin/api/registrar"+data.id)
		 .then(function (response)
		 {
			 $scope.username=response.data.username;
			 $scope.lastName=response.data.lastname;
			 $scope.fistName=response.data.firstname;
			 $scope.birthday=respone.data.birthday;
			 $scope.email=response.data.email;
			 $scope.phone=response.data.phone;
			 $scope.address=response.data.address;
			 $scope.image=respone.data.image;
			 $scope.active=respone.data.status;
			 $scope.id=data.id;
		 }); 
	 };
	//view detail
	 $scope.viewRegistrar = function (data)
	 {
		 $http.get("/admin/api/registrar"+data.id)
		 .then(function (response)
		 {
			 $scope.username=response.data.username;
			 $scope.lastName=response.data.lastname;
			 $scope.fistName=response.data.firstname;
			 $scope.birthday=respone.data.birthday;
			 $scope.email=response.data.email;
			 $scope.phone=response.data.phone;
			 $scope.address=response.data.address;
			 $scope.image=respone.data.image;
			 $scope.active=respone.data.status;
			 $scope.id=data.id;
		 });
	 };
});