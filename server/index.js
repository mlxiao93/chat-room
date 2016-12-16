var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.json('hello world');
});

io.on('connection', function(socket){
  io.emit('message', 'a user connected');
  socket.on('disconnect', function() {
    io.emit('message', 'a user disconnected');
  });

  socket.on('message', function(message) {
    io.emit('message', message);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});