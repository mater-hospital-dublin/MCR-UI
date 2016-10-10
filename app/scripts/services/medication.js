'use strict';

angular.module('mcr-ui')
  .factory('Medication', function ($http) {

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/medications');

      return $http.get('/api/patients/' + '9999999000' + '/medications');
    };

    var get = function (patientId, compositionId, source) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/medications/' + compositionId + '?source=' + source);

      return $http.get('/api/patients/' + '9999999000' + '/medications/' + compositionId + '?source=' + source);
    };

    var create = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/medications', composition);

      return $http.post('/api/patients/' + '9999999000' + '/medications', composition);
    };

    var update = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.put('/api/patients/' + patientId + '/medications', composition);

      return $http.put('/api/patients/' + '9999999000' + '/medications', composition);
    };

    return {
      all: all,
      get: get,
      update: update,
      create: create
    };

  });
