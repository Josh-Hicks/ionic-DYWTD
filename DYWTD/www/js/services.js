angular.module('starter.services', [])
  .factory('Dogs', ['$scope', '$http', function($scope, $http){

    return function() {
      return dogs;
    }

  }]);
