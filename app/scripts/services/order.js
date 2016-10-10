'use strict';

angular.module('mcr-ui')
  .factory('Order', function ($http) {

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/laborders');

      return $http.get('/api/patients/' + '9999999000' + '/laborders');
    };

    var get = function (patientId, compositionId, source) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/laborders/' + compositionId + '?source=' + source);

      return $http.get('/api/patients/' + '9999999000' + '/laborders/' + compositionId + '?source=' + source);
    };

    var create = function (patientId, composition) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/laborders', composition);

      return $http.post('/api/patients/' + '9999999000' + '/laborders', composition);
    };

    var suggestion = function () {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/terminology/list/order');

      return $http.get('/api/terminology/list/order');
    };

    return {
      all: all,
      get: get,
      create: create,
      suggestion: suggestion
    };

  });
