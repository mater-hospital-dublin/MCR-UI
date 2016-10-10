'use strict';

angular.module('mcr-ui')
  .factory('HeightAndWeight', function ($http) {

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/heightAndWeight');

      return $http.get('/api/patients/' + '9999999000' + '/heightAndWeight');
    };

    var get = function (patientId, compositionId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/heightAndWeight' + compositionId);

      return $http.get('/api/patients/' + '9999999000' + '/heightAndWeight/' + compositionId);
    };

    var create = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/heightAndWeight', composition);

      return $http.post('/api/patients/' + '9999999000' + '/heightAndWeight', composition);
    };

    var update = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.put('/api/patients/' + patientId + '/heightAndWeight', composition);

      return $http.put('/api/patients/' + '9999999000' + '/heightAndWeight', composition);
    };

    return {
      all: all,
      get: get,
      update: update,
      create: create
    };
  });
