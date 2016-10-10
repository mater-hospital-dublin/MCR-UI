'use strict';

angular.module('mcr-ui')
  .factory('Diagnosis', function ($http) {

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/diagnoses');

      return $http.get('/api/patients/' + '9999999000' + '/diagnoses');
    };

    var get = function (patientId, compositionId, source) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/diagnoses/' + compositionId + '?source=' + source);

      return $http.get('/api/patients/' + '9999999000' + '/diagnoses/' + compositionId + '?source=' + source);
    };

    var create = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/diagnoses', composition);

      return $http.post('/api/patients/' + '9999999000' + '/diagnoses', composition);
    };

    var update = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.put('/api/patients/' + patientId + '/diagnoses', composition);

      return $http.put('/api/patients/' + '9999999000' + '/diagnoses', composition);
    };

    return {
      all: all,
      get: get,
      update: update,
      create: create
    };

  });

