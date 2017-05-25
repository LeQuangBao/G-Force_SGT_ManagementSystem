app.controller('buildTimetableCtrl',function($scope, $http, $filter, uiGridConstants) {
	var classObj=null;
	$scope.iclass_edit={};
	var alertDuration = 1800;
	var url_split=window.location.href.split("/");
	var idTimetable=url_split[url_split.length-1];
					//get timetable
					function getTimetableObj() {
						$scope.timetable = {};
						$http.get("http://localhost:8080/api/timetable/"+idTimetable)
								.then(function(response) {
											$scope.timetable = response.data;
										})
					}
					// get list subjects
					function getListSubjects() {
						$scope.listSubject = [];
						$http.get("http://localhost:8080/api/subject")
								.then(function(response) {
											$scope.listSubject = response.data;
										})
					}
					// get list instructors
					function getListInstructors() {
						$scope.listInstructor = [];
						$http.get("http://localhost:8080/admin/api/instructor")
								.then(function(response) {
											$scope.listInstructor = response.data;
										})
					}
					// get list rooms
					function getListRooms() {
						$scope.listRoom = [];
						$http.get("http://localhost:8080/api/room")
								.then(function(response) {
											$scope.listRoom = response.data;
										})
					}
					// get list classes with timetable id
					function getListClasses() {
						$scope.listClass = [];
						var list_class=[];
						$http.get("http://localhost:8080/admin/api/class")
								.then(function(response) {
									list_class= response.data;
									list_class.forEach(function(iclass, index) {
										if(iclass.timetable.id==idTimetable){
											$scope.listClass.push(iclass);
										}
								    });	
								});							
					}
					getTimetableObj();
					getListSubjects();
					getListInstructors();
					getListRooms();
					getListClasses();
					   
					// add class
					$scope.addClass = function(close) {
							$http({
								method : "POST",
								url : "api/class",
								data : {
									iclassName:$scope.iclassName,
									instructor:$scope.instructor,
									room:$scope.room,
									subject:$scope.subject,
									timetable:$scope.timetable
								},
								dataType : "json",
								headers : {
									'Content-Type' : 'application/json'
								}
							}).then(function(response) {
												getListClasses();
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
					
					//get class object
					$scope.getClassObj = function(data) {
						$http.get("api/class/" + data.id).then(
								function(response) {
									$scope.className_edit = response.data;
									$scope.subject_edit=response.data.subject;
									$scope.instructor_edit=response.data.instructor;
									$scope.room_edit=response.data.room;
									console.log(response.data.subject);
								});
						//$scope.subject_edit=$scope.iclass_edit.subject.subjectName;
						classObj = data;
					}
					// update class
					$scope.editClass = function() {
							$http({
								method : "PUT",
								url : "api/class",
								data : JSON.stringify($scope.iclass_edit),
								dataType : "json",
							})
									.then(
											function(response) {
												$("#myModal_sua").modal("hide");
												getListClasses();
												alertEditSucess();
											},
											function(response) {
												if (response.status == 406) {
													alertFailMessage("Oops! Something went wrong, please check your input again.");
												}
											});
						}

					// delete class
					$scope.deleteClass = function() {
						$http({
									method : "DELETE",
									url : "api/class/"
											+ classObj.id,
									dataType : "json",
								}).then(function(result) {
							if (result.status == 202) {
								getListClasses();
								$("#myModal_xoa").modal("hide");
								alertDeleteSucess();
							}
						}, function(response) {
							alertFail();
						});
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
						$scope.iclassName = "";
						$scope.subject = "";
						$scope.instructor = "";
						$scope.room= "";
					}

				});
// Chu thich cua nut phan action
$(document).ready(function() {
	$('body').tooltip({
		selector : "[data-tooltip=tooltip]",
		container : "body"
	});
});