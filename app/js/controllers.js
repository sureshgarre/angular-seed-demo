'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', ['$scope', 'fleetDataAlerts', '$timeout', function ($scope, fleetDataAlerts, $timeout) {

        
        var POLL_FREQUENCY_SECONDS = 30;
        
        fleetDataAlerts.GetFleetDataAlerts().success(function (data) {
            $scope.FleetDataAlerts = data.Events;
        

        });
        
        $scope.$watch('FleetDataAlerts', function() {
            $scope.dataLoaded = ($scope.FleetDataAlerts == null);
        });
        
        var renewFeedsTimeout = $timeout(function renewFeeds() {
            fleetDataAlerts.GetFleetDataAlerts();
            renewFeedsTimeout = $timeout(renewFeeds, POLL_FREQUENCY_SECONDS * 1000);
        }, POLL_FREQUENCY_SECONDS * 1000);

        $scope.$on('$destroy', function () {
            $timeout.cancel(renewFeedsTimeout);
        });
        
    }]);
 