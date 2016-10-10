'use strict';

angular.module('mcr-ui')
  .factory('TransferOfCare', function ($http) {

    var get = function (patientId, compositionId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/transfers-of-care/' + compositionId);

      return $http.get('/api/patients/' + '9999999000' + '/transfers-of-care/' + compositionId);
    };

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/transfers-of-care');

      return $http.get('/api/patients/' + '9999999000' + '/transfers-of-care');
    };

    var create = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/transfers-of-care', composition);

      return $http.post('/api/patients/' + '9999999000' + '/transfers-of-care', composition);
    };

    return {
      get: get,
      all: all,
      create: create
    };

  });
