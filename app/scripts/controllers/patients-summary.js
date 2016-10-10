'use strict';

angular.module('mcr-ui')
  .controller('PatientsSummaryCtrl', function ($scope, $stateParams, $state, SearchInput, $rootScope, $location, usSpinnerService, PatientService) {

    SearchInput.update();
    $scope.patients = $stateParams.patientsList;

    PatientService.get($stateParams.patientId).then(function (patient) {
      $scope.patient = patient;


      $scope.allergiesCount = patient.allergies.length;
      $scope.allergies = patient.allergies.slice(0, 5);

      $scope.diagnosesCount = patient.problems.length;
      $scope.diagnoses = patient.problems.slice(0, 5);

      $scope.medicationsCount = patient.medications.length;
      $scope.medications = patient.medications.slice(0, 5);

      $scope.contactsCount = patient.contacts.length;
      $scope.contacts = patient.contacts.slice(0, 5);

      $scope.ordersCount = patient.orders.length;
      $scope.orders = patient.orders.slice(0, 5);

      $scope.resultsCount = patient.results.length;
      $scope.results = patient.results.slice(0, 5);

      usSpinnerService.stop('patientSummary-spinner');
    });

    $scope.go = function (path) {
      $location.path(path);
    };

    $scope.goToSection = function (section) {
      var requestHeader = {
        patientId: $stateParams.patientId,
        reportType: $stateParams.reportType,
        searchString: $stateParams.searchString,
        queryType: $stateParams.queryType
      };

      var toState = '';
      switch (section) {
        case 'Problems':
          toState = 'diagnoses-list';
          break;
        case 'Allergies':
          toState = 'allergies';
          break;
        case 'Medications':
          toState = 'medications';
          break;
        case 'Contacts':
          toState = 'contacts';
          break;
        case 'Orders':
          toState = 'orders';
          break;
        case 'Results':
          toState = 'results';
          break;
      }

      $state.go(toState, requestHeader);
    };

  });
