'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', ['$scope', function($scope) {

        //A property
        $scope.status = { buildFailed: false };

        //A method
        $scope.RobJustPushedSomethingToGit = function() {
            $scope.status = { buildFailed: true };
        };

    }]);
 