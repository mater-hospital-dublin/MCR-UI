'use strict';

angular.module('mcr-ui')
  .factory('ClinicalNotes', function ($http) {

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/clinicalNotes');

      return $http.get('/api/patients/' + '9999999000' + '/clinicalNotes');
    };

    var get = function (patientId, compositionId, source) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/clinicalNotes/' + compositionId + '?source=' + source)

      return $http.get('/api/patients/' + '9999999000' + '/clinicalNotes/' + compositionId + '?source=' + source)
    };

    var create = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/clinicalNotes', composition);

      return $http.post('/api/patients/' + '9999999000' + '/clinicalNotes', composition);
    };

    var update = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.put('/api/patients/' + patientId + '/clinicalNotes', composition);

      return $http.put('/api/patients/' + '9999999000' + '/clinicalNotes', composition);
    };

    return {
      all: all,
      get: get,
      create: create,
      update: update
    };
  });
