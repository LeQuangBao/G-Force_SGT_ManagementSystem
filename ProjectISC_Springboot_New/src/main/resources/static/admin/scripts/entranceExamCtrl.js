app
		.controller(
				'entranceExamCtrl',
				function($scope, $http, $filter, $resource) {
					$scope.rowdata = {
						     availableOptions: [
						       {id: '15', name: '15'},
						       {id: '30', name: '30'},
						       {id: '50', name: '50'},
						       {id: '100', name: '100'}
						     ],
						     selectedOption: {id: '15', name: '15 rows'}
						    };
					$scope.ChangeRow = function(index) {
						$scope.itemsPerPage = index;
						$scope.updatePageIndexes();
					}
					var alertDuration = 1800;
					// Lấy danh sách
					function GetListIntake() {
						$scope.list = [];
						var Intake = $resource('/admin/api/entrance-exam');
						$scope.list = Intake.query();
						$http.get('/admin/api/entrance-exam').then(
								function(response) {
									$scope.list = response.data;
								});
						$http.get("/api/intake").then(function(response) {
							$scope.listIntake = response.data;
						});

					}
					GetListIntake();

					$scope.sortType = 'entranceExamName';
					$scope.filterTable = '';
					// Tìm kiếm theo tên
					$scope.filterSort = function(element) {
						if ($filter('filter')([ element ], $scope.filterTable).length > 0) {
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

					$scope.showList = function(intake, index) {
						var filter = intake;
						filter.startDate = $filter('date')(intake.startDate,
								"MM/dd/yyyy");
						filter.endDate = $filter('date')(intake.endDate,
								"MM/dd/yyyy");
						return (($scope.filterSort(filter) == 1)
								&& (index >= $scope.firstIndex) && (index < $scope.lastIndex));
					}

					$scope.getData = function getData(object) {
						if (object == 0) {
							$scope.exam = {
								"entranceExamName" : "",
								"intake" : "",
								"startDate" : "",
								"description" : ""

							}

						} else {
							$scope.exam = {
								"id" : object.id,
								"entranceExamName" : object.entranceExamName,
								"startDate" : new Date(object.startDate),
								"description" : object.description
							}
							for (i = 0; i < $scope.listIntake.length; i++) {
								if ($scope.listIntake[i].intakeId == object.intake.intakeId) {
									$scope.exam.intake = $scope.listIntake[i];
									break;
								}
							}
						}
						delInvalid();

					}
					$scope.add = function add() {

						$http({
							method : "POST",
							url : "/admin/api/entrance-exam",
							data : $scope.exam
						}).then(function mySucces(response) {
							GetListIntake();
							addAlert();
						});
					}
					$scope.edit = function edit() {

						$http({
							method : "PUT",
							url : "/admin/api/entrance-exam",
							data : $scope.exam
						}).then(function mySucces(response) {
							$('#editModal').modal('hide');
							GetListIntake();
							editAlert();
						});
					}
					$scope.del = function del() {

						$http({
							method : "DELETE",
							url : "/admin/api/entrance-exam/" + $scope.exam.id

						}).then(function mySucces(response) {
							$('#deleteModal').modal('hide');
							GetListIntake();
							deleteAlert();
						});
					}
					
					function delInvalid(){
						$scope.addForm.$setUntouched();
						$scope.editForm.$setUntouched();
					}

					function deleteAlert() {
						swal({
							title : "",
							text : "Delete Successfully",
							type : "success",
							timer : 2000,
							showConfirmButton : false
						});
					}
					function editAlert() {
						swal({
							title : "",
							text : "Edit Successfully",
							type : "success",
							timer : 2000,
							showConfirmButton : false
						});
					}
					function addAlert() {
						swal({
							title : "",
							text : "Add Successfully",
							type : "success",
							timer : 2000,
							showConfirmButton : false
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