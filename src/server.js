var http = require('http');

var server =  http.createServer();

server.listen(3000, function(){
  console.log('Server is Listening on port 3000!');
});
