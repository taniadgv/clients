'use strict';

(function() {
  'use strict';

  angular.module("clientsApp").controller("ClientDetailCtrl", ClientDetailCtrl);

  ClientDetailCtrl.$inject = ["clientsFactory", "$stateParams"];

  function ClientDetailCtrl(clientsFactory, $stateParams) {
    var vm = this;
    vm.data = clientsFactory.data;

    clientsFactory.getDetails($stateParams.id);
  }
})();
