app.controller('reportIntakeCtrl', function($scope, $http, $filter, $resource, uiGridConstants) {
    var alertDuration = 1800;
    var listTime = [];
    var start_date = null;
    var end_date = null;
    $scope.currentStartDate = null;
    $scope.week = [];
    $scope.currentWeek = 0;
    var tuan=0;
    var numberWeek = 0;
    var idTimetable = 1;
    var id_iclass=1;
    
    // initialize
    getTimetableObj();
    getListSubjects();
    getListInstructors();
    getListRooms();
    getListClass();
    getListSessionDetail();
    getListTime();
    getListIntake();
    
    function getListIntake() {
    	$scope.listIntake = [];
    	$http.get("http://localhost:8080/api/intake")
    	.then(function(response){
    		$scope.listIntake = response.data;
    	})
    }
    
    // get all timetable
    
    function getListTimetable() {
    	$scope.listTimetable = [];
    	$http.get("http://localhost:8080/api/timetable")
    	.then(function(response){
    		$scope.listTimetable = response.data;
    	})
    }
    
    // get timetable
   
    function getTimetableObj() {
        $scope.timetable = {};
        $http.get("http://localhost:8080/api/timetable/" + idTimetable)
            .then(function(response) {
                $scope.timetable = response.data;
                timetable1=response.data;
                $http.get("http://localhost:8080/api/sessiondetail1/" + $scope.timetable.session.id)
                    .then(function(response) {
                        updateSession(response.data);
                    });
                updateDay($scope.timetable.intake.startDate);
                start_date = new Date($scope.timetable.intake.startDate);
                end_date = new Date($scope.timetable.intake.endDate);
                //
                $scope.week = [];
            	var tuan = 0;
                for(var i = 0; i < listTime.length; i++)
                {
                	if(listTime[i].iclass.id==currentClass.id)
                	{
                		var date1=new Date(listTime[i].date);
                		var date2=new Date($scope.timetable.intake.startDate);
                		var tuan=Math.floor((date1-date2)/86400000/7 + 1) - 1;
                		var tempCheck = true;
                		$scope.week.forEach(function(w, index){
                			if (w == tuan) {
                				tempCheck = false;
                			}
                		})
                		if (tempCheck) {	
                			$scope.week.push(tuan);
                		}
                	}
                }
                $scope.week.sort();
                start_date = $scope.timetable.intake.startDate;
            	$scope.callWeek($scope.week[0]);
            	//
                $scope.currentStartDate = start_date;
                getListTime();
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
    function getListClass() {
    	$scope.listClass = [];
        $http.get("http://localhost:8080/admin/api/class")
            .then(function(response) {
            	$scope.listClass = response.data;
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
    
    var currentClass = {};
    $scope.setClassView = function(classView) {
    	setClassView2(classView);
    	setTimeout(function(){
    		setClassView2(classView);
    	}, 400);
//    	$scope.week = [];
//    	var tuan = 0;
//        for(var i = 0; i < listTime.length; i++)
//        {
//        	if(listTime[i].iclass.id==currentClass.id)
//        	{
//        		var date1=new Date(listTime[i].date);
//        		var date2=new Date(classView.timetable.intake.startDate);
//        		var tuan=Math.floor((date1-date2)/86400000/7 + 1) - 1;
//        		var tempCheck = true;
//        		$scope.week.forEach(function(week, index){
//        			if (week == tuan) {
//        				tempCheck = false;
//        			}
//        		})
//        		if (tempCheck) {	
//        			$scope.week.push(tuan);
//        		}
//        	}
//        }
//        $scope.week.sort();
//        start_date = classView.timetable.intake.startDate;
//    	$scope.callWeek($scope.week[0]);
    }
    
    function setClassView2(classView) {
    	currentClass = classView;
    	idTimetable = classView.timetable.id;
    	id_iclass=classView.id;
    	getTimetableObj();
        
    }

    $scope.myTimetable = {
        date: ["", $scope.Mon, $scope.Tue, $scope.Wed,
            $scope.Thu, $scope.Fri, $scope.Sat, $scope.Sun
        ],
        session: $scope.listCurrentSession
    };

    $scope.callWeek = function(i) {
        $scope.currentWeek = i;
        $scope.currentStartDate = new Date(start_date);
        $scope.currentStartDate.setDate($scope.currentStartDate.getDate() + (i * 7));
        updateDay($scope.currentStartDate);
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
                    if (time.iclass.iclassName == currentClass.iclassName ) {
                    	result = result + "<span class='btn btn-xs btn-primary'>"+time.iclass.iclassName + "</span>, ";
                    	
                    } else {
                    	
                    result = result + time.iclass.iclassName + ", ";
                    }
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