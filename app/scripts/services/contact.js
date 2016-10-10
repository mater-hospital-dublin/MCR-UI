'use strict';

angular.module('mcr-ui')
  .factory('Contact', function ($http) {

    var get = function (patientId, compositionId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/contacts/' + compositionId);

      return $http.get('/api/patients/' + '9999999000' + '/contacts/' + compositionId);
    };

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/contacts');

      return $http.get('/api/patients/' + '9999999000' + '/contacts');
    };

    var create = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/contacts', composition);

      return $http.post('/api/patients/' + '9999999000' + '/contacts', composition);
    };

    var update = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.put('/api/patients/' + patientId + '/contacts', composition);

      return $http.put('/api/patients/' + '9999999000' + '/contacts', composition);
    };

    return {
      all: all,
      get: get,
      update: update,
      create: create
    };

  });
