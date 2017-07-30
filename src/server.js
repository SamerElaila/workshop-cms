var http = require('http');
var fs = require('fs');

var ContentTypes = {
  css: "text/css",
  js : "application/javascript",
  ico: 'image/x-icon',
  png: "image/x-png",
  jpg: "image/x-jpg"
}

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
  // else if(url === "/public/"){
  //
  // }
  else{
      // main.css & image.jpg
      // console.log(__dirname + "/../public" + url);

    fs.readFile(__dirname + '/../public'+url , function(err, data){
      if(err){
        console.log(err);
      }
      else{
        res.end(data);
      }
    });
  }
};


// if(url.startsWith("/public/")){
//   var parts = url.split('.');
//   var fileExtension = parts[parts.length -1];
//   fs.readFile(__dirname + '/..' + url, function(err, data){
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.writeHead(200 , {'Content-Type': ContentTypes[fileExtension]});
//       res.end(data);
//     }
//   });

server.listen(3000, function(){
  console.log('Server is Listening on port 3000!');
});
