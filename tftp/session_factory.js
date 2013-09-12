var Session = require('./session.js').Session;

function SessionFactory(streamFactory) {
  this.streamFactory = streamFactory;
}

SessionFactory.prototype.createSession = function(id, socket, destination) {
  return new Session(id, socket, destination, this.streamFactory);
};

exports.SessionFactory = SessionFactory;