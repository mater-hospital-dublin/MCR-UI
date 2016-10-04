'use strict';

angular.module('mcr-ui')
  .controller('ImageListCtrl', function ($scope, $location, $stateParams, SearchInput, $modal, usSpinnerService, $state, PatientService, Image) {

    $scope.currentPage = 1;

    SearchInput.update();

    $scope.pageChangeHandler = function (newPage) {
      $scope.currentPage = newPage;
    };

    if ($stateParams.page) {
      $scope.currentPage = $stateParams.page;
    }

    $scope.search = function (row) {
      return (
        angular.lowercase(row.studyDescription).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
        angular.lowercase(row.dateRecorded).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
        angular.lowercase(row.source).indexOf(angular.lowercase($scope.query) || '') !== -1
      );
    };

    if ($stateParams.filter) {
      $scope.query = $stateParams.filter;
    }

    PatientService.get($stateParams.patientId).then(function (patient) {
      $scope.patient = patient;
    });

    Image.allStudies($stateParams.patientId).then(function (result) {
      $scope.images = result.data;

      for (var i = 0; i < $scope.images.length; i++) {
        var image = $scope.images[i];
        image.dateRecorded = moment(image.dateRecorded).format('DD-MMM-YYYY');

        if (image.studyDescription === null || image.studyDescription === '') {
          image.studyDescription = 'N/A';
        }
      }

      usSpinnerService.stop('imagesList-spinner');
    });

    $scope.go = function (id, source) {
      $state.go('images-detail', {
        patientId: $scope.patient.id,
        studyId: id,
        source: source,
        filter: $scope.query,
        page: $scope.currentPage,
        reportType: $stateParams.reportType,
        searchString: $stateParams.searchString,
        queryType: $stateParams.queryType
      });
    };

    $scope.selected = function (imageIndex) {
      return imageIndex === $stateParams.studyId;
    };

  });
