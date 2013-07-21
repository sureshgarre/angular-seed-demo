'use strict';

var myApp = angular.module('myApp.controllers', []);

/* Factory */
myApp.factory('fleetTypesFactory', function($http) {
    //Returning a promise
    return {
        getStuff: function() {
            return $http.get('http://flight.apiary.io/v1/Fleet/EventTypes?apiToken=00000000-0000-0000-0000-000000000001')
                .then(function(result) {
                    return result.data;
                });

        }
    };
});


/* Controllers */
myApp.controller('MyCtrl1', ['$scope', 'fleetTypesFactory', function ($scope, fleetTypesFactory) {
    
        //This could take a long time...
    fleetTypesFactory.getStuff().then(function (data) {
        $scope.FleetEventTypes = data.EventTypes;
    });

        $scope.isEventTypesEmpty = true;
        
        //Watching an array for changes
        $scope.$watch('FleetEventTypes', function() {
            $scope.isEventTypesEmpty = ($scope.FleetEventTypes == null);
        }, false);
    }]);
 