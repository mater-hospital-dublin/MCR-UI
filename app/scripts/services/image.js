'use strict';

angular.module('mcr-ui')
  .factory('Image', function ($http) {

    var allStudies = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/dicom/' + 'studies');

      return $http.get('/api/patients/' + '9999999000' + '/dicom/' + 'studies');
    };

    var getAllSeriesInStudy = function (patientId, studyId, source) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/dicom/' + 'studies/' + studyId + '/series' + '?source=' + source);

      return $http.get('/api/patients/' + '9999999000' + '/dicom/' + 'studies/' + studyId + '/series' + '?source=' + source);
    };

    var getSeriesDetails = function (patientId, seriesId, source) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/dicom/' + 'series/' + seriesId + '?source=' + source);

      return $http.get('/api/patients/' + '9999999000' + '/dicom/' + 'series/' + seriesId + '?source=' + source);
    };

    var getInstanceId = function (patientId, seriesId, source) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/dicom/' + 'series/' + seriesId + '/instance' + '?source=' + source);

      return $http.get('/api/patients/' + '9999999000' + '/dicom/' + 'series/' + seriesId + '/instance' + '?source=' + source);
    };

    var getInstance = function (patientId, instanceId, source) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/dicom/' + 'instances/' + instanceId + '?source=' + source);

      return $http.get('/api/patients/' + '9999999000' + '/dicom/' + 'instances/' + instanceId + '?source=' + source);
    };

    return {
      allStudies: allStudies,
      getAllSeriesInStudy: getAllSeriesInStudy,
      getSeriesDetails: getSeriesDetails,
      getInstanceId: getInstanceId,
      getInstance: getInstance
    };

  });
