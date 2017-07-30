var http = require('http');

var server =  http.createServer(handler);

var message = "I am happy to to be part of the Node Ninjas Workshop!";

function  handler(request , response){
  response.writeHead(200, {'Content-Type': "text/html"});
  response.write(message);
  response.end();
};

server.listen(3000, function(){
  console.log('Server is Listening on port 3000!');
});
