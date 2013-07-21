'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('truncatetext', function() {
      return function (text, length) {
          
          if (isNaN(length)) {
              length = 25;
          }
          
          if (text.length <= length) {
              return text;
          }

          return String(text).substring(0, length) + "...";
      };
  });
