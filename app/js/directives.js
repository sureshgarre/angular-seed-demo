'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
    .directive('hoverDataAlertEntry', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attributes) {
                element.bind('mouseenter', function() {
                    element.css('background-color', 'violet');
                    scope.$apply('showDeliveryDate = false');
                });
                element.bind('mouseleave', function() {
                    element.css('background-color', 'white');
                    scope.$apply('showDeliveryDate = false');
                });
            }
        };
    });
