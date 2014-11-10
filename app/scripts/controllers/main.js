'use strict';

/**
 * @ngdoc function
 * @name ngFlickrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngFlickrApp
 */
angular.module('ngFlickrApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
