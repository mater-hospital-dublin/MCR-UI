'use strict';

angular.module('mcr-ui')
  .factory('SearchInput', function ($rootScope, $stateParams) {

    var update = function () {
      if ($stateParams.queryType === 'Ward: ') {
        $rootScope.searchMode = true;
        $rootScope.wardMode = true;
        $rootScope.reportMode = false;
        $rootScope.patientMode = false;
        $rootScope.subHeader = $stateParams.queryType + $stateParams.searchString;
      } else if ($stateParams.queryType === 'Reports: ') {
        $rootScope.searchMode = true;
        $rootScope.reportMode = true;
        $rootScope.wardMode = false;
        $rootScope.patientMode = false;
        $rootScope.reportTypeSet = true;
        $rootScope.reportTypeString = $stateParams.reportType;
        $rootScope.subHeader = $stateParams.queryType + $stateParams.reportType + ': ' + $stateParams.searchString + ' & Aged ' + $stateParams.ageFrom + ' to ' + $stateParams.ageTo;
      } else if ($stateParams.queryType === 'Patient: '){
        $rootScope.searchMode = true;
        $rootScope.reportMode = false;
        $rootScope.wardMode = false;
        $rootScope.reportTypeSet = false;
        $rootScope.patientMode = true;
        $rootScope.subHeader = $stateParams.queryType + $stateParams.searchString;
      }
    };

    return {
      update: update
    };

  });
