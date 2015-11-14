'use strict';

(function() {
  'use strict';

  angular.module("clientsApp").controller("ClientsCtrl", ClientsCtrl);

  ClientsCtrl.$inject = ["clientsFactory"];

  function ClientsCtrl(clientsFactory) {
    var vm = this;
    vm.clients = clientsFactory.data.clientsList;
    vm.goToDetails = goToDetails;

    clientsFactory.fetchClients();

    function goToDetails(index) {
      clientsFactory.getDetails(index);
    }
  }
})();
