app.controller('specializationCtrl',function($scope, $http, $filter, uiGridConstants) {
//
//					function configMainTable() {
//						// data get from getListSpecialiation()
//						$scope.table_specialization = {
//
//							paginationPageSizes : [ 25, 50, 75 ],
//							paginationPageSize : 25,
//							columnDefs : [ {
//								name : 'ID'
//							}, {
//								name : 'Name'
//							}, {
//								name : 'Action'
//							} ]
//						};
//					}
//					configMainTable();
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
					var deleteSpecialization = "";
					var alertDuration = 1800;

					// get list specializations
					function getListSpecializations() {
						$scope.list = [];
						$http
								.get("http://localhost:8080/api/specialization")
								.then(
										function(response) {
											$scope.list = response.data;
//											$scope.table_specialization.data = response.data;
											$scope.gridOptions.data = response.data;

										})
					}
					getListSpecializations();
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
									name : 'specializationId',
									displayName : 'Specialization Id'
								},
								{
									name : 'specializationName',
									displayName : 'specialization Name'
								},
								{
									name : 'active', displayName:'Status', 
									visible : true, 
									cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.active == 0 ? "Inactive" : "Active"}}</div>',
									filter: {
					    		          type: uiGridConstants.filter.SELECT,
					    		          selectOptions: [
					    		              { value: 'true', label: 'Active' },
					    		              { value: 'false', label: 'Inactive' }
					    		          ]
					    		      }
								},
								{
									name : 'Action',
									enableSorting : false,
									enableFiltering : false,
									cellTemplate :'<button data-toggle="modal" class="btn btn-primary btn-sm" data-target="#myModal_editSubject" data-backdrop="static"ng-click="grid.appScope.callEditRelevantSubject(row.entity)" data-tooltip ="tooltip" title="Add course(s)"><span class="glyphicon glyphicon-th-list"></button>'
										+'<button class="btn btn-primary btn-sm" ng-click="grid.appScope.callEditSpecialization(row.entity)" data-tooltip ="tooltip" title="Edit"data-toggle="modal" data-target="#myModal_sua"><span class="glyphicon glyphicon-edit"></span></button>'
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
					// $scope.sortType = 'specializationName';
					$scope.filterTable = '';

					  $scope.sortType = 'schoolName';
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
					    
					// add specialization
					$scope.addSpecialization = function(close) {
						if (id_duplicate_Add(document
								.getElementById("specializationId_add").value)) {
							var specializationId = document
									.getElementById("specializationId_add").value;
							var specializationName = document
									.getElementById("specializationName_add").value;
							var activeElement = $scope.active_add;
							$http({
								method : "POST",
								url : "/api/specialization",
								data : {
									specializationId : specializationId,
									specializationName : specializationName,
									active : activeElement
								},
								dataType : "json",
								headers : {
									'Content-Type' : 'application/json'
								}
							})
									.then(
											function(response) {
												getListSpecializations();
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
					}

					// update specialization
					$scope.callEditSpecialization = function(data) {
						$http.get("/api/specialization/" + data.id).then(
								function(response) {
									$scope.info = response.data;
								});
						SpecID = data.specializationId;
						$scope.duplicateAlert = "";
					}

					$scope.editSpecialization = function() {
						if (id_duplicate_Edit($scope.info.specializationId)) {
							$http({
								method : "PUT",
								url : "/api/specialization",
								data : JSON.stringify($scope.info),
								dataType : "json",
							})
									.then(
											function(response) {
												$("#myModal_sua").modal("hide");
												getListSpecializations();
												alertEditSucess();
											},
											function(response) {
												if (response.status == 406) {
													alertFailMessage("Oops! Something went wrong, please check your input again.");
												}
											});
						}
					}

					// update relevant subjects
					$scope.currentSubjects = [];
					$scope.filterSubject = '';
					$scope.callEditRelevantSubject = function(data) {
						$scope.info_editRelevantSubject = data;
						getAllSubjects();
						$scope.currentSubjects = [];
						data.subjects.forEach(function(item, index) {
							$scope.currentSubjects.push(item);
						});
					}

					function getAllSubjects() {
						$http.get("/api/subject").then(function(response) {
							$scope.listSubject = response.data;
						});
					}

					$scope.addSubject = function(subject) {
						$scope.currentSubjects.push(subject);
					}

					$scope.deleteSubject = function(subject) {
						var index = $scope.currentSubjects.indexOf(subject);
						$scope.currentSubjects.splice(index, 1);
					}

					$scope.checkDuplicateSubject = function(id) {
						var flag = false;
						angular.forEach($scope.currentSubjects, function(value,
								key) {
							if (value.id === id) {
								flag = true;
							}
						});
						return flag;
					}

					$scope.editRelevantSubject = function() {
						$scope.info_editRelevantSubject.subjects = [];
						$scope.currentSubjects
								.forEach(function(item, index) {
									$scope.info_editRelevantSubject.subjects
											.push(item);
								});
						$http(
								{
									method : "PUT",
									url : "/api/specialization",
									data : JSON
											.stringify($scope.info_editRelevantSubject),
									contentType : 'application/json; charset=UTF-8',
									dataType : "json",
								})
								.then(
										function(response) {
											// alertEditSucess();
										},
										function(response) {
											if (response.status == 406) {
												alertFailMessage("Oops! Something went wrong, please check your input again.");
											}
										});
					}
					// delete specialization
					$scope.callDeleteSpecialization = function(data) {
						deleteSpecialization = data;
					}
					$scope.deleteSpecialization = function() {
						$http(
								{
									method : "DELETE",
									url : "/api/specialization/"
											+ deleteSpecialization.id,
									dataType : "json",
								}).then(function(result) {
							if (result.status == 202) {
								$("#myModal_xoa").modal("hide");
								getListSpecializations();
								alertDeleteSucess();
							}
						}, function(response) {
							alertFail();
						});
					}

					// Sort and filter
					$scope.sortType = 'specializationName';
					$scope.sortReverse = false;
					$scope.searchName = '';

					// Kiểm tra trùng ID
					function id_duplicate_Add(id) {
						var flag = true;
						$scope.list.forEach(function(item, index) {
							if (item.specializationId === id) {
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
								if (item.specializationId === id) {
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
						$scope.specializationId_add = "";
						$scope.specializationName_add = "";
						$scope.active_add = true;
						$scope.formAdd.specializationId_add.$setUntouched();
						$scope.formAdd.specializationName_add.$setUntouched();
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