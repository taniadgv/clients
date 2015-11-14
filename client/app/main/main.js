'use strict';

angular.module('clientsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
