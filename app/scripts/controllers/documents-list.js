'use strict';

angular.module('mcr-ui')
  .controller('DocumentsListCtrl', function ($scope, $state, $stateParams, SearchInput, usSpinnerService, PatientService, DocumentService) {

    SearchInput.update();
    $scope.currentPage = 1;

    $scope.search = function (row) {
      return (
        angular.lowercase(row.documentType).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
        angular.lowercase(row.documentDate).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
        angular.lowercase(row.source).indexOf(angular.lowercase($scope.query) || '') !== -1
      );
    };

    if ($stateParams.filter) {
      $scope.query = $stateParams.filter;
    }

    PatientService.get($stateParams.patientId).then(function (patient) {
      $scope.patient = patient;
    });

    DocumentService.findAllDocuments($stateParams.patientId).then(function (result) {
      $scope.documents = result.data;

      for (var i = 0; i < $scope.documents.length; i++) {
        $scope.documents[i].documentDate = moment($scope.documents[i].documentDate).format('DD-MMM-YYYY');
      }

      usSpinnerService.stop('patientSummary-spinner');
    });

    $scope.go = function (id, documentType, source) {
      $state.go('documents-detail', {
        patientId: $scope.patient.id,
        documentType: documentType,
        documentIndex: id,
        filter: $scope.query,
        page: $scope.currentPage,
        reportType: $stateParams.reportType,
        searchString: $stateParams.searchString,
        queryType: $stateParams.queryType,
        source: source
      });
    };

    $scope.selected = function (documentIndex) {
      return documentIndex === $stateParams.documentIndex;
    };
  });
