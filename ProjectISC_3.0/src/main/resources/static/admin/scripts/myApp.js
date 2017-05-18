var app = angular.module('myApp', [ 'ngRoute', 'ui.bootstrap', 'ngResource',
		'ngMessages' ]);
app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider.when("/intake", {
		templateUrl : "intake.html",
		controller : "intakeCtrl"
	}).when("/school", {
		templateUrl : "school.html",
		controller : "schoolCtrl"
	}).when("/specialization", {
		templateUrl : "specialization.html",
		controller : "specializationCtrl"
	}).when("/subject", {
		templateUrl : "subject.html",
		controller : "subjectCtrl"
	}).when("/entrance-exam", {
		templateUrl : "entranceExam.html",
		controller : "entranceExamCtrl"
	}).when("/student", {
		templateUrl : " student.html",
		controller : "studentCtrl"
	}).when("/instructor", {
		templateUrl : " instructor.html",
		controller : "instructorCtrl"
	});
});