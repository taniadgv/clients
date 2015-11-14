(function() {
  'use strict';

  angular.module("clientsApp").service("clientsService", ClientsService);

  ClientsService.$inject = ['$http'];

  function ClientsService($http) {

    this.fetchClients = fetchClients;
    this.findById = findById;

    function fetchClients() {
      return $http.get('/api/clients');
    }

    function findById(id) {
      return $http.get('/api/clients/' + id);
    }
  }
})();
