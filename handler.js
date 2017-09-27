'use strict';

const Alexa = require('alexa-sdk'),
  info = require('info'),
  handlers = require('intents').handlers;

module.exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context, callback);
  alexa.appId = info.applicationId;
  alexa.dynamoDBTableName = info.tableName;
  alexa.registerHandlers(handlers);
  alexa.execute();
};


