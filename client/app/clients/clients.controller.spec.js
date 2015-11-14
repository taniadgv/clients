'use strict';

describe('Controller: ClientsCtrl', function () {

  beforeEach(module('clientsApp'));

  var ClientsCtrl,
      clientsFactory;

  beforeEach(inject(function ($controller, _clientsFactory_) {
    clientsFactory = _clientsFactory_;
    spyOn(clientsFactory, 'fetchClients');
    ClientsCtrl = $controller('ClientsCtrl', {
      clientsFactory: clientsFactory
    });
  }));

  it('should fetch the clients list on creation', function () {
    expect(clientsFactory.fetchClients).toHaveBeenCalled();
  });

  it('should get client details with correct id', function () {
    spyOn(clientsFactory, 'getDetails');
    ClientsCtrl.goToDetails(1);
    expect(clientsFactory.getDetails).toHaveBeenCalledWith(1);
  });
});
