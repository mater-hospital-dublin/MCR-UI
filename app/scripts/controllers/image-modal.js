'use strict';

angular.module('mcr-ui')
  .controller('ImageModalCtrl', function ($scope, $modalInstance, UserService, dicomImageId, patient, modal) {

    $scope.currentUser = UserService.findCurrentUser();

    $scope.patient = patient;
    $scope.modal = modal;
    $scope.dicomId = dicomImageId;

    $scope.ok = function () {
      $modalInstance.close();
    };
  });
