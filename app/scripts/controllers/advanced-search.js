'use strict';

angular.module('mcr-ui')
  .controller("AdvancedSearchController", function ($scope, $modalInstance, $state, modal, searchParams, AdvancedSearch) {

    $scope.modal = modal;
    $scope.searchParams = searchParams;
    $scope.formSubmitted = false;
    $scope.detailsFocused = false;
    $scope.modalReopened = false;

    if ($scope.searchParams.mrnNumber) {
      $scope.mrnNumberFocus = true;
    }
    else if ($scope.searchParams.surname) {
      $scope.surnameFocus = true;
    }
    else {
      $scope.mrnNumberFocus = true;
    }

    if ($scope.searchParams.dateOfBirth) {
      $scope.searchParams.dateOfBirth = new Date($scope.searchParams.dateOfBirth).toISOString().slice(0, 10);
      $scope.detailsFocused = true;
      $scope.modalReopened = true;
    }

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.ok = function (searchForm) {
      if (searchForm.$valid) {
        $scope.searchParams.nhsNumber = $scope.searchParams.mrnNumber;

        AdvancedSearch.searchByDetails($scope.searchParams).then(function (result) {
          $scope.patients = result.data;
          changeState();
        });
      }
    };

    var changeState = function () {
      $scope.formSubmitted = true;
      $modalInstance.close();

      if ($scope.patients.length == 1) {
        $state.go('patients-summary', {
          patientId: $scope.patients[0].mrnNumber
        });
      }
      else if ($scope.patients.length > 1) {
        $state.go('patients-list', {
          patientsList: $scope.patients,
          advancedSearchParams: $scope.searchParams
        });
      }
      else {
        $state.go('patients-list', {
          patientsList: $scope.patients,
          advancedSearchParams: $scope.searchParams,
          displayEmptyTable: true
        });
      }
    };

    $scope.openDatePicker = function ($event, name) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope[name] = true;
    };

    $scope.isMrnNumberRequired = function (advancedSearchForm) {
      var mrnNumber = $scope.advancedSearchForm.mrnNumber.$viewValue;

      if (mrnNumber === undefined && $scope.areDetailsFieldsClean(advancedSearchForm)) {
        return true;
      }

      mrnNumber = mrnNumber.replace(/\s+/g, '');

      var mrnNumberInvalid = isNaN(mrnNumber) || (advancedSearchForm.mrnNumber.$invalid && mrnNumber.length === 0);

      return mrnNumberInvalid && $scope.areDetailsFieldsClean(advancedSearchForm);
    };

    $scope.isMrnNumberTooShort = function (value) {
      if (value === undefined) {
        return false;
      }

      var mrnNumber = value.replace(/\s+/g, '');

      return !isNaN(mrnNumber) && mrnNumber.length > 0 && mrnNumber.length < 7;
    };

    $scope.isMrnNumberTooLong = function (value) {
      if (value === undefined) {
        return false;
      }

      var mrnNumber = value.replace(/\s+/g, '');

      return !isNaN(mrnNumber) && mrnNumber.length > 7;
    };

    $scope.isMrnNumberFieldInvalid = function (mrnNumberField) {
      return mrnNumberField.$invalid || mrnNumberField.$pristine;
    };

    $scope.areDetailsFieldsClean = function (advancedSearchForm) {
      var surname = advancedSearchForm.surname;
      var forename = advancedSearchForm.forename;
      var dateOfBirth = advancedSearchForm.dateOfBirth;

      var surnameClean = surname.$invalid || !$scope.searchParams.surname || $scope.searchParams.surname == '';
      var forenameClean = forename.$invalid || !$scope.searchParams.forename || $scope.searchParams.forename == '';
      var dateOfBirthClean = dateOfBirth.$invalid || !$scope.searchParams.dateOfBirth || $scope.searchParams.dateOfBirth == '';

      return surnameClean && forenameClean && dateOfBirthClean;
    };
  });
