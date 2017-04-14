app.controller('specializationCtrl', function($scope, $http, $filter) {
    $scope.rowdata = {
        availableOptions: [{
            id: '15',
            name: '15 rows'
        }, {
            id: '30',
            name: '30 rows'
        }, {
            id: '50',
            name: '50 rows'
        }, {
            id: '100',
            name: '100 rows'
        }],
        selectedOption: {
            id: '15',
            name: '15 rows'
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
        $http.get("http://localhost:8080/api/specialization")
            .then(function(response) {
                $scope.list = response.data;
            })
    }
    getListSpecializations();

    // refresh list (call get list)
    $scope.refreshList = function() {
        getListSpecializations();
    }

    // $scope.sortType = 'specializationName';
    $scope.filterTable = '';
    // Tìm kiếm theo tên
    $scope.filterSort = function(element) {
        if ($filter('filter')([element], $scope.filterTable).length > 0) {
            return 1;
        }
        return 2;
    };

    // Phân trang
    $scope.currentPage = 1;
    // max size of the pagination bar
    $scope.maxPaginationSize = 10;
    $scope.itemsPerPage = 15;
    $scope.updatePageIndexes = function() {
        var totalPages = Math.ceil($scope.list.length /
            $scope.maxPaginationSize);
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
        $scope.firstIndex = ($scope.currentPage - 1) *
            $scope.itemsPerPage;
        $scope.lastIndex = $scope.currentPage *
            $scope.itemsPerPage;
    };
    $scope.updatePageIndexes();

    $scope.showList = function(spec, index) {
        return (($scope.filterSort(spec) == 1) &&
            (index >= $scope.firstIndex) && (index < $scope.lastIndex));
    }

    // add specialization
    $scope.addSpecialization = function() {
        var specializationId = document
            .getElementById("specializationId_add").value;
        var specializationName = document
            .getElementById("specializationName_add").value;
        var activeElement = $scope.active_add;
        $http({
                method: "POST",
                url: "/api/specialization",
                data: {
                    specializationId: specializationId,
                    specializationName: specializationName,
                    active: activeElement
                },
//                dataType: "json",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(
                function(response) {
                    // $("#myModal_them").modal("hide");
                    getListSpecializations();
                    alertAddSucess();
                    $scope.ResetForm_Add();
                },
                function(response) {
                    if (response.status == 406) {
                        alertFailMessage("Oops! Duplicate ID is not allowed.");
                    }
                });

    }

    // update specialization
    $scope.callEditSpecialization = function(data) {
        $http.get("/api/specialization/" + data.id).then(
            function(response) {
                $scope.info = response.data;
            });
    }

    $scope.editSpecialization = function() {
        $http({
                method: "PUT",
                url: "/api/specialization",
                data: JSON.stringify($scope.info),
                dataType: "json",
            })
            .then(
                function(response) {
                    getListSpecializations();
                    alertEditSucess();
                },
                function(response) {
                    if (response.status == 406) {
                        alertFailMessage("Oops! Duplicate ID is not allowed.");
                    }
                });
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
        $http({
                method: "PUT",
                url: "/api/specialization",
                data: JSON
                    .stringify($scope.info_editRelevantSubject),
                contentType: 'application/json; charset=UTF-8',
                dataType: "json",
            })
            .then(
                function(response) {
                    alertEditSucess();
                },
                function(response) {
                    if (response.status == 406) {
                        alertFailMessage("Oops! Duplicate ID is not allowed.");
                    }
                });
    }

    // delete specialization
    $scope.callDeleteSpecialization = function(data) {
        deleteSpecialization = data;
    }
    $scope.deleteSpecialization = function() {
        $http({
            method: "DELETE",
            url: "/api/specialization/" +
                deleteSpecialization.id,
            dataType: "json",
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

    function alertDeleteSucess() {
        swal({
            title: "",
            text: "Delete Successfully",
            type: "success",
            timer: alertDuration,
            showConfirmButton: false
        });
    }

    function alertEditSucess() {
        swal({
            title: "",
            text: "Edit Successfully",
            type: "success",
            timer: alertDuration,
            showConfirmButton: false
        });
    }

    function alertAddSucess() {
        swal({
            title: "",
            text: "Add Successfully",
            type: "success",
            timer: alertDuration,
            showConfirmButton: false
        });
    }

    function alertFail() {
        swal({
            title: "",
            text: "Opps! Something went wrong.",
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
        $scope.specializationId_add = "";
        $scope.specializationName_add = "";
        $scope.active_add = true;
        $scope.formAdd.specializationId_add.$setUntouched();
        $scope.formAdd.specializationName_add.$setUntouched();

    }
});