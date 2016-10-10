'use strict';

angular.module('mcr-ui')
  .factory('Procedure', function ($http) {

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/procedures');

      return $http.get('/api/patients/' + '9999999000' + '/procedures');
    };

    var get = function (patientId, compositionId, source) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/procedures/' + compositionId + '?source=' + source);

      return $http.get('/api/patients/' + '9999999000' + '/procedures/' + compositionId + '?source=' + source);
    };

    var create = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/procedures', composition);

      return $http.post('/api/patients/' + '9999999000' + '/procedures', composition);
    };

    var update = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.put('/api/patients/' + patientId + '/procedures', composition);

      return $http.put('/api/patients/' + '9999999000' + '/procedures', composition);
    };

    return {
      all: all,
      get: get,
      update: update,
      create: create
    };

  });
