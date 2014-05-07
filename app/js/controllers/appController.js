/**
*   Main App controller, looking after global elements
*/
var sizrApp = angular.module('sizrApp', []);
sizrApp.controller('AppController', ['$scope', function ($scope) {
	'use strict';

    $scope.windowTitle = "Position Sizr";
}]);
