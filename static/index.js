"use strict";

// Definition of student type
class Student {
    // ID of the student
    id;
    // Name of the student
    name;

    // Creates a new Student object
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
} 

// Gets the mainApp section of the HTML document
var mainApp = angular.module("mainApp", []);

// Creates the controller for the main application.
mainApp.controller("studentController", function($scope) {
    // Sets a new model value --student.
    $scope.student = new Student("001", "Kevin Chalmers");
    /*$scope.students = [
        new Student("001", "Kevin Chalmers"),
        new Student("002", "Chiara De Matteis")];*/
    // Sets the update() function for the scope. Used by the button.
    $scope.update = function() {
        $scope.student.id = "002";
        $scope.student.name = "Lisa Haskel";
    }
});
