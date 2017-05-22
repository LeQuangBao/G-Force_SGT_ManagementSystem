app
		.controller(
				'specializationCtrl',
				function($scope, $http, $filter) {
					//
					// function configMainTable() {
					// // data get from getListSpecialiation()
					// $scope.table_specialization = {
					//
					// paginationPageSizes : [ 25, 50, 75 ],
					// paginationPageSize : 25,
					// columnDefs : [ {
					// name : 'ID'
					// }, {
					// name : 'Name'
					// }, {
					// name : 'Action'
					// } ]
					// };
					// }
					// configMainTable();

					var deleteSpecialization = "";
					var alertDuration = 1800;

					// get list specializations
					function getListTimetable() {
						$scope.list = [];
						$http.get("http://localhost:8080/api/timetable").then(
								function(response) {
									$scope.list = response.data;
									$scope.gridOptions.data = response.data;

								})
					}
					getListTimetable();
					// tạo dữ liệu cho table
					$scope.gridOptions = {
						noUnselect : true,
						multiSelect : false,
						enableRowSelection : true,
						enableRowHeaderSelection : false,
						enableSelectAll : false,
						enableGridMenu : true,
						enableFiltering : true,
						enableColumnResize : true,
						enableColumnMenus : false,
						paginationPageSizes : [ 15, 30, 50, 100 ],
						paginationPageSize : 15,
						columnDefs : [
								{
									name : 'timetableName',
									displayName : 'Name'
								},
								{
									name : 'specializationName',
									displayName : 'specialization Name'
								},
								{
									name : 'active',
									visible : true
								},
								{
									name : 'Action',
									enableSorting : false,
									enableFiltering : false,
									cellTemplate : '<button data-toggle="modal" class="btn btn-primary btn-sm" data-target="#myModal_editSubject" data-backdrop="static"ng-click="grid.appScope.callEditRelevantSubject(row.entity)" data-tooltip ="tooltip" title="Add course(s)"><span class="glyphicon glyphicon-th-list"></button>'
											+ '<button class="btn btn-primary btn-sm" ng-click="grid.appScope.callEditSpecialization(row.entity)" data-tooltip ="tooltip" title="Edit"data-toggle="modal" data-target="#myModal_sua"><span class="glyphicon glyphicon-edit"></span></button>'
											+ '<button ng-click="grid.appScope.callDeleteSpecialization(row.entity)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete" data-target="#myModal_xoa"><span class="glyphicon glyphicon-remove"></span></button>'
								} ]
					};
					// lọc toàn bộ dữ liệu
					$scope.refreshData = function(termObj) {
						$scope.gridOptions.data = $scope.list;

						while (termObj) {
							var oSearchArray = termObj.split(' ');
							$scope.gridOptions.data = $filter('filter')(
									$scope.gridOptions.data, oSearchArray[0],
									undefined);
							oSearchArray.shift();
							termObj = (oSearchArray.length !== 0) ? oSearchArray
									.join(' ')
									: '';
						}
					};

					// function makeReadableLabel(label) {
					// var formatted = label;
					// switch (label) {
					// case 'specializationName':
					// formatted = 'specialization name';
					// break;
					// // case 'lastName':
					// // formatted = 'last name';
					// }
					// return formatted;
					// }

					// add timetable
					$scope.addTimetable = function() {

					}

					// update timetable
					$scope.callEditTiametable = function(data) {
						$http.get("/api/timetable/" + data.id).then(
								function(response) {
									$scope.info = response.data;
								});
						SpecID = data.id;
						$scope.duplicateAlert = "";
					}

					$scope.editTimetable = function() {
						
					}
					
					// delete timetable
					$scope.callDeleteTimetable = function(data) {
						deleteTimetable = data;
					}
					$scope.deleteTimetable = function() {
						$http(
								{
									method : "DELETE",
									url : "/api/timetable/"
											+ deleteTimetable.id,
									dataType : "json",
								}).then(function(result) {
							if (result.status == 202) {
								$("#myModal_xoa").modal("hide");
								getListTimetables();
								alertDeleteSucess();
							}
						}, function(response) {
							alertFail();
						});
					}

					// Kiểm tra trùng ID
//					function id_duplicate_Add(id) {
//						var flag = true;
//						$scope.list.forEach(function(item, index) {
//							if (item.specializationId === id) {
//								$scope.duplicateAlert = "Duplicate ID";
//								flag = false;
//							}
//						});
//						return flag;
//					}
//					var SpecID = "";
//
//					function id_duplicate_Edit(id) {
//						var flag = true;
//						$scope.list.forEach(function(item, index) {
//							if (id != SpecID) {
//								if (item.specializationId === id) {
//									$scope.duplicateAlert = "Duplicate ID";
//									flag = false;
//								}
//							}
//						});
//						return flag;
//					}
//					$scope.hideDuplicateAlert = function() {
//						$scope.duplicateAlert = "";
//					}

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
//					$scope.ResetForm_Add = function() {
//						$scope.specializationId_add = "";
//						$scope.specializationName_add = "";
//						$scope.active_add = true;
//						$scope.formAdd.specializationId_add.$setUntouched();
//						$scope.formAdd.specializationName_add.$setUntouched();
//						$scope.duplicateAlert = "";
//					}

				});
// Chu thich cua nut phan action
$(document).ready(function() {
	$('body').tooltip({
		selector : "[data-tooltip=tooltip]",
		container : "body"
	});
});