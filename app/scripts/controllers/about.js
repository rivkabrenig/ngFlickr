'use strict';

/**
 * @ngdoc function
 * @name ngFlickrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngFlickrApp
 */
angular.module('ngFlickrApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
