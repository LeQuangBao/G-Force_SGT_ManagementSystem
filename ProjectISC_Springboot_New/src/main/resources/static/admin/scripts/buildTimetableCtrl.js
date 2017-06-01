app.controller('buildTimetableCtrl',
    function($scope, $http, $filter, uiGridConstants) {
        $scope.classObj = {};
        $scope.iclass_edit = {};
        var alertDuration = 1800;
        var url_split = window.location.href.split("/");
        var idTimetable = url_split[url_split.length - 1];
        var listTime = [];
        var start_date=null; 
        var end_date=null;
        $scope.week=[];
        // get timetable
        function getTimetableObj() {
            $scope.timetable = {};
            $http.get("http://localhost:8080/api/timetable/" + idTimetable)
                .then(function(response) {
                    $scope.timetable = response.data;
                    $http.get("http://localhost:8080/api/sessiondetail1/" + $scope.timetable.session.id)
                    .then(function(response) {
                        updateSession(response.data);
                    });
                    updateDay($scope.timetable.intake.startDate);
                    start_date=new Date($scope.timetable.intake.startDate);
                    end_date=new Date($scope.timetable.intake.endDate);
                    numberWeek=(end_date-start_date)/86400000/7;
                    //console.log(numberWeek);
                	for(var i=0;i<numberWeek;i++) {
                		$scope.week.push(i);
                	}
                	//console.log($scope.week);
                })
        }
        // get list subjects
        function getListSubjects() {
            $scope.listSubject = [];
            $http.get("http://localhost:8080/api/subject").then(
                function(response) {
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
            $http.get("http://localhost:8080/api/room").then(
                function(response) {
                    $scope.listRoom = response.data;
                })
        }
        // get list classes with timetable id
        function getListClasses() {
            $scope.listClass = [];
            var list_class = [];
            $http
                .get("http://localhost:8080/admin/api/class")
                .then(
                    function(response) {
                        list_class = response.data;
                        list_class
                            .forEach(function(iclass,
                                index) {
                                if (iclass.timetable.id == idTimetable) {
                                    $scope.listClass
                                        .push(iclass);
                                }
                            });
                    });
        }

        function getListSessionDetail() {
//            $http.get("http://localhost:8080/api/sessiondetail1/" + $scope.timetable.session.id)
//                .then(function(response) {
//                    updateSession(response.data)
//                    
//                });
        }
        
        function getListTime() {
        	$http.get("http://localhost:8080/api/time")
        	.then(function(response){
        		listTime = response.data;
        	});
        }
        
        getTimetableObj();
        getListSubjects();
        getListInstructors();
        getListRooms();
        getListClasses();
        getListSessionDetail();
        getListTime();

        // add class
        $scope.addClass = function(close) {
            $http({
                    method: "POST",
                    url: "api/class",
                    data: {
                        iclassName: $scope.iclassName,
                        instructor: $scope.instructor,
                        room: $scope.room,
                        subject: $scope.subject,
                        timetable: $scope.timetable
                    },
                    dataType: "json",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(
                    function(response) {
                        getListClasses();
                        alertAddSucess();
                        $scope.ResetForm_Add();
                        if (close == true) {
                            $("#myModal_them")
                                .modal("hide");
                        }
                    },
                    function(response) {
                        if (response.status == 406) {
                            alertFailMessage("Oops! Something went wrong, please check your input again.");
                        }
                    });
        }

        // get class object
        $scope.getClassObj = function(data) {
            $scope.ResetForm_Edit();
            $http.get("api/class/" + data.id).then(
                function(response) {
                    $scope.iclass_edit = response.data;
                });
            $scope.classObj = data;
        }
        // update class
        $scope.editClass = function() {
            $http({
                method: "PUT",
                url: "api/class",
                data: JSON.stringify($scope.iclass_edit),
                dataType: "json",
            }).then(function(response) {
                $("#myModal_sua").modal("hide");
                getListClasses();
                alertEditSucess();
            }, function(response) {
                if (response.status == 406) {
                    alertFailMessage("Oops! Something went wrong, please check your input again.");
                }
            });
        }

        // delete class
        $scope.deleteClass = function() {
            $http({
                method: "DELETE",
                url: "api/class/" + $scope.classObj.id,
                dataType: "json",
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
                title: "",
                text: "Delete successfully.",
                type: "success",
                timer: alertDuration,
                showConfirmButton: false
            });
        }

        function alertEditSucess() {
            swal({
                title: "",
                text: "Edit successfully.",
                type: "success",
                timer: alertDuration,
                showConfirmButton: false
            });
        }

        function alertAddSucess() {
            swal({
                title: "",
                text: "Add successfully.",
                type: "success",
                timer: alertDuration,
                showConfirmButton: false
            });
        }

        function alertFail() {
            swal({
                title: "",
                text: "Opps! Something went wrong, please check your input again.",
                type: "error",
                timer: alertDuration,
                showConfirmButton: false
            })
            setTimeout(function() {
                location.reload();
            }, alertDuration);
        }

        function alertFailMessage(message) {
            swal({
                title: "",
                text: message,
                type: "error",
                timer: alertDuration,
                showConfirmButton: false
            })
        }

        function alertMessage(message) {
            swal({
                title: message,
                timer: alertDuration,
                showConfirmButton: false
            })
        }
        // reset form add
        $scope.ResetForm_Add = function() {
            $scope.iclassName = "";
            $scope.subject = "";
            $scope.instructor = "";
            $scope.room = "";
        }
        // reset form edit
        $scope.ResetForm_Edit = function() {
            $scope.iclass_edit = "";
        }

        $scope.myTimetable = {
            date: ["", $scope.Mon, $scope.Tue, $scope.Wed,
                $scope.Thu, $scope.Fri, $scope.Sat, $scope.Sun
            ],
            session: $scope.listCurrentSession
        };

        $scope.cellClicked = function(date, sessionDetail) {
        	
        	var time_start=new Date(date+'T'+sessionDetail.timeStart);
        	var time_end=new Date(date+'T'+sessionDetail.timeEnd);
//            var t = {
//                iclass: $scope.pickIClass,
//                sessionDetail: {id:sessionDetail.id,timeStart:time_start,timeEnd:time_end},
//                date: new Date(date)
//            };
//            $http({
//                method: "POST",
//                url: "/api/time",
//                data: t,
//                dataType: "json",
//                headers: {
//                    'Content-Type': 'application/json'
//                }
//            }).then(function(response) {
//            	updateTimetable();
//            }, function(response) {});
            
            // gọi 2 lần mới thực sự cập nhật được
            
//            console.log($scope.pickIClass.id);
//            console.log(sessionDetail.id);
//            console.log(date);
           
            //console.log(listTime);

            // xóa lớp trên thời khóa biểu
            //$scope.time=1;
        	//$scope.time={};
            for (var i = 0; i < listTime.length; i++) {
                if (listTime[i].iclass.id == $scope.pickIClass.id &&listTime[i].sessionDetail.id==sessionDetail.id) {
                    //$scope.time = $scope.listTime[i].id;
                	var id=listTime[i].id;
                    break;
                }
            }
           $http({
              method: "DELETE",
              url: "/api/time/"+id,
              dataType: "json",
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then(function(response) {
          	updateTimetable();
          }, function(response) {});
           
           	getListTime();
            getListTime();
            
        }

        function updateTimetable() {
            $scope.myTimetable = {
                date: ["", $scope.Mon, $scope.Tue, $scope.Wed,
                    $scope.Thu, $scope.Fri, $scope.Sat,
                    $scope.Sun
                ],
                session: $scope.listCurrentSession
            };
        }

        function updateTimetable(listSevenDay, listSession) {
            updateDay(listSevenDay);
            updateSession(listSession);
            updateTimetable();
        }

        function updateDay(firstDay) {
        	var d = new Date(firstDay);
            $scope.Mon = new Date(d);
            d.setDate(d.getDate() + 1)
            $scope.Tue = new Date(d);
            d.setDate(d.getDate() + 1)
            $scope.Wed = new Date(d);
            d.setDate(d.getDate() + 1)
            $scope.Thu = new Date(d);
            d.setDate(d.getDate() + 1)
            $scope.Fri = new Date(d);
            d.setDate(d.getDate() + 1)
            $scope.Sat = new Date(d);
            d.setDate(d.getDate() + 1)
            $scope.Sun = new Date(d);
            updateTimetable();
        }

        
        $scope.getCellValue = function(date, sessionDetail) {
        	var result = "";
        	listTime.forEach(function (time, index){
        		var d = new Date(date);
        		var d2 = new Date(time.date);
        		if (time.sessionDetail.id === sessionDetail.id) {        				
        			if (d.getTime() == d2.getTime()) {
        				//console.log(time.iclass);
        				result = result +  time.iclass.iclassName + ", ";
        			}
        		}
        	})
        	return result.substring(0, result.length - 2);
        }
        
        function updateSession(listSession) {
            $scope.listCurrentSession = listSession;
            updateTimetable();
        }

        function updateTimetable() {
            $scope.myTimetable = {
                date: ["", $scope.Mon, $scope.Tue, $scope.Wed,
                    $scope.Thu, $scope.Fri, $scope.Sat,
                    $scope.Sun
                ],
                session: $scope.listCurrentSession
            };
        }
        $scope.callWeek=function(i){
        	var date=new Date(start_date);
        	date.setDate(date.getDate()+(i*7));
        	//console.log(date);
        	
        	updateDay(date);
        }
        
        /*function getWeek(){
        	var numberWeek=0;
        	var start=new Date(start_date);
        	var end=new Date();
        	start.setDate(start_date.getDate());
        	end.setDate(end_date.getDate());
        	console.log(start);
        	numberWeek=(end_date.getMonth()-start_date.getMonth())*4;
        	for(var i=0;i<numberWeek;i++) {
        		$scope.week.push(i);
        		}
        	console.log($scope.week);
        }
        getWeek();*/
    });
// Chu thich cua nut phan action
$(document).ready(function() {
    $('body').tooltip({
        selector: "[data-tooltip=tooltip]",
        container: "body"
    });
});