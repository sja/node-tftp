var Server = require('./tftp/server').Server;
var SessionFactory = require('./tftp/session_factory.js').SessionFactory;
var StreamFactory = require('./tftp/stream_factory.js').StreamFactory;

var server = new Server(69, new SessionFactory(new StreamFactory));
server.listen(function(){
  console.log("TFTP server available on %s:%d", server.address().address,
                                                server.address().port);
});

