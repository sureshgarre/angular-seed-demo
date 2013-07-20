'use strict';

var myApp = angular.module('myApp.controllers', []);

/* Factory */
myApp.factory('SpecialMessageFactory', function() {
    return {message: "I am shared data"};
});


/* Controllers */
myApp.controller('MyCtrl1', ['$scope', 'SpecialMessageFactory', function ($scope, SpecialMessageFactory) {
    $scope.specialMessage = SpecialMessageFactory;
}]);

myApp.controller('MyCtrl2', ['$scope', 'SpecialMessageFactory', function($scope, SpecialMessageFactory) {
    $scope.warningMessage = SpecialMessageFactory;
}
]);
 