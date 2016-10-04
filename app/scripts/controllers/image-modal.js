'use strict';

angular.module('mcr-ui')
  .controller('ImageModalCtrl', function ($scope, $modalInstance, UserService, dicomImageId, patient, modal) {

    UserService.findCurrentUser().then( function (result) {
      $scope.currentUser = result.data;
    });

    $scope.patient = patient;
    $scope.modal = modal;
    $scope.dicomId = dicomImageId;

    $scope.ok = function () {
      $modalInstance.close();
    };
  });
