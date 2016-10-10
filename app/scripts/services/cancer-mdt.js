'use strict';

angular.module('mcr-ui')
  .factory('CancerMdt', function ($http) {

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/mdtreports/');

      return $http.get('/api/patients/' + '9999999000' + '/mdtreports/');
    };

    var get = function (patientId, compositionId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/mdtreports/' + compositionId);

      return $http.get('/api/patients/' + '9999999000' + '/mdtreports/' + compositionId);
    };

    var create = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/mdtreports', composition);

      return $http.post('/api/patients/' + '9999999000' + '/mdtreports', composition);
    };

    var update = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.put('/api/patients/' + patientId + '/mdtreports', composition);

      return $http.put('/api/patients/' + '9999999000' + '/mdtreports', composition);
    };

    return {
      all: all,
      get: get,
      create: create,
      update: update
    };

  });
