'use strict';

describe('Factory: Clients', function () {

  beforeEach(module('clientsApp'));

  var clientsService,
      clientsFactory,
      $httpBackend;

  beforeEach(inject(function (_$httpBackend_, _clientsService_, _clientsFactory_) {
    $httpBackend = _$httpBackend_;
    clientsFactory = _clientsFactory_;
  }));

  it('should fetch the client list and parse it', function () {
    $httpBackend.expectGET('/api/clients')
      .respond([{name: 'User 1', planType: {}}, {name: 'User 2', planType: {}}]);
    clientsFactory.fetchClients();
    $httpBackend.flush();
    expect(clientsFactory.data.clientsList.length).toBe(2);
  });

  it('should fetch the client list and parse it', function () {
    $httpBackend.expectGET('/api/clients/123')
      .respond({name: 'User 1', planType: {}});
    clientsFactory.getDetails(123);
    $httpBackend.flush();
    expect(clientsFactory.data.clientDetails.name).toBe('User 1');
  });
});
