'use strict';

/* Directives */


var app = angular.module('myApp.directives', [])

    app.
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);


app.directive('hoverBgColor', function() {
    return {
        restrict: 'A',
      
        link: function (scope, element, attributes) {
            
            element.bind('mouseenter', function() {
                element.css('background-color', attributes.hoverBgColor);
            });
            element.bind('mouseleave', function() {
                element.css('background', 'none');
            })
        }
    };
})