'use strict';

angular.module('mcr-ui')
  .factory('Report', function ($http) {

    var getTable = function (searchBody) {
      return $http.post('/api/search/reports/table', searchBody);
    };

    var getWardTable = function (searchBody) {
      return $http.post('/api/search/setting/table', searchBody);
    };

    var getChart = function (searchBody) {
      return $http.post('/api/search/reports/chart', searchBody);
    };

    var searchByPatient = function (searchBody) {
      return $http.post('/api/search/patient/table', searchBody);
    };

    return {
      getChart: getChart,
      getTable: getTable,
      getWardTable: getWardTable,
      searchByPatient: searchByPatient
    };

  });
