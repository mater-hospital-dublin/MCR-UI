'use strict';

angular.module('mcr-ui')
  .factory('DocumentService', function ($http) {

    var findAllDocuments = function (patientId) {
      return $http.get('/api/patients/' + patientId + '/documents');
    };

    var findReferral = function (patientId, referralId, source) {
      return $http.get('/api/patients/' + patientId + '/documents/referral/' + referralId + '?source=' + source);
    };

    var findDischarge = function (patientId, dischargeId, source) {
      return $http.get('/api/patients/' + patientId + '/documents/discharge/' + dischargeId + '?source=' + source);
    };

    var uploadReferral = function (patientId, referral) {
      return $http.post('/api/patients/' + patientId + '/documents/referral', referral);
    };

    var uploadDischarge = function (patientId, discharge) {
      return $http.post('/api/patients/' + patientId + '/documents/discharge', discharge);
    };

    return {
      findAllDocuments: findAllDocuments,
      findReferral: findReferral,
      findDischarge: findDischarge,
      uploadReferral: uploadReferral,
      uploadDischarge: uploadDischarge
    };

  });
