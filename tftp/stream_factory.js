var fs = require('fs');

function StreamFactory() {

}

StreamFactory.prototype.checkPath = function(path, callback) {
  fs.stat(path, function(error, stats) {
    if(error) {
      callback(error);
    } else if(!stats.isFile()) {
      callback(path + " is not a file")
    } else {
      callback();
    }
  })
};

StreamFactory.prototype.createReadStream = function(path) {
  return fs.createReadStream(path, { flags: 'r', bufferSize: 512 });
};

StreamFactory.prototype.createWriteStream = function(path) {
  return fs.createWriteStream(path, { flags: 'w'});
};

exports.StreamFactory = StreamFactory;