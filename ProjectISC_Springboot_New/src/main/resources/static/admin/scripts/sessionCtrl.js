app
		.controller(
				'SessionCtrl',
				function($scope, $http, $filter) {
					//
					// function configMainTable() {
					// // data get from getListSpecialiation()
					// $scope.table_session = {
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
					$scope.rowdata = {
						availableOptions : [ {
							id : '15',
							name : '15'
						}, {
							id : '30',
							name : '30'
						}, {
							id : '50',
							name : '50'
						}, {
							id : '100',
							name : '100'
						} ],
						selectedOption : {
							id : '15',
							name : '15'
						}
					};
					$scope.ChangeRow = function(index) {
						$scope.itemsPerPage = index;
						$scope.updatePageIndexes();
					}
					var deleteSession = "";
					var alertDuration = 1800;

					// get list sessions
					function getListSessions() {
						$scope.list = [];
						$http.get("http://localhost:8080/api/session").then(
								function(response) {
									$scope.list = response.data;
									// $scope.table_session.data =
									// response.data;
									$scope.gridOptions.data = response.data;

								})
					}
					// get list session detail by session id
					$scope.list_sessiondetail=[];
					function getListSessionsDetail1(id) {
						$scope.list = [];
						$http.get("http://localhost:8080//api/sessiondetail1/"+id).then(
								function(response) {
									$scope.list_sessiondetail_1 = response.data;
									// $scope.table_session.data =
									// response.data;
									// .gridOptions.data = response.data;

								})
					}
					
					// add session detail
					$scope.addSessionDetail = function() {
						var session = 
					        {
					            "id": $scope.info.id,
					            "sessionName": $scope.info.sessionName
					        };
						console.log(session);
						var start_time=$scope.timestart;
						var end_time=$scope.timeend;
						console.log(start_time);
						console.log(end_time);
						var sessiondetail=
							{
							"timeStart": start_time,
							"timeend": end_time,
							"session": session
							};
						console.log(sessiondetail);
							$http({
								method : "POST",
								url : "/api/sessiondetail1",
								data : sessiondetail,
								dataType : "json",
								headers : {
									'Content-Type' : 'application/json'
								}
							})
									.then(
											function(response) {
												//getListSessionsDetail1($scope.info.id);
												alertAddSucess();
//												$scope.ResetForm_Add();
//												if (close == true) {
//													$("#myModal_them").modal(
//															"hide");
//												}
											},
											function(response) {
												if (response.status == 406) {
													alertFailMessage("Oops! Something went wrong, please check your input again.");
												}
											});
////						
					}

					getListSessions();
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
									name : 'id',
									displayName : 'ID'
								},
								{
									name : 'sessionName',
									displayName : 'Name'
								},
								{
									name : 'Action',
									enableSorting : false,
									enableFiltering : false,
									cellTemplate : '<button data-toggle="modal" class="btn btn-primary btn-sm" data-target="#myModal_editSubject" data-backdrop="static"ng-click="grid.appScope.callEditRelevantSubject(row.entity)" data-tooltip ="tooltip" title="Add session detail(s)"><span class="glyphicon glyphicon-th-list"></button>'
											+ '<button class="btn btn-primary btn-sm" ng-click="grid.appScope.callEditSession(row.entity)" data-tooltip ="tooltip" title="Edit"data-toggle="modal" data-target="#myModal_sua"><span class="glyphicon glyphicon-edit"></span></button>'
											+ '<button ng-click="grid.appScope.callDeleteSession(row.entity)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete" data-target="#myModal_xoa"><span class="glyphicon glyphicon-remove"></span></button>'
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
					// $scope.sortType = 'sessionName';
					$scope.filterTable = '';

					$scope.sortType = 'sessionName';
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
						case 'sessionName':
							formatted = 'session name';
							break;
						// case 'lastName':
						// formatted = 'last name';
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
							return capitalizeFirstLetter((makeReadableLabel(baseSortType))
									+ ' ' + order);
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
						var totalPages = Math.ceil($scope.list.length
								/ $scope.maxPaginationSize);
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
						$scope.firstIndex = ($scope.currentPage - 1)
								* $scope.itemsPerPage;
						$scope.lastIndex = $scope.currentPage
								* $scope.itemsPerPage;
					};
					$scope.updatePageIndexes();

					$scope.showList = function(index) {
						return ((index >= $scope.firstIndex) && (index < $scope.lastIndex));
					}

					// add session
					$scope.addSession = function(close) {
							var sessionName = document
									.getElementById("SessionName_add").value;

							// var activeElement = $scope.active_add;
							$http({
								method : "POST",
								url : "/api/session",
								data : {
									// sessionId : sessionId,
									sessionName : sessionName,
									// active : activeElement
								},
								dataType : "json",
								headers : {
									'Content-Type' : 'application/json'
								}
							})
									.then(
											function(response) {
												getListSessions();
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
//						
					}

					// update session
					$scope.callEditSession = function(data) {
						$http.get("/api/session/" + data.id).then(
								function(response) {
									$scope.info = response.data;
								});
						$http.get("http://localhost:8080//api/sessiondetail1/"+data.id).then(
								function(response) {
									$scope.list_sessiondetail_1 = response.data;
									// $scope.table_session.data =
									// response.data;
									// .gridOptions.data = response.data;

								})
						// SpecID = data.sessionId;
						$scope.duplicateAlert = "";
					}

					$scope.editSession = function() {
							$http({
								method : "PUT",
								url : "/api/session",
								data : JSON.stringify($scope.info),
								dataType : "json",
							})
									.then(
											function(response) {
												$("#myModal_sua").modal("hide");
												getListSessions();
												alertEditSucess();
											},
											function(response) {
												if (response.status == 406) {
													alertFailMessage("Oops! Something went wrong, please check your input again.");
												}
											});s
// //}
					}
					$scope.callDeleteSessionDetail = function(data) {
						deleteSessionDetail = data;
					}
					$scope.deteleSessionDetail=function()
					{
						
						$http({
							method : "DELETE",
							url : "/api/sessiondetail/" + deleteSessionDetail.id,
							dataType : "json",
						}).then(function(result) {
							if (result.status == 202) {
								$("#myModal_xoachitiet").modal("hide");
								getListSessionsDetail1($scope.info.id);
								alertDeleteSucess();
							}
						}, function(response) {
							//alertFail();
						});
					}
					// update relevant subjects
// $scope.currentSubjects = [];
// $scope.filterSubject = '';
// $scope.callEditRelevantSubject = function(data) {
// $scope.info_editRelevantSubject = data;
// getAllSubjects();
// $scope.currentSubjects = [];
// data.subjects.forEach(function(item, index) {
// $scope.currentSubjects.push(item);
// });
// }

					// function getAllSubjects() {
					// $http.get("/api/subject").then(function(response) {
					// $scope.listSubject = response.data;
					// });
					// }

					// $scope.addSubject = function(subject) {
					// $scope.currentSubjects.push(subject);
					// }
					//
					// $scope.deleteSubject = function(subject) {
					// var index = $scope.currentSubjects.indexOf(subject);
					// $scope.currentSubjects.splice(index, 1);
					// }
					//
					// $scope.checkDuplicateSubject = function(id) {
					// var flag = false;
					// angular.forEach($scope.currentSubjects, function(value,
					// key) {
					// if (value.id === id) {
					// flag = true;
					// }
					// });
					// return flag;
					// }
					//
					// $scope.editRelevantSubject = function() {
					// $scope.info_editRelevantSubject.subjects = [];
					// $scope.currentSubjects
					// .forEach(function(item, index) {
					// $scope.info_editRelevantSubject.subjects
					// .push(item);
					// });
					// $http(
					// {
					// method : "PUT",
					// url : "/api/session",
					// data : JSON
					// .stringify($scope.info_editRelevantSubject),
					// contentType : 'application/json; charset=UTF-8',
					// dataType : "json",
					// })
					// .then(
					// function(response) {
					// // alertEditSucess();
					// },
					// function(response) {
					// if (response.status == 406) {
					// alertFailMessage("Oops! Something went wrong, please
					// check your input again.");
					// }
					// });
					// }
					// delete session
					$scope.callDeleteSession = function(data) {
						deleteSession = data;
					}
					$scope.deleteSession = function() {
						$http({
							method : "DELETE",
							url : "/api/session/" + deleteSession.id,
							dataType : "json",
						}).then(function(result) {
							if (result.status == 202) {
								$("#myModal_xoa").modal("hide");
								getListSessions();
								alertDeleteSucess();
							}
						}, function(response) {
							alertFail();
						});
					}

					// Sort and filter
					$scope.sortType = 'sessionName';
					$scope.sortReverse = false;
					$scope.searchName = '';

					// Kiểm tra trùng ID
					function id_duplicate_Add(id) {
						var flag = true;
						$scope.list.forEach(function(item, index) {
							if (item.sessionId === id) {
								$scope.duplicateAlert = "Duplicate ID";
								flag = false;
							}
						});
						return flag;
					}
					var SpecID = "";

					function id_duplicate_Edit(id) {
						var flag = true;
						$scope.list.forEach(function(item, index) {
							if (id != SpecID) {
								if (item.sessionId === id) {
									$scope.duplicateAlert = "Duplicate ID";
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
						 // $scope.SessionId_add = "";
						 $scope.SessionName_add = "";
						 // $scope.formAdd.SessionId_add.$setUntouched();
						 $scope.formAdd.SessionName_add.$setUntouched();
						 $scope.duplicateAlert = "";
					}
					// reset form edit
				

				});
// Chu thich cua nut phan action
$(document).ready(function() {
	$('body').tooltip({
		selector : "[data-tooltip=tooltip]",
		container : "body"
	});
});