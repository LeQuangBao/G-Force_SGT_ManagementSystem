app.controller('intakeCtrl', function($scope, $http,$filter,$resource) {
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
	// Lấy danh sách Intake
	function GetListIntake(){
		$scope.list=[];
		var Intake=$resource('/api/intake');
		Intake.query().$promise.then(function(listIntake){
			angular.forEach(listIntake,function(value,key){
				value.startDate=$filter('date')(value.startDate, "MM/dd/yyyy");
				value.endDate=$filter('date')(value.endDate, "MM/dd/yyyy");
			});
			$scope.list=listIntake;
		});
		
	}
	GetListIntake();
	
	$scope.sortType = 'intakeName';
	$scope.filterTable = '';
	//filter list
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
	
	
	// Thêm mới intake
	$scope.Them=function(){
		if(Check_Add()){
			var startdate=new Date($scope.startdate);
			var enddate=new Date($scope.enddate);
			
			var Intake = $resource('/api/intake');
			// Call action method (save) on the class
			//
			Intake.save({intakeId:$scope.intakeid, intakeName: $scope.name, startDate:$scope.startdate, endDate:$scope.enddate, active:$scope.active})
				.$promise.then(function(){
					GetListIntake();
//					$('#myModal_them').modal('hide');
					addAlert();
				}, function(response) {
	    			alertFailMessage("Oops! Duplicate ID is not allowed.");
	    	    });
			
		}		
	}
	
	var intakeObj=null;
	
	//Lấy intake theo id
	$scope.GetIntake=function(x){
		$scope.formSua._id.$error.validationError=false;
		$scope.formSua._enddate.$error.validationError=false;
		var Intake = $resource('/api/intake/:id',{id:'@id'});
		Intake.get({id:x.id}).$promise.then(function(intake){
			$scope._id=intake.intakeId;
			$scope._name=intake.intakeName;
			$scope._intakeName=intake.intakeName; // Tên intake trong modal
													// Sửa
			$scope._startdate=new Date(intake.startDate);
			$scope._enddate=new Date(intake.endDate);
			$scope._active=intake.active;
		});		
		intakeObj=x;
		$scope.name1=x.intakeName;
	}
	
	// Sửa intake
	$scope.Sua=function(){
		if(Check_Edit()){
			var Intake = $resource('/api/intake/',{},{'update': { method:'PUT',headers: { 'Content-Type': 'application/json' }}});
			Intake.update({id:intakeObj.id,intakeId:$scope._id, intakeName: $scope._name, startDate:$scope._startdate, endDate:$scope._enddate, active:($scope._active==null?false:($scope._active==false?false:true))})
				.$promise.then(function(){
					$('#myModal_sua').modal('hide');
					editAlert();
					}, function(response) {
						alertFailMessage("Oops! Duplicate ID is not allowed.");
					});
			
			var idx = $scope.list.indexOf(intakeObj);
			$scope.list[idx].intakeId=$scope._id;
			$scope.list[idx].intakeName=$scope._name;
			$scope.list[idx].startDate=new Date($scope._startdate);
			$scope.list[idx].endDate=new Date($scope._enddate);
			$scope.list[idx].active=($scope._active==null?false:($scope._active==false?false:true));
		}	
	}  
	
	// Lấy đối tượng intake
	$scope.GetIntakeObj=function(intake){
		intakeObj=intake;
	}
	
	$scope.Xoa=function(){
		var Intake = $resource('/api/intake/:id',{id:'@id'});
		Intake.delete({id:intakeObj.id});
		var idx = $scope.list.indexOf(intakeObj);
	    $scope.list.splice(idx, 1); // Xóa 1 intake vị trí idx
	    deleteAlert();
	}

	$scope.ResetForm_Add=function(){
		$scope.intakeid='';
		$scope.name='';
		$scope.startdate='';
		$scope.enddate='';
		$scope.active=true;
		$scope.formThem.intakeid.$setUntouched();
		$scope.formThem.name.$setUntouched();
		$scope.formThem.startdate.$setUntouched();
		$scope.formThem.enddate.$setUntouched();
		$scope.formThem.intakeid.$error.validationError=false;
		$scope.formThem.enddate.$error.validationError=false;
	}
	$scope.ResetValidation1_Add=function(){
		$scope.formThem.intakeid.$error.validationError=false;
	}
	$scope.ResetValidation2_Add=function(){
		$scope.formThem.enddate.$error.validationError=false;
	}
	
	$scope.ResetValidation1_Edit=function(){
		$scope.formSua._id.$error.validationError=false;
	}
	
	$scope.ResetValidation2_Edit=function(){
		$scope.formSua._enddate.$error.validationError=false;
	}
	
	// Kiểm tra form Thêm có trùng intakeId, endDate < startDate
	function Check_Add(){
		var flag=true;
		angular.forEach($scope.list,function(value,key){
			if(value.intakeId==$scope.intakeid)
			{
				$scope.formThem.intakeid.$error.validationError=true;
				$scope.formThem.intakeid.$valid=false;
				flag=false;
			}
		});
		if(flag){
			$scope.formThem.enddate.$error.validationError=false;
			$scope.formThem.intakeid.$valid=true;
		}
		flag=true;	
		if($scope.startdate > $scope.enddate)
		{			
			$scope.formThem.enddate.$error.validationError=true;
			$scope.formThem.enddate.$valid=false;
			flag= false;
		}
		if(flag){
			$scope.formThem.enddate.$error.validationError=false;
			$scope.formThem.enddate.$valid=true;
		}
		if(/*!($scope.formThem.intakeid.$valid) ||*/ !($scope.formThem.enddate.$valid))
			return false;
		return true;
	}
	
	// Kiểm tra form Sửa có trùng intakeId, endDate < startDate
	function Check_Edit(){
		var flag=true;
		angular.forEach($scope.list,function(value,key){
			if($scope._id!=intakeObj.intakeId){
				if(value.intakeId==$scope._id)
				{
					$scope.formSua._id.$error.validationError=true;
					$scope.formSua._id.$valid=false;
					flag=false;
				}
			}
		});
		if(flag){
			$scope.formSua._enddate.$error.validationError=false;
			$scope.formSua._id.$valid=true;
		}
		flag=true;	
		if($scope._startdate > $scope._enddate)
		{			
			$scope.formSua._enddate.$error.validationError=true;
			$scope.formSua._enddate.$valid=false;
			flag= false;
		}
		if(flag){
			$scope.formSua._enddate.$error.validationError=false;
			$scope.formSua._enddate.$valid=true;
		}
		if(/*!($scope.formSua._id.$valid) ||*/ !($scope.formSua._enddate.$valid))
			return false;
		return true;
	}
	
	// Đặt mindate là ngày hiện tại
	$scope.minDate=new Date();
	
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
			})
		}
});