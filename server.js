var net = require('net');
var port = 3000;

var server = net.createServer(function(socket) {
  console.log('client connected');
  socket.write('Hello Client');

  socket.on('data', function(data) {
    console.log(data.toString().trim());
    socket.write(data.toString().trim());
  });

  socket.on('end', function() {
    console.log('client disconnected');
  });
});

server.listen(port, function() {
  console.log('listening on port ' + port );
});
