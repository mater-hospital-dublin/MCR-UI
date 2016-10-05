'use strict';

angular.module('mcr-ui')
  .controller('ClinicalNotesModalCtrl', function ($scope, $modalInstance, UserService, clinicalNote, patient, modal) {

    $scope.currentUser = UserService.findCurrentUser();

    $scope.clinicalNote = clinicalNote;
    $scope.patient = patient;
    $scope.modal = modal;

    if (modal.title === 'Edit Clinical Note') {
      $scope.clinicalNote.dateCreated = new Date($scope.clinicalNote.dateCreated).toISOString().slice(0, 10);
    }
    else {
      $scope.clinicalNote.dateCreated = new Date().toISOString().slice(0, 10);
    }

    $scope.ok = function (clinicalNoteForm, clinicalNote) {
      $scope.formSubmitted = true;

      if (clinicalNoteForm.$valid) {
        $modalInstance.close(clinicalNote);
      }
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
