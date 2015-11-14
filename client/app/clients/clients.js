'use strict';

angular.module('clientsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('clients', {
          abstract: true,
          url: '/clients',
          templateUrl: 'app/clients/clients.html'        
      })
      .state('clients.list', {
          url: '/list',
          templateUrl: 'app/clients/clients-list.html'
      })
      .state('clients.detail', {
          url: '/:id',
          templateUrl: 'app/clients/clients-detail.html'
      });
  });
   