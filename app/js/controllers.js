'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', ['$scope', function($scope) {

        $scope.message = "From a controller";

    }]);
 