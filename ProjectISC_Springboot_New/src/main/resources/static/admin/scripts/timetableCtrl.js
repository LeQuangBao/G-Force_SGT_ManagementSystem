app
		.controller(
				'timetableCtrl',
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
					$scope.timetable={};
					$scope.timetable_edit=[];
					// get list timetable
					function getListTimetable() {
						$scope.list = [];
						$http.get("http://localhost:8080/api/timetable").then(
								function(response) {
									$scope.list = response.data;
									$scope.gridOptions.data = response.data;

								})
					}
					// get list intake
					function getListIntake() {
						$scope.list_intake = [];
						$http.get("http://localhost:8080/api/intake").then(
								function(response) {
									$scope.list_intake = response.data;
									console.log($scope.list_intake);
								})
					}
					// get list session
					function getListSession() {
						$scope.list_session = [];
						$http.get("http://localhost:8080/api/session").then(
								function(response) {
									$scope.list_session = response.data;

								})
					}
					getListTimetable();
					getListIntake();
					getListSession();
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
									name : 'intake.intakeName',
									displayName : 'Intake'
								},
								{
									name : 'session.sessionName',
									displayName : 'Session'
								},
								{
									name : 'Action',
									enableSorting : false,
									enableFiltering : false,
									cellTemplate :'<button class="btn btn-primary btn-sm" ng-click="grid.appScope.callEditTiametable(row.entity)" data-tooltip ="tooltip" title="Edit"data-toggle="modal" data-target="#myModal_sua"><span class="glyphicon glyphicon-edit"></span></button>'
											+ '<button ng-click="grid.appScope.callDeleteTimetable(row.entity)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete" data-target="#myModal_xoa"><span class="glyphicon glyphicon-remove"></span></button>'
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
					$scope.filterTable = '';

					  $scope.sortType = 'specializationName';
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
					            case 'specializationName':
					                formatted = 'specialization name';
					                break;
//					            case 'lastName':
//					                formatted = 'last name';
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
//					    // Phân trang
//					    $scope.currentPage = 1;
//					    // max size of the pagination bar
//					    $scope.maxPaginationSize = 10;
//					    // calculate total pages
//
//					    $scope.itemsPerPage = $scope.rowdata.selectedOption.id;
//					    $scope.updatePageIndexes = function() {
//					        var totalPages = Math.ceil($scope.list.length / $scope.maxPaginationSize);
//					        if (totalPages <= 10) {
//					            // less than 10 total pages so show all
//					            $scope.firstIndex = 1;
//					            $scope.lastIndex = totalPages;
//					        } else {
//					            // more than 10 total pages so calculate start and
//					            // end pages
//					            if ($scope.currentPage <= 6) {
//					                $scope.firstIndex = 1;
//					                $scope.lastIndex = 10;
//					            } else if ($scope.currentPage + 4 >= totalPages) {
//					                $scope.firstIndex = totalPages - 9;
//					                $scope.lastIndex = totalPages;
//					            } else {
//					                $scope.firstIndex = $scope.currentPage - 5;
//					                $scope.lastIndex = $scope.currentPage + 4;
//					            }
//					        }
//					        $scope.firstIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
//					        $scope.lastIndex = $scope.currentPage * $scope.itemsPerPage;
//					    };
//					    $scope.updatePageIndexes();
//s
//					    $scope.showList = function(index) {
//					        return ((index >= $scope.firstIndex) && (index < $scope.lastIndex));
//					    }
//					    

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
						
							$http({
								method : "POST",
								url : "/api/timetable",
								data : {timetableName: $scope.timetable.timetableName,
									intake:	$scope.timetable.intake,
									session: $scope.timetable.session},
								dataType : "json",
								headers : {
									'Content-Type' : 'application/json'
								}
							})
									.then(
											function(response) {
												getListTimetable();
												alertAddSucess();
												$scope.ResetForm_Add();
												if (close == true) {
													$("#myModal_them").modal(
															"hide");
												}
											},
											function(response) {
												if (response.status == 406) {
													alertFailMessage("Oops! Something went wrong, please check your input again.");
												}
											});
						}
					

					// update timetable
					$scope.callEditTiametable = function(data) {
						$scope.ResetForm_Edit();
						$http.get("/api/timetable/" + data.id).then(
								function(response) {
									$scope.timetable_edit = response.data;
									console.log($scope.timetable_edit);
								});
					}

					$scope.editTimetable = function() {

							$http({
								method : "PUT",
								url : "/api/timetable",
								data : JSON.stringify($scope.timetable_edit),
								dataType : "json",
							})
									.then(
											function(response) {
												$("myModal_sua").modal("hide");
												getListTimetable();
												alertEditSucess();
											},
											function(response) {
												if (response.status == 406) {
													alertFailMessage("Oops! Something went wrong, please check your input again.");
												}
											});
						
					}
					
					// reset form edit
			        $scope.ResetForm_Edit = function() {
			            $scope.timetable_edit = "";
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
					$scope.ResetForm_Add = function() {
						$scope.timetable.timetableName = "";
						$scope.timetable.intake ="";
						$scope.timetable.session ="";
//						$scope.active_add = true;
						//$scope.formAdd.specializationId_add.$setUntouched();
						$scope.formAdd.timetableId_add.$setUntouched();
						$scope.formAdd.intake.$setUntouched();
						$scope.formAdd.session.$setUntouched();
//						$scope.duplicateAlert = "";
//					}

				}
					
				});
//// Chu thich cua nut phan action
$(document).ready(function() {
	$('body').tooltip({
		selector : "[data-tooltip=tooltip]",
		container : "body"
	});
});