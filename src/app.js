'use strict';

angular.module('testApp', [])
.controller('MainCtrl', ['$scope', function($scope) {
  $scope.name = 'world';
}]);