app.controller('studentCtrl', function($scope, $http, $filter, $resource,uiGridConstants) {
    $scope.rowdata = {
        availableOptions: [{
            id: '15',
            name: '15'
        }, {
            id: '30',
            name: '30'
        }, {
            id: '50',
            name: '50'
        }, {
            id: '100',
            name: '100'
        }],
        selectedOption: {
            id: '15',
            name: '15'
        }
    };
    $scope.ChangeRow = function(index) {
        $scope.itemsPerPage = index;
        $scope.updatePageIndexes();
    }
    var alertDuration = 1800;
    $scope.list =[];
    // Lấy danh sách Student
    function GetListStudent() {
        var Student = $resource('http://localhost:8080/admin/api/Student');
        Student.query().$promise.then(function(listStudent) {
            $scope.list = listStudent;
            $scope.gridOptions.data = listStudent;
            listAllStudent = listStudent;
            console.log($scope.list);

        });

    }  
    
    // Lấy số lượng student theo intake id, bỏ vào biến
    // countStudent
    // var numberOfStudent = 0;
    //
    // function countStudent(intakeId) {
    // var Student =
    // $resource('http://localhost:8080/admin/api/Student');
    // Student.query().$promise.then(function(listStudent) {
    //
    // listStudent.forEach(function(item, index) {
    // if (item.intake.intakeId === intakeId) {
    // numberOfStudent = numberOfStudent + 1;
    // }
    // });
    // // alert(numberOfStudent);
    // });
    // }
    // countStudent("IN005");
    //					

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
    function GetListentrance_Exam() {
        $scope.list_entrance_exam = [];
        var entranceExam = $resource('http://localhost:8080/admin/api/StudentEntranceExam');
        entranceExam.query().$promise.then(function(
            listentranceexam) {

            $scope.list_entrance_exam = listentranceexam;
            console.log($scope.list_entrance_exam);

        });

    }
    // lọc entrance exam theo intake
    $scope.filterEntranceExamByIntake_Edit = function(student, onload) {
        $scope.listEntranceExamForEdit = [];
        $scope.list_entrance_exam
            .forEach(function(item, index) {
                if (item.intake.id == student.intake.id) {
                    $scope.listEntranceExamForEdit
                        .push(item);
                }
            });
        if (onload) {
            for (var i = 0; i < $scope.listEntranceExamForEdit.length; i++) {
                if (student.entranceExam.entranceExamName == $scope.listEntranceExamForEdit[i].entranceExamName) {
                    $scope.list_temp_inf_edit.entranceExam = $scope.listEntranceExamForEdit[i];
                    break;
                }
            }
        } else {
            $scope.list_temp_inf_edit.entranceExam = $scope.listEntranceExamForEdit[0];
        }
    }
    $scope.filterEntranceExamByIntake_Add = function() {
        $scope.listEntranceExamForAdd = [];
        $scope.list_entrance_exam
            .forEach(function(item, index) {
                if (item.intake.id === $scope.student.intake.id) {
                    $scope.listEntranceExamForAdd
                        .push(item);
                }
            });
        if (onload) {
            for (var i = 0; i < $scope.list_entrance_exam.length; i++) {
                if (response.data.entranceExam.entranceExamName == $scope.list_entrance_exam[i].entranceExamName) {
                    $scope.student.entranceExam = $scope.list_entrance_exam[i];
                    break;
                }
            }
        } else {
            $scope.student.entranceExam = $scope.listEntranceExamForAdd[0];
        }
    }

    GetListStudent();
    GetListIntake();
    GetListspecialization();
    GetListschool();
    GetListentrance_Exam();
    
    //Tạo dữ liệu cho table
    $scope.gridOptions = {
    		noUnselect : true,
    		multiSelect: false,
    		enableRowSelection: true,
    		enableRowHeaderSelection: false,
    	    enableSelectAll: false,
    	    enableGridMenu: true,
    		enableFiltering: true,
    		enableColumnResize: true,
    		enableColumnMenus: false,
    	    paginationPageSizes: [15, 30, 50, 100],
    	    paginationPageSize: 15,
    	    columnDefs: [
    		      { name: 'studentId', displayName : 'Student ID'},
    		      { name: 'username' },
    		      { name: 'lastname', displayName : 'Last Name' },
    		      { name: 'firstname', displayName : 'First Name'},
    		      { name: 'birthday', visible : false, cellFilter: 'date:"MM/dd/yyyy"' },
    		      { name: 'email', visible : false },
    		      { name: 'phone', visible : false },
    		      { name: 'address', visible : false },
    		      { name: 'school.schoolName', displayName : 'School', visible : false },
    		      { name: 'intake.intakeName', displayName : 'Intake', visible : false },
    		      { name: 'entranceExam.entranceExamName',displayName : 'Extrance exam', visible : false },
    		      { name: 'specialization.specializationName',displayName : 'Specialization', visible : false },
    		      { name: 'status', filter: {
    		          type: uiGridConstants.filter.SELECT,
    		          selectOptions: [
    		              { value: 'Studying', label: 'Studying' },
    		              { value: 'Dropped', label: 'Dropped' },
    		              { value: 'Graduated',label: 'Graduated'}
    		          ]
    		      }},
    		      { name: 'Action',enableSorting: false,enableFiltering: false,
    		             cellTemplate:'<button ng-click="grid.appScope.chitiet1(row.entity)" data-toggle="modal" class="btn btn-success btn-sm" data-tooltip ="tooltip" title="View detail informations" data-target="#myModal_detail"><span class="glyphicon glyphicon-eye-open"></span></button>' 
    		            	 			+'<button class="btn btn-primary btn-sm" ng-click="grid.appScope.sua(row.entity)" data-tooltip ="tooltip" title="Edit"	data-toggle="modal" data-target="#myModal_sua"><span class="glyphicon glyphicon-edit"></span></button>'
    		            	 			+'<button ng-click="grid.appScope.xoa(row.entity)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete" data-target="#myModal_xoa"><span class="glyphicon glyphicon-remove"></span></button>'
    		      }
    		    ]
    	  };
    
    //Filter all data
    $scope.refreshData = function (termObj) {
        $scope.gridOptions.data = $scope.list;

        while (termObj) {
            var oSearchArray = termObj.split(' ');
            $scope.gridOptions.data = $filter('filter')($scope.gridOptions.data, oSearchArray[0], undefined);
            oSearchArray.shift();
            termObj = (oSearchArray.length !== 0) ? oSearchArray.join(' ') : '';
        }
    };
    
    $scope.sortType = 'firstName';
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
            return capitalizeFirstLetter((makeReadableLabel(baseSortType)) + ' ' + order);
        }
        return 'Sort by ' + makeReadableLabel(label1)
    };
    
    // filter by intake
    function createNewListIntake() {
    	 $scope.listIntakeForFilter = [];
         var Intake = $resource('http://localhost:8080/admin/api/StudentIntake');
         Intake.query().$promise.then(function(listintake) {

             $scope.listIntakeForFilter = listintake;

         });
//         var intakeAll = {intakeName : "All"};
//    	$scope.listIntakeForFilter.push(intakeAll);
    }
    
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
        $scope.image1 = photofile.name;

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
        $scope.list_temp_inf_edit.image = photofile.name
    };
    // kiểm tra retype password

    // upload file
    function uploadFile() {
        $.ajax({
            type: "POST",
            url: "/admin/student/uploadFile",
            type: "POST",
            data: new FormData($("#fileUploadForm")[0]),
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            cache: false,
            success: function() {
                // Handle upload success
                $("#upload-file-message").text(
                    "File succesfully uploaded");
            },
            error: function() {
                // Handle upload error
                // $("#upload-file-message")
                // .text(
                // "File not uploaded (perhaps it's too big)");
            }
        });
    };
    // kiểm ra trùng username
    function usernameduplicate(username) {
        // var Student =
        // $resource('http://localhost:8080/admin/api/Student');
        // Student.query().$promise.then(function(listStudent) {
        var flag = true;
        $scope.list.forEach(function(item, index) {
        	if (username !="")
        		{
		            if (item.username === username) {
		                // alertduplicatestudent();
		                $scope.duplicateAlert = "Duplicate username";
		                flag = false;
		            }
        		}
        });
        // alert(numberOfStudent);
        // });
        return flag;
    }

    $scope.hideDuplicateAlert = function() {
        $scope.duplicateAlert = "";
    }
    $scope.student = {};
    // Reset form Add
    $scope.loadthem = function() {
        $scope.gender = 0;
        $scope.status = "Studying";
        $scope.student.username = "";
        $scope.password = "";
        $scope.duplicateAlert = "";
        $scope.student.firstname = "";
        $scope.student.lastname = "";
        $scope.re_password = "";
        $scope.student.email = "";
        $scope.student.phone = "";
        $scope.student.address = "";
        $scope.birthday = "";
        $scope.student.intake = "";
        $scope.student.entranceExam = "";
        $scope.student.school = "";
        $scope.student.specialization = "";

        $scope.active = true;
        $scope.frmStudentAdd.username.$setUntouched();
        $scope.frmStudentAdd.lastName.$setUntouched();
        $scope.frmStudentAdd.firstName.$setUntouched();
        $scope.frmStudentAdd.password.$setUntouched();
        $scope.frmStudentAdd.re_password.$setUntouched();
        $scope.frmStudentAdd.phone.$setUntouched();
        $scope.frmStudentAdd.email.$setUntouched();
        $scope.frmStudentAdd.address.$setUntouched();
        document.getElementById("uploadfile1").value = "";
        document.getElementById("prev_img").src = "";
        $scope.prev_img = "";
        $scope.student.intake = $scope.list_intake[0];
        $scope.student.entranceExam = $scope.list_entrance_exam[0];
        $scope.filterEntranceExamByIntake_Add();
        $scope.student.school = $scope.list_school[0];
        $scope.student.specialization = $scope.list_specialization[0];
    }
    $scope.image1 = "";
    // thêm student
    $scope.them = function(close) {

        if ($scope.image1 === "") {
            $scope.image1 = "noImage.png";
        }
        else{
     		uploadFile();
        }
        	
        if ( $scope.student.username==null)
        	{
        		$scope.student.username ="";
        		$scope.student.gender = $scope.gender;
	            $scope.student.status = $scope.status;
	            $scope.student.image = $scope.image1;
	            $scope.student.birthday = $scope.birthday;
	            $scope.student.password = $scope.password;
	            var numberOfStudent = 0;
	            var Student = $resource('http://localhost:8080/admin/api/Student');
	            Student.query().$promise
	                .then(function(listStudent) {

	                    listStudent
	                        .forEach(function(item, index) {
	                            if (item.intake.intakeId == $scope.student.intake.intakeId) {
	                                numberOfStudent = numberOfStudent + 1;
	                            }
	                        });
	                    numberOfStudent = numberOfStudent + 1;
	                    // console.log(numberOfStudent);
	                    var numberstring = numberOfStudent
	                        .toString();
	                    // console.log(numberstring);
	                    if (numberstring.length == 1) {
	                        numberstring = "000" + numberstring;
	                    }
	                    if (numberstring.length == 2) {
	                        numberstring = "00" + numberstring;
	                    }
	                    if (numberstring.length == 3) {
	                        numberstring = "0" + numberstring;
	                    }
	                    if (numberstring.length == 4) {
	                        numberstring = numberstring;
	                    }
	                    // hai số cuối của năm
	                    var date = new Date();
	                    var year = date.getFullYear()
	                        .toString();
	                    //

	                    // dem so luong hoc sinh trong 1 intake
	                    // var numberstudent = "";

	                    // mã học viên
	                    var mahv6 = $scope.student.intake.intakeId + "-" + year.substr(2, 4) + "-" + $scope.student.gender + "-" + numberstring;

	                    $scope.student.studentId = mahv6;
	                    $http({
	                        method: "POST",
	                        url: "/admin/api/Student",
	                        data: JSON
	                            .stringify($scope.student),
	                        dataType: "json"
	                    }).then(
	                        function mySucces(response) {
	                            if (close === true) {
	                                $("#myModal_them")
	                                    .modal("hide");
	                            }
	                            GetListStudent();
	                            addAlert(mahv6);

	                        });

	                })

        	}
        else{
        	if (usernameduplicate($scope.student.username)) {
        		
        		$scope.student.gender = $scope.gender;
	            $scope.student.status = $scope.status;
	            $scope.student.image = $scope.image1;
	            $scope.student.birthday = $scope.birthday;
	            $scope.student.password = $scope.password;

            var numberOfStudent = 0;
            var Student = $resource('http://localhost:8080/admin/api/Student');
            Student.query().$promise
                .then(function(listStudent) {

                    listStudent
                        .forEach(function(item, index) {
                            if (item.intake.intakeId === $scope.student.intake.intakeId) {
                                numberOfStudent = numberOfStudent + 1;
                            }
                        });
                    numberOfStudent = numberOfStudent + 1;
                    // console.log(numberOfStudent);
                    var numberstring = numberOfStudent
                        .toString();
                    // console.log(numberstring);
                    if (numberstring.length == 1) {
                        numberstring = "000" + numberstring;
                    }
                    if (numberstring.length == 2) {
                        numberstring = "00" + numberstring;
                    }
                    if (numberstring.length == 3) {
                        numberstring = "0" + numberstring;
                    }
                    if (numberstring.length == 4) {
                        numberstring = numberstring;
                    }
                    // hai số cuối của năm
                    var date = new Date();
                    var year = date.getFullYear()
                        .toString();
                    //

                    // dem so luong hoc sinh trong 1 intake
                    // var numberstudent = "";

                    // mã học viên
                    var mahv6 = $scope.student.intake.intakeId + "-" + year.substr(2, 4) + "-" + $scope.student.gender + "-" + numberstring;

                    $scope.student.studentId = mahv6;
                    $http({
                        method: "POST",
                        url: "/admin/api/Student",
                        data: JSON
                            .stringify($scope.student),
                        dataType: "json"
                    }).then(
                        function mySucces(response) {
                            if (close === true) {
                                $("#myModal_them")
                                    .modal("hide");
                            }
                            GetListStudent();
                            addAlert(mahv6);

                        });

                })
        	}
        }
    };
    // sửa student
    $scope.edit = function edit() {
       uploadFile_Edit();  
    	//uploadFile() ;
        $http({
            method: "PUT",
            url: "/admin/api/Student",
            data: $scope.list_temp_inf_edit
        }).then(function mySucces(response) {
            $('#myModal_sua').modal('hide');
            GetListStudent();
            editAlert();

            // $scope.updatePageIndexes();
            //						
            // $scope.showList = function(index) {
            // return ((index >= $scope.firstIndex) && (index <
            // $scope.lastIndex));
            //								
            // }
            // GetListStudent();
        });
    }
    
    // load chi tiet student
    $scope.chitiet = [];
    $scope.chitiet1 = function(data) {
        $scope.chitiet =  data;
    }
    // reset password
//    $scope.reset = function(data) {
//        $scope.list_temp_inf_reset.password = $scope.newPassword;
//        $http({
//            method: "PUT",
//            url: "http://localhost:8080/admin/api/Student_Reset",
//            data: $scope.list_temp_inf_reset
//        }).then(function mySucces(response) {
//            $('#myModal_confirmReset').modal('hide');
//            GetListStudent();
//            resetAlert();
//        });
//    }
    // xóa student
    $scope.deleteStudent = function xoa() {
        console.log($scope.list_temp_inf_delete.id);
        $http({
            method: "DELETE",
            url: "/admin/api/Student/" + $scope.list_temp_inf_delete.id

        }).then(function mySucces(response) {
            $('#myModal_xoa').modal('hide');
            GetListStudent();
            deleteAlert();
        });
    }
    // lấy dữ liệu để sửa
    // array did filter

    $scope.sua = function(data) {
        $http.get("http://localhost:8080/admin/api/Student/" + data.id)
            .then(function(response) {
                $scope.list_temp_inf_edit = [];
                $scope.prev_img_edit = [];
                $scope.list_temp_inf_edit = response.data;

                $scope.prev_img_edit = '';
                document
                    .getElementById("image_edit").value = "";
                // $scope.list_temp_inf_edit = data;
                $scope.list_temp_inf_edit.username = response.data.username;               		
                $scope.list_temp_inf_edit.lastname = response.data.lastname;
                $scope.list_temp_inf_edit.firstname = response.data.firstname;
                $scope.list_temp_inf_edit.email = response.data.email;
                $scope.list_temp_inf_edit.phone = response.data.phone;
                $scope.list_temp_inf_edit.address = response.data.address;
                $scope.list_temp_inf_edit.status = response.data.status;
                $scope.list_temp_inf_edit.image = response.data.image;
                $scope.list_temp_inf_edit.birthday = new Date(
                    response.data.birthday)
                $scope.list_temp_inf_edit.gender = response.data.gender == 0 ? '0' : '1';
                for (var i = 0; i < $scope.list_intake.length; i++) {
                    if (response.data.intake.intakeName == $scope.list_intake[i].intakeName) {
                        $scope.list_temp_inf_edit.intake = $scope.list_intake[i];
                        break;
                    }
                }
                for (var i = 0; i < $scope.list_school.length; i++) {
                    if (response.data.school.schoolName == $scope.list_school[i].schoolName) {
                        $scope.list_temp_inf_edit.school = $scope.list_school[i];
                        break;
                    }
                }

                
//                for (var i = 0; i < $scope.list_entrance_exam.length; i++) {
//                    if (response.data.entranceExam.entranceExamName ==
//                        $scope.list_entrance_exam[i].entranceExamName) {
//                        $scope.list_temp_inf_edit.entranceExam = $scope.list_entrance_exam[i];
//                        break;
//                    }
//                }
                
                // filter extrance exam by intake
                $scope.filterEntranceExamByIntake_Edit(response.data, true);

                for (var i = 0; i < $scope.list_specialization.length; i++) {
                    if (response.data.specialization.specializationName == $scope.list_specialization[i].specializationName) {
                        $scope.list_temp_inf_edit.specialization = $scope.list_specialization[i];
                        break;
                    }
                }

            });


    };
    // lấy dữ liệu để xóa
    $scope.list_temp_inf_delete = [];
    $scope.xoa = function(data) {
        $scope.list_temp_inf_delete = data;
        console.log($scope.list_temp_inf_delete);
    }
    // lấy dữ liệu để reset
    $scope.list_temp_inf_reset = [];
    $scope.resetpasword = function() {
        $scope.list_temp_inf_reset = $scope.list_temp_inf_edit;
    }
    //Reset form Reset Password
    $scope.resetpasword = function()
    {
    	$scope.newPassword ="";
		 $scope.reNewPassword="";
		 $scope.frmReset.newPassword.$setUntouched();
		 $scope.frmReset.reNewPassword.$setUntouched();
    }
    // kiểm tra retype password
    $scope.kiemtra = function() {
        // console.log($scope.password);
        // console.log($scope.newpassword);
        if ($scope.password == $scope.newpassword) {
            $scope.ketqua = "";
        } else {
            $scope.ketqua = "Must match the previous field";
        }
    }

    function uploadFile_Edit() {
        $
            .ajax({
                url: "/admin/student/uploadFile",
                type: "POST",
                data: new FormData(
                    $("#upload-file-form-edit")[0]),
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                cache: false,
                success: function() {
                    // Handle upload success
                    $("#upload-file-message").text(
                        "File succesfully uploaded");
                },
                error: function() {
                    // Handle upload error
                    $("#upload-file-message")
                        .text(
                            "File not uploaded (perhaps it's too big)");
                }
            });
    }
    $scope.ResetPassword = function() {
        $scope.list_temp_inf_edit.password = $scope.newPassword;
        console.log( $scope.list_temp_inf_edit.password);
        $http({
            method: "PUT",
            url: "http://localhost:8080/admin/api/Student_Reset",
            data: JSON
            .stringify($scope.list_temp_inf_edit),
            dataType: "json"
        }).then(function(result) {
            $("#myModal_confirmReset").modal("hide");
            resetAlert();
        });
    }
    // Hàm tự động điền các text input trong form Add
    // Đặt con trỏ vào ô username, bấm Alt + Q
    $scope.autoAdd = function(keyEvent) {
        if (keyEvent.keyCode == 81 && keyEvent.altKey) {
            var random = getRandomInt(1, 10000);
            $scope.student.username = "Billgate" + random;
            $scope.student.firstname = "Bill" + random;
            $scope.student.lastname = "Gate" + random;
            $scope.password = "123";
            $scope.re_password = "123";
            $scope.student.email = "Billgate" + random + "@gmail.com";
            $scope.student.phone = random * 2;
            $scope.student.address = "Earth, District " + random;
            $scope.birthday = new Date("3/25/1997");
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function deleteAlert() {
        swal({
            title: "",
            text: "Delete successfully.",
            type: "success",
            timer: 2000,
            showConfirmButton: false
        });
    }

    function editAlert() {
        swal({
            title: "",
            text: "Edit successfully.",
            type: "success",
            timer: 2000,
            showConfirmButton: false
        });
    }

    function resetAlert() {
        swal({
            title: "",
            text: "Reset password successfully.",
            type: "success",
            timer: 2000,
            showConfirmButton: false
        });
    }

    function addAlert(ID) {
        swal({
            title: "",
            text: "Adding student successfully with ID: " + ID,
            type: "success",
            showConfirmButton: true
        });
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

    /*
     * function alertduplicatestudent() { swal({ title: "",
     * text: "Oops! Something went wrong, please check your
     * input again.", type: "error", timer: alertDuration,
     * showConfirmButton: false }) }
     */

    function resetAlert() {
        swal({
            title: "",
            text: "Reset successfully.",
            type: "success",
            timer: 2000,
            showConfirmButton: false
        });
    }
})
// Compare password and retype password
app.directive("matchPassword", function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=matchPassword"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.matchPassword = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});
// );
//Chu thich cua nut phan action
$(document).ready(function() {
    $('body').tooltip({
        selector: "[data-tooltip=tooltip]",
        container: "body"
    });
});

