'use strict';

angular.module('mcr-ui')
  .factory('Allergy', function ($http) {

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/allergies');

      return $http.get('/api/patients/' + '9999999000' + '/allergies');
    };

    var get = function (patientId, compositionId, source) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/allergies/' + compositionId + '?source=' + source);

      return $http.get('/api/patients/' + '9999999000' + '/allergies/' + compositionId + '?source=' + source);
    };

    var create = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/allergies', composition);

      return $http.post('/api/patients/' + '9999999000' + '/allergies', composition);
    };

    var update = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.put('/api/patients/' + patientId + '/allergies', composition);

      return $http.put('/api/patients/' + '9999999000' + '/allergies', composition);
    };

    return {
      all: all,
      get: get,
      update: update,
      create: create
    };

  });
