var util = require("util");
var my_http = require("http");
var circle = require('./circle.js');
var square = require('./square.js');
var mySquare = square(2);
console.log('the area of a circle od radius 4 is ' + circle.area(4));



const PORT = 8080;

var handleRequest = function(request, response) {
  response.writeHeader(200, {"Content-Type": "text/plain"});
  response.write("success\n");
  response.end("it works! path hit: " + request.url);

};

my_http.createServer(handleRequest).listen(PORT, function() {
  console.log("server listening on http://loacalhost:%s", PORT);
});


util.puts("server running on 8080");