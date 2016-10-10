'use strict';

angular.module('mcr-ui')
  .factory('DocumentService', function ($http) {

    var findAllDocuments = function (patientId) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/documents');

      return $http.get('/api/patients/' + '9999999000' + '/documents');
    };

    var findReferral = function (patientId, referralId, source) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/documents/referral/' + referralId + '?source=' + source);

      return $http.get('/api/patients/' + '9999999000' + '/documents/referral/' + referralId + '?source=' + source);
    };

    var findDischarge = function (patientId, dischargeId, source) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.get('/api/patients/' + patientId + '/documents/discharge/' + dischargeId + '?source=' + source);

      return $http.get('/api/patients/' + '9999999000' + '/documents/discharge/' + dischargeId + '?source=' + source);
    };

    var uploadReferral = function (patientId, referral) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/documents/referral', referral);

      return $http.post('/api/patients/' + '9999999000' + '/documents/referral', referral);
    };

    var uploadDischarge = function (patientId, discharge) {
      // TODO reinstate the following line when test data for Mater patients has been loaded
      // return $http.post('/api/patients/' + patientId + '/documents/discharge', discharge);

      return $http.post('/api/patients/' + '9999999000' + '/documents/discharge', discharge);
    };

    return {
      findAllDocuments: findAllDocuments,
      findReferral: findReferral,
      findDischarge: findDischarge,
      uploadReferral: uploadReferral,
      uploadDischarge: uploadDischarge
    };

  });
