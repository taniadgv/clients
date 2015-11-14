'use strict';

var _ = require('lodash');
var Client = require('./client.model');

exports.index = function(req, res) {
  Client.find(function (err, clients) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(clients);
  });
};

exports.show = function(req, res) {
  Client.findById(req.params.id, function (err, client) {
    if(err) { return handleError(res, err); }
    if(!client) { return res.status(404).send('Not Found'); }
    return res.json(client);
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
