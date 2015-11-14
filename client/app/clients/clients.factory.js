(function() {
  'use strict';

  angular.module("clientsApp").factory("clientsFactory", clientsFactory);

  clientsFactory.$inject = ["clientsService"];

  function clientsFactory(clientsService) {
    var clientsModel = {};
    clientsModel.fetchClients = fetchClients;
    clientsModel.getDetails = getDetails;
    clientsModel.data = {};
    clientsModel.data.clientsList = [];

    return clientsModel;

    function fetchClients() {
      clientsModel.data.clientsList.length = 0;
      clientsService.fetchClients().then(function(response) {
        _.each(response.data, function(client) {
          clientsModel.data.clientsList.push(parseResponse(client));
        });
      });
    }

    function getDetails(clientId) {
      clientsModel.data.errorMessage = undefined;
      clientsModel.data.clientDetails = _.find(clientsModel.data.clientsList, function(client) {
        return client.id === clientId;
      });

      if (_.isUndefined(clientsModel.data.clientDetails)) {
        clientsService.findById(clientId).then(
          function(response) {
            clientsModel.data.clientDetails = parseResponse(response.data);
          },
          function(err) {
            clientsModel.data.errorMessage = 'Error getting client details';
          });
      }
    }

    function parseResponse(client) {
      return {
        name: client.name,
        id: client._id,
        document: client.document,
        enrollmentDate: client.enrollmentDate,
        planType: client.planType.name,
        history: client.history
      }
    }

  }

})();
