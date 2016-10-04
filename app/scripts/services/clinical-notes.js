'use strict';

angular.module('mcr-ui')
  .factory('ClinicalNotes', function ($http) {

    var all = function (patientId) {
      return $http.get('/api/patients/' + patientId + '/clinicalNotes');
    };

    var get = function (patientId, compositionId, source) {
      return $http.get('/api/patients/' + patientId + '/clinicalNotes/' + compositionId + '?source=' + source)
    };

    var create = function (patientId, composition) {
      return $http.post('/api/patients/' + patientId + '/clinicalNotes', composition);
    };

    var update = function (patientId, composition) {
      return $http.put('/api/patients/' + patientId + '/clinicalNotes', composition);
    };

    return {
      all: all,
      get: get,
      create: create,
      update: update
    };
  });
