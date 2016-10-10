'use strict';

angular.module('mcr-ui')
  .factory('Eolcareplan', function ($http) {

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/eolcareplans');

      return $http.get('/api/patients/' + '9999999000' + '/eolcareplans');
    };

    var get = function (patientId, compositionId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/eolcareplans/' + compositionId);

      return $http.get('/api/patients/' + '9999999000' + '/eolcareplans/' + compositionId);
    };

    var create = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/eolcareplans', composition);

      return $http.post('/api/patients/' + '9999999000' + '/eolcareplans', composition);
    };

    var update = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.put('/api/patients/' + patientId + '/eolcareplans', composition);

      return $http.put('/api/patients/' + '9999999000' + '/eolcareplans', composition);
    };

    return {
      all: all,
      get: get,
      update: update,
      create: create
    };

  });
