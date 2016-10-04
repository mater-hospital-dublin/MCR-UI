'use strict';

angular.module('mcr-ui')
  .factory('DateFormatter', function () {

    var clean = function (date) {
      return moment(date).format('YYYY-MM-DD');
    };

    return {
        clean:clean
    };

  });
