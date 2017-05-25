app.controller('roomCtrl',function($scope, $http, $filter, uiGridConstants) {
	var deleteRoom = "";
	var alertDuration = 1800;

	// get list rooms
	function getListRooms() {
		$scope.list = [];
		$http.get("http://localhost:8080/api/room")
				.then(function(response) {
							$scope.list = response.data;
							$scope.gridOptions.data = response.data;

						})
	}
	getListRooms();
	// tạo dữ liệu cho table
	$scope.gridOptions = {
		noUnselect : true,
		multiSelect : false,
		enableRowSelection : true,
		enableRowHeaderSelection : false,
		enableSelectAll : false,
		enableGridMenu : false,
		enableFiltering : true,
		enableColumnResize : true,
		enableColumnMenus : false,
		paginationPageSizes : [ 15, 30, 50, 100 ],
		paginationPageSize : 15,
		columnDefs : [
				{
					name : 'roomId',
					displayName : 'Name'
				},
				{
					name : 'Action',
					enableSorting : false,
					enableFiltering : false,
					cellTemplate :'<button class="btn btn-primary btn-sm" ng-click="grid.appScope.callEditRoom(row.entity)" data-tooltip ="tooltip" title="Edit"data-toggle="modal" data-target="#myModal_sua"><span class="glyphicon glyphicon-edit"></span></button>'
							+ '<button ng-click="grid.appScope.callDeleteRoom(row.entity)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete" data-target="#myModal_xoa"><span class="glyphicon glyphicon-remove"></span></button>'
				} ]
	};
	    
	// add room
	$scope.addRoom = function(close) {
		if (roomId_duplicate_Add($scope.roomId_add)) {
			$http({
				method : "POST",
				url : "/api/room",
				data : {
					roomId : $scope.roomId_add
				},
				dataType : "json",
				headers : {
					'Content-Type' : 'application/json'
				}
			}).then(function(response) {
								getListRooms();
								alertAddSucess();
								$scope.ResetForm_Add();
								if (close == true) {
									$("#myModal_them").modal("hide");
								}
							},
							function(response) {
								if (response.status == 406) {
									alertFailMessage("Oops! Something went wrong, please check your input again.");
								}
							});
		}
	}

	// update room
	$scope.callEditRoom = function(data) {
		$http.get("/api/room/" + data.id).then(
				function(response) {
					$scope.info = response.data;
				});
		roomID = data.roomId;
		$scope.duplicateAlert = "";
	}

	$scope.editRoom = function() {
		if (roomId_duplicate_Edit($scope.info.roomId)) {
			$http({
				method : "PUT",
				url : "/api/room",
				data : JSON.stringify($scope.info),
				dataType : "json",
			}).then(function(response) {
								$("#myModal_sua").modal("hide");
								getListRooms();
								alertEditSucess();
							},
							function(response) {
								if (response.status == 406) {
									alertFailMessage("Oops! Something went wrong, please check your input again.");
								}
							});
		}
	}

	// delete room
	$scope.callDeleteRoom = function(data) {
		deleteRoom = data;
	}
	$scope.deleteRoom = function() {
		$http({	method : "DELETE",
					url : "/api/room/"
							+ deleteRoom.id,
					dataType : "json",
				}).then(function(result) {
			if (result.status == 202) {
				$("#myModal_xoa").modal("hide");
				getListRooms();
				alertDeleteSucess();
			}
		}, function(response) {
			alertFail();
		});
	}

	// Kiểm tra trùng roomId
	function roomId_duplicate_Add(id) {
		var flag = true;
		$scope.list.forEach(function(item, index) {
			if (item.roomId == id) {
				$scope.duplicateAlert = "Duplicate Name";
				flag = false;
			}
		});
		return flag;
	}
	var roomID = "";

	function roomId_duplicate_Edit(id) {
		var flag = true;
		$scope.list.forEach(function(item, index) {
			if (id != roomID) {
				if (item.roomId == id) {
					$scope.duplicateAlert = "Duplicate Name";
					flag = false;
				}
			}
		});
		return flag;
	}
	$scope.hideDuplicateAlert = function() {
		$scope.duplicateAlert = "";
	}

	function alertDeleteSucess() {
		swal({
			title : "",
			text : "Delete successfully.",
			type : "success",
			timer : alertDuration,
			showConfirmButton : false
		});
	}

	function alertEditSucess() {
		swal({
			title : "",
			text : "Edit successfully.",
			type : "success",
			timer : alertDuration,
			showConfirmButton : false
		});
	}

	function alertAddSucess() {
		swal({
			title : "",
			text : "Add successfully.",
			type : "success",
			timer : alertDuration,
			showConfirmButton : false
		});
	}

	function alertFail() {
		swal({
			title : "",
			text : "Opps! Something went wrong, please check your input again.",
			type : "error",
			timer : alertDuration,
			showConfirmButton : false
		})
		setTimeout(function() {
			location.reload();
		}, alertDuration);
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

	function alertMessage(message) {
		swal({
			title : message,
			timer : alertDuration,
			showConfirmButton : false
		})
	}
	// reset form add
	$scope.ResetForm_Add = function() {
		$scope.roomId_add = "";
		$scope.formAdd.roomId_add.$setUntouched();
		$scope.duplicateAlert = "";
	}

});
// Chu thich cua nut phan action
$(document).ready(function() {
	$('body').tooltip({
		selector : "[data-tooltip=tooltip]",
		container : "body"
	});
});