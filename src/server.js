var http = require('http');
var fs = require('fs');

var server =  http.createServer(handler);

var message = "I am happy to to be part of the Node Ninjas Workshop!<br />Your url:";

function  handler(req , res){
  var url = req.url;
  if(url === "/"){
    res.writeHead(200, {'Content-Type': "text/html"});
    fs.readFile(__dirname + '/../public/index.html', function(err, data){
      if(err){
        consoel.log(err);
      }else{
        res.end(data);
      }
    });
  }
  else if(url.toLowerCase() === '/node'){
    res.end('Node');
  }
  else if(url.toLowerCase() === "/girls"){
    res.end('Girls');
  }
  else{
    res.end('Not Found!!');
  }
};

server.listen(3000, function(){
  console.log('Server is Listening on port 3000!');
});
