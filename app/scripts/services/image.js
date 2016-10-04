'use strict';

angular.module('mcr-ui')
  .factory('Image', function ($http) {

    var allStudies = function (patientId) {
      return $http.get('/api/patients/' + patientId + '/dicom/' + 'studies');
    };

    var getAllSeriesInStudy = function (patientId, studyId, source) {
      return $http.get('/api/patients/' + patientId + '/dicom/' + 'studies/' + studyId + '/series' + '?source=' + source);
    };

    var getSeriesDetails = function (patientId, seriesId, source) {
      return $http.get('/api/patients/' + patientId + '/dicom/' + 'series/' + seriesId + '?source=' + source);
    };

    var getInstanceId = function (patientId, seriesId, source) {
      return $http.get('/api/patients/' + patientId + '/dicom/' + 'series/' + seriesId + '/instance' + '?source=' + source);
    };

    var getInstance = function (patientId, instanceId, source) {
      return $http.get('/api/patients/' + patientId + '/dicom/' + 'instances/' + instanceId + '?source=' + source)
    };

    return {
      allStudies: allStudies,
      getAllSeriesInStudy: getAllSeriesInStudy,
      getSeriesDetails: getSeriesDetails,
      getInstanceId: getInstanceId,
      getInstance: getInstance
    };

  });
