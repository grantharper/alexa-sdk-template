'use strict'

module.exports.handlers = {
  'LaunchRequest': function () {
    this.emit('HelloWorldIntent');
  },
  'HelloWorldIntent': function () {
    this.emit(':tell', 'Hello World!');
    this.attributes['guessNumber'] = Math.floor(Math.random() * 100);
    this.emit(':saveState', true);
  }
};