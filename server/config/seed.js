'use strict';

var Client = require('../api/client/client.model');

Client.find({}).remove(function() {
  Client.create({
    name : 'Daniel Amorim',
    document: '45528378',
    planType: {
      name: 'Tipo 1'
    },
    enrollmentDate: new Date(),
    history: [{
      date: Date(),
      changeType: 'Upgrade'
    },{
      date: Date(),
      changeType: 'Changed to plan duo'
    }]
  }, {
    name : 'Tania Gonzales',
    document: '48827365',
    planType: {
      name: 'Tipo 1'
    },
    enrollmentDate: new Date(),
    history: [{
      date: Date(),
      changeType: 'Upgrade'
    },{
      date: Date(),
      changeType: 'Changed to plan duo'
    }]
  }, {
    name : 'Lucas Beier',
    document: '06748289',
    planType: {
      name: 'Tipo 2'
    },
    enrollmentDate: new Date(),
    history: [{
      date: Date(),
      changeType: 'Upgrade'
    },{
      date: Date(),
      changeType: 'Changed to plan duo'
    }]
  });
});
