'use strict';

angular.module('mcr-ui')
  .factory('Appointment', function ($http) {

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/appointments');

      return $http.get('/api/patients/' + '9999999000' + '/appointments');
    };

    var get = function (patientId, compositionId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/appointments/' + compositionId);

      return $http.get('/api/patients/' + '9999999000' + '/appointments/' + compositionId);
    };

    var create = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/appointments', composition);

      return $http.post('/api/patients/' + '9999999000' + '/appointments', composition);
    };

    var update = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.put('/api/patients/' + patientId + '/appointments', composition);

      return $http.put('/api/patients/' + '9999999000' + '/appointments', composition);
    };

    return {
      all: all,
      get: get,
      update: update,
      create: create
    };

  });
