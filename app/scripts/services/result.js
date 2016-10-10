'use strict';

angular.module('mcr-ui')
  .factory('Result', function ($http) {

    var get = function (patientId, compositionId, source) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/labresults/' + compositionId + '?source=' + source);

      return $http.get('/api/patients/' + '9999999000' + '/labresults/' + compositionId + '?source=' + source);
    };

    var all = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/labresults');

      return $http.get('/api/patients/' + '9999999000' + '/labresults');
    };

    return {
      all: all,
      get: get
    };

  });
