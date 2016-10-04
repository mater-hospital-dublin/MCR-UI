'use strict';

angular.module('mcr-ui')
  .controller('ClinicalNotesDetailCtrl', function ($scope, $stateParams, SearchInput, $location, $modal, Helper, $state, usSpinnerService, PatientService, ClinicalNotes) {

    SearchInput.update();

    PatientService.get($stateParams.patientId).then(function (patient) {
      $scope.patient = patient;
    });

    ClinicalNotes.get($stateParams.patientId, $stateParams.clinicalNoteIndex, $stateParams.source).then(function (result) {
      $scope.clinicalNote = result.data;
      $scope.dateCreated = moment($scope.clinicalNote.dateCreated).format('DD-MMM-YYYY');
      usSpinnerService.stop('clinicalNoteDetail-spinner');
    });

    $scope.edit = function () {
      var modalInstance = $modal.open({
        templateUrl: 'views/clinical-notes/clinicalnotes-modal.html',
        size: 'md',
        controller: 'ClinicalNotesModalCtrl',
        resolve: {
          modal: function () {
            return {
              title: 'Edit Clinical Note'
            };
          },
          clinicalNote: function () {
            return angular.copy($scope.clinicalNote);
          },
          patient: function () {
            return $scope.patient;
          }
        }
      });

      modalInstance.result.then(function (clinicalNote) {
        var toUpdate = {
          type: clinicalNote.type,
          note: clinicalNote.note,
          author: clinicalNote.author,
          source: clinicalNote.source,
          sourceId: clinicalNote.sourceId
        };

        ClinicalNotes.update($scope.patient.id, toUpdate).then(function () {
          setTimeout(function () {
            $state.go('clinicalNotes-detail', {
              patientId: $scope.patient.id,
              clinicalNoteIndex: Helper.updateId(clinicalNote.sourceId)
            });
          }, 2000);
        });
      });
    };

  });
