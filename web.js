#!/usr/bin/env node

var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
   var msgFile = fs.readFileSync('index.html');
   var msgFile2 = msgFile.toString();
   response.send(msgFile2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
