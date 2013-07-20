'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', ['$scope', '$routeParams', function($scope, $routeParams) {
      $scope.OrgID = $routeParams.organisationId;
  }]);