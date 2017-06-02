app.controller('reportInstructorCtrl', function($scope, $http, $filter, $resource, uiGridConstants) {
    var alertDuration = 1800;
    var idTimetable = 1;
    var listTime = [];
    var start_date = null;
    var end_date = null;
    $scope.currentStartDate = null;
    $scope.week = [];
    $scope.currentWeek = 0;
    var numberWeek = 0;
    function GetListClass() {
        $scope.listClass = [];
       

    }
    
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



    $scope.myTimetable = {
        date: ["", $scope.Mon, $scope.Tue, $scope.Wed,
            $scope.Thu, $scope.Fri, $scope.Sat, $scope.Sun
        ],
        session: $scope.listCurrentSession
    };


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
                    result = result + time.iclass.iclassName + ", ";
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

});
// Chu thich cua nut phan action
$(document).ready(function() {
    $('body').tooltip({
        selector: "[data-tooltip=tooltip]",
        container: "body"
    });
});