'use strict';

angular.module('mcr-ui')
  .factory('Referral', function ($http) {

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/referrals');

      return $http.get('/api/patients/' + '9999999000' + '/referrals');
    };

    var get = function (patientId, compositionId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/referrals/' + compositionId);

      return $http.get('/api/patients/' + '9999999000' + '/referrals/' + compositionId);
    };

    var create = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/referrals', composition);

      return $http.post('/api/patients/' + '9999999000' + '/referrals', composition);
    };

    var update = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.put('/api/patients/' + patientId + '/referrals', composition);

      return $http.put('/api/patients/' + '9999999000' + '/referrals', composition);
    };

    return {
      all: all,
      get: get,
      update: update,
      create: create
    };

  });
