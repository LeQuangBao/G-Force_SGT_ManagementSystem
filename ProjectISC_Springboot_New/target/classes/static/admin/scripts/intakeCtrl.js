app.controller('intakeCtrl', function($scope, $filter,$resource) {
	
	//Lấy danh sách Intake
	function GetListIntake(){
    /*$http.get('http://localhost:8080/api/intake').
        then(function(response) {
        	$scope.list= response.data;
        });*/
		var Intake=$resource('/api/intake');
		$scope.list= Intake.query();
	};
	GetListIntake();
	
	$scope.sortType = 'intakeName';
	$scope.filterTable = '';
	//Tìm kiếm theo tên
	$scope.filterSort = function(element) {
		if ($filter('filter')([element], $scope.filterTable).length > 0) {
			return 1;
		}
		return 2;
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
	$scope.sortTooltip = function(label1, label2) {
		label2 = label2 || '';
		
		var order = 'descending';
		if (matchFirstChar('-', $scope.sortType)) {
			order = 'ascending';
		}
		
		var baseSortType = removeDash($scope.sortType);
		if (label1 == baseSortType || label2 == baseSortType) {
			return capitalizeFirstLetter((makeReadableLabel(baseSortType)) + ' ' + order);
		}
		return 'Sort by ' + makeReadableLabel(label1) + ' or ' + makeReadableLabel(label2);
	};
	
	//Phân trang
	$scope.currentPage = 1;
	// max size of the pagination bar
	$scope.maxPaginationSize = 100;
	$scope.itemsPerPage = 10;
	$scope.updatePageIndexes = function () {
		$scope.firstIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
		$scope.lastIndex = $scope.currentPage * $scope.itemsPerPage;
	};
	$scope.updatePageIndexes();
	
	$scope.showList=function(name,index){
		return (($scope.filterSort(name) == 1) && (index >= $scope.firstIndex) && (index < $scope.lastIndex));
	}
	
	//Thêm mới intake
	$scope.Them=function(){
		if(Check_Add()){
			var startdate=new Date($scope.startdate);
			var enddate=new Date($scope.enddate);
			$scope.list.push({ 'intakeId':$scope.id, 'intakeName': $scope.name, 'startDate':startdate, 'endDate':enddate, 'active':($scope.active==null?false:true) });
			var Intake = $resource('/api/intake');
			// Call action method (save) on the class 
			//
			Intake.save({intakeId:$scope.id, intakeName: $scope.name, startDate:$scope.startdate, endDate:$scope.enddate, active:($scope.active==null?false:true)}, function(response){
				console.log(response.message);
			});		
			$scope.id='';
			$scope.name='';
			$scope.startdate='';
			$scope.enddate='';
			$scope.active=false;
			$('#myModal_them').modal('hide');
		}
	}
	
	var intakeObj=null;
	
	//Lấy intake theo id
	$scope.GetIntake=function(x){ 
		var Intake = $resource('/api/intake/:id',{id:'@id'});
		Intake.get({id:x.id}).$promise.then(function(intake){
			$scope._id=intake.intakeId;
			$scope._name=intake.intakeName;
			$scope._intakeName=intake.intakeName; //Tên intake trong modal Sửa
			$scope._startdate=new Date(intake.startDate);
			$scope._enddate=new Date(intake.endDate);
			$scope._active=intake.active;
		});		
		intakeObj=x;
	}
	
	//Sửa intake
	$scope.Sua=function(){
		if(Check_Edit()){
			var Intake = $resource('/api/intake/',{},{'update': { method:'PUT',headers: { 'Content-Type': 'application/json' }}});
			Intake.update({id:intakeObj.id,intakeId:$scope._id, intakeName: $scope._name, startDate:$scope._startdate, endDate:$scope._enddate, active:($scope._active==null?false:($scope._active==false?false:true))});
			
			var idx = $scope.list.indexOf(intakeObj);
			$scope.list[idx].intakeId=$scope._id;
			$scope.list[idx].intakeName=$scope._name;
			$scope.list[idx].startDate=new Date($scope._startdate);
			$scope.list[idx].endDate=new Date($scope._enddate);
			$scope.list[idx].active=($scope._active==null?false:($scope._active==false?false:true));
		    	
			$scope._id='';
			$scope._name='';
			$scope._startdate='';
			$scope._enddate='';
			$scope._active=false;	
			$('#myModal_sua').modal('hide');
		}
	}  
	
	//Lấy đối tượng intake
	$scope.GetIntakeObj=function(intake){
		intakeObj=intake;
	}
	
	$scope.Xoa=function(){
		var Intake = $resource('/api/intake/:id',{id:'@id'});
		Intake.delete({id:intakeObj.id});
		var idx = $scope.list.indexOf(intakeObj);
	    $scope.list.splice(idx, 1); //Xóa 1 intake vị trí idx
	}
	
	$scope.ResetForm=function(){
		$scope.id='';
		$scope.name='';
		$scope.startdate='';
		$scope.enddate='';
		$scope.active=false;
	}
	
	//Kiểm tra form thêm trước khi thêm
	function Check_Add(){
		if(!($scope.formThem.id.$valid) || !($scope.formThem.name.$valid) || !($scope.formThem.startdate.$valid) || !($scope.formThem.enddate.$valid))
			return false;
		if($scope.startdate > $scope.enddate)
		{			
			$scope.formThem.enddate.$error.validationError=true;
			return false;
		}
		else
			$scope.formThem.enddate.$error.validationError=false;
		return true;
	}
	
	//Kiểm tra form sửa trước khi sửa
	function Check_Edit(){
		if(!($scope.formSua._id.$valid) || !($scope.formSua._name.$valid) || !($scope.formSua._startdate.$valid) /*|| !($scope.formSua._enddate.$valid)*/)
			return false;
		if($scope._startdate > $scope._enddate)
		{			
			$scope.formSua._enddate.$error.validationError=true;
			return false;
		}
		else
			$scope.formSua._enddate.$error.validationError=false;
		return true;
	}
	
	//Đặt mindate là ngày hiện tại
	$scope.minDate=new Date();
});