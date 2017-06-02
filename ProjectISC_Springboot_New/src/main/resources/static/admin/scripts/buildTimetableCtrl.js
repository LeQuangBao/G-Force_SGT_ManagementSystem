app.controller('buildTimetableCtrl', function($scope, $http, $filter, uiGridConstants) {
    $scope.classObj = {};
    $scope.iclass_edit = {};
    var alertDuration = 1800;
    var url_split = window.location.href.split("/");
    var idTimetable = url_split[url_split.length - 1];
    var listTime = [];
    var start_date = null;
    var end_date = null;
    $scope.currentStartDate = null;
    $scope.week = [];
    $scope.currentWeek = 0;
    var numberWeek = 0;
    
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
                start_date = new Date($scope.timetable.intake.startDate);
                end_date = new Date($scope.timetable.intake.endDate);
                numberWeek = (end_date - start_date) / 86400000 / 7;
                // console.log(numberWeek);
                for (var i = 0; i < numberWeek; i++) {
                    $scope.week.push(i);
                }
                // console.log($scope.week);
                $scope.currentStartDate = start_date;
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
        // $http.get("http://localhost:8080/api/sessiondetail1/" +
        // $scope.timetable.session.id)
        // .then(function(response) {
        // updateSession(response.data)
        //                    
        // });
    }

    function getListTime() {
        $http.get("http://localhost:8080/api/timeByTimetableId/" + idTimetable)
            .then(function(response) {
                listTime = response.data;
                updateTimetable();
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
    // check trung class
    function checkduplicate(t, listTime) {
        var check = true;
        listTime.forEach(function(time, index) {
            var d = t.date;
            var d2 = new Date(time.date);
            if (time.sessionDetail.id === t.sessionDetail.id) {
                if (d2.getTime() == d.getTime()) {
                    if (time.iclass.id === t.iclass.id) {
                        check = false;
                        alertDuplicate();
                    }
                }

            }
        })
        return check;
    }

    // Script cho nút add/remove
    $scope.isAdd = true;
    $scope.toggleAddAndRemove = function() {
        $scope.isAdd = !$scope.isAdd;
    };
    
    // Thêm/Xóa dữ liệu trên bảng
    $scope.cellClicked = function(date, sessionDetail) {
        var time_start = new Date(date + 'T' + sessionDetail.timeStart);
        var time_end = new Date(date + 'T' + sessionDetail.timeEnd);
        var t = {
            iclass: $scope.pickIClass,
            sessionDetail: {
                id: sessionDetail.id,
                timeStart: time_start,
                timeEnd: time_end
            },
            date: new Date(date)
        };
        if ($scope.isAdd) {
	        if (checkduplicate(t, listTime) == true) {
	            $http({
	                method: "POST",
	                url: "/api/time",
	                data: t,
	                dataType: "json",
	                headers: {
	                    'Content-Type': 'application/json'
	                }
	            }).then(function(response) {
	            	getListTime();
	            }, function(response) {});
	        }
	        else {
	        	
	        }
        } else {
	        for (var i = 0; i < listTime.length; i++) {
	            if (listTime[i].iclass.id == $scope.pickIClass.id && listTime[i].sessionDetail.id == sessionDetail.id) {
	                // kiểm tra trùng ngày
	            	var d = new Date(date);
	                var d2 = new Date(listTime[i].date);
	                if (d.getTime() == d2.getTime()) {
	                	var id = listTime[i].id;
	                	break;
	                }
	            }
	        }
	        $http({
	            method: "DELETE",
	            url: "/api/time/" + id,
	            dataType: "json",
	            headers: {
	                'Content-Type': 'application/json'
	            }
	        }).then(function(response) {
	        	getListTime();
	        }, function(response) {});
        }

//        getListTime();
//        updateTimetable();

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
        listTime.forEach(function(time, index) {
            var d = new Date(date);
            var d2 = new Date(time.date);
            if (time.sessionDetail.id === sessionDetail.id) {
                if (d.getTime() == d2.getTime()) {
                    // console.log(time.iclass);
                    result = result + "<strong>" + time.iclass.iclassName + "</strong>" + ", ";
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
    $scope.callWeek = function(i) {
        $scope.currentWeek = i;
        $scope.currentStartDate = new Date(start_date);
        $scope.currentStartDate.setDate($scope.currentStartDate.getDate() + (i * 7));
        // console.log(date);

        updateDay($scope.currentStartDate);
    }
    $scope.copyAllTimetable = function(currentStartDate) {
        var currentdate = currentStartDate;
        for (var i = $scope.currentWeek; i < numberWeek; i++) {
            currentdate.setDate(currentdate.getDate() + 7);
            $scope.copyTimetable(currentdate);
        }
    }
    $scope.copyTimetable = function(currentStartDate) {
        var result = [];
        var startDate = new Date(currentStartDate);
        var end_date = new Date(startDate);
        end_date.setDate(startDate.getDate() + 7);
        listTime.forEach(function(time, index) {
            var date = new Date(time.date);
            if (startDate <= date && date < end_date) {
                result.push(time);
            }
        });
        result.forEach(function(time, index) {
            time.sessionDetail.timeStart = new Date(time.date + 'T' + time.sessionDetail.timeStart);
            time.sessionDetail.timeEnd = new Date(time.date + 'T' + time.sessionDetail.timeEnd);
            var nextdate = new Date(time.date);
            nextdate.setDate(nextdate.getDate() + 7);
            time.date = nextdate;

        });
        $http({
            method: "POST",
            url: "/api/time/list",
            data: JSON.stringify(result),
            dataType: "json",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            getListTime();
        }, function(response) {});
    }


	  function alertDuplicate(message) {
			swal({
				title : "",
				text : "Class duplicated",
				type : "error",
				timer : alertDuration,
				showConfirmButton : false
			});
		}
 
});


// Chu thich cua nut phan action
$(document).ready(function() {
    $('body').tooltip({
        selector: "[data-tooltip=tooltip]",
        container: "body"
    });
});