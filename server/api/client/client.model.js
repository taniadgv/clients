'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClientSchema = new Schema({
  name: String,
  document: String,
  planType: {name: String, price: Number},
  enrollmentDate: Date,
  history: [{date: Date, changeType: String}],
});

module.exports = mongoose.model('Client', ClientSchema);
