'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('myApp.services', []).
  value('version', '0.1');

services.factory('fleetDataAlerts', function($http) {
    return {
        GetFleetDataAlerts: function() {
            return $http.get('http://flight.apiary.io/v1/Fleet/Alerts?apiToken=00000000-0000-0000-0000-000000000000&skip=0&take=7');
        }
    };
});


