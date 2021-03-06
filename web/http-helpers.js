var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  fs.readFile(asset, function(error, data){
    if(error) {
      res.writeHead(500);
      res.end()
    }else{
      res.writeHead(200, {'Content-Type':'text/html'});
      res.end(data, 'utf-8');
      console.log('served' + asset);
    }
  });
};
// sendResponse(statusCode, )
// As you progress, keep thinking about what helper functions you can put here!
