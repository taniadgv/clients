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

exports.create = function(req, res) {
  Client.create(req.body, function(err, client) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(client);
  });
};

exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Client.findById(req.params.id, function (err, client) {
    if (err) { return handleError(res, err); }
    if(!client) { return res.status(404).send('Not Found'); }
    var updated = _.merge(client, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(client);
    });
  });
};

exports.destroy = function(req, res) {
  Client.findById(req.params.id, function (err, client) {
    if(err) { return handleError(res, err); }
    if(!client) { return res.status(404).send('Not Found'); }
    client.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
