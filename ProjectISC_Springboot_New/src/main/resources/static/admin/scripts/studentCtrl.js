app
		.controller(
				'studentCtrl',
				function($scope, $http, $filter, $resource) {
					$scope.rowdata = {
						availableOptions : [ {
							id : '15',
							name : '15 rows'
						}, {
							id : '30',
							name : '30 rows'
						}, {
							id : '50',
							name : '50 rows'
						}, {
							id : '100',
							name : '100 rows'
						} ],
						selectedOption : {
							id : '15',
							name : '15 rows'
						}
					};
					$scope.ChangeRow = function(index) {
						$scope.itemsPerPage = index;
						$scope.updatePageIndexes();
					}
					var alertDuration = 1800;
					// Lấy danh sách Student
					function GetListStudent() {
						$scope.list = [];
						var Student = $resource('http://localhost:8080/admin/api/Student');
						Student.query().$promise.then(function(listStudent) {
							$scope.list = listStudent;
							console.log($scope.list);

						});

					}
					// lấy danh sách intake
					function GetListIntake() {
						$scope.list_intake = [];
						var Intake = $resource('http://localhost:8080/admin/api/StudentIntake');
						Intake.query().$promise.then(function(listintake) {

							$scope.list_intake = listintake;

						});

					}
					// lấy danh sách specialization
					function GetListspecialization() {
						$scope.list_specialization = [];
						var Specialization = $resource('http://localhost:8080/admin/api/StudentSpecialization');
						Specialization.query().$promise.then(function(
								listspecialization) {

							$scope.list_specialization = listspecialization;

						});

					}
					// lấy danh sách school
					function GetListschool() {
						$scope.list_school = [];
						var School = $resource('http://localhost:8080/admin/api/StudentSchool');
						School.query().$promise.then(function(listschool) {

							$scope.list_school = listschool;

						});

					}
					// lấy danh sách entrance_exam
					function GetListEnchance_Exam() {
						$scope.list_enchance_exam = [];
						var EnchanceExam = $resource('http://localhost:8080/admin/api/StudentEntranceExam');
						EnchanceExam.query().$promise.then(function(
								listenchanceexam) {

							$scope.list_enchance_exam = listenchanceexam;

						});

					}

					GetListStudent();
					GetListIntake();
					GetListspecialization();
					GetListschool();
					GetListEnchance_Exam();

					$scope.sortType = 'username';
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

					// upload hình ảnh
					// $scope.stepsModel = [];

					$scope.getImage = function(element) {
						photofile = element.files[0];
						var reader = new FileReader();
						reader.onload = function(e) {
							$scope.$apply(function() {
								$scope.prev_img = e.target.result;
							});
						};
						reader.readAsDataURL(photofile);
						$scope.image = photofile.name;
					};
					$scope.getImage_Edit = function(element) {
						photofile = element.files[0];
						var reader = new FileReader();
						reader.onload = function(e) {
							$scope.$apply(function() {
								$scope.prev_img_edit = e.target.result;
							});
						};
						reader.readAsDataURL(photofile);
						$scope.image = photofile.name;
					};

					// upload file
					function uploadFile() {
						$
								.ajax({
									type : "POST",
									url : "/admin/student/uploadFile",
									type : "POST",
									data : new FormData(
											$("#fileUploadForm")[0][8]),
									enctype : 'multipart/form-data',
									processData : false,
									contentType : false,
									cache : false,
									success : function() {
										// Handle upload success
										$("#upload-file-message").text(
												"File succesfully uploaded");
									},
									error : function() {
										// Handle upload error
										$("#upload-file-message")
												.text(
														"File not uploaded (perhaps it's too much big)");
									}
								});
					}

					// thêm student
					$scope.them = function() {
						$http({
							method : "POST",
							url : "/admin/api/Student",
							data : $scope.student
						}).then(function mySucces(response) {
							GetListStudent();
							addAlert();
						});
					};
					// sửa student
					$scope.edit = function edit() {

						$http({
							method : "PUT",
							url : "/admin/api/Student",
							data : $scope.list_temp_inf_edit
						}).then(function mySucces(response) {
							$('#editModal').modal('hide');
							getAllEntranceExam();
							editAlert();
						});
					}
					// load chi tiet student
					scope.chitiet = function(data) {
						$scope.chitiet = data;
					}
					// reset password
					$scope.Reset = function(data) {
						$http({
							method : "PUT",
							url : "/admin/api/Student_Reset",
							data : $scope.list_temp_inf_reset
						}).then(function mySucces(response) {
							$('#editModal').modal('hide');
							getAllEntranceExam();
							editAlert();
						});
					}
					// xóa student
					$scope.deleteStudent = function xoa() {

						$http({
							method : "DELETE",
							url : "/admin/api/student/" + $scope.list_temp_inf_delete.id

						}).then(function mySucces(response) {
							$('#myModal_xoa').modal('hide');
							getAllEntranceExam();
							deleteAlert();
						});
					}
					// lấy dữ liệu để sửa
					// array did filter
					$scope.list_temp_inf_edit = [];
					$scope.sua = function(data) {
						$scope.list_temp_inf_edit = data;
					};
					// lấy dữ liệu để xóa
					$scope.list_temp_inf_delete = [];
					$scope.xoa = function(data) {
						$scope.list_temp_inf_delete=data;
					}
					// lấy dữ liệu để reset
					$scope.list_temp_inf_reset = [];
					$scope.reset = function(data) {
						$scope.list_temp_inf_reset=data;
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
				})
